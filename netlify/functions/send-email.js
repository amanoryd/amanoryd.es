const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  console.log('Función send-email iniciada');
  console.log('Method:', event.httpMethod);
  
  // Solo permitir POST
  if (event.httpMethod !== 'POST') {
    console.log('Método no permitido');
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Método no permitido' })
    };
  }

  try {
    console.log('Body recibido:', event.body);
    const data = JSON.parse(event.body);
    const { name, email, phone, message } = data;

    console.log('Datos parseados:', { name, email, phone });

    // Verificar variables de entorno
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Variables de entorno no configuradas');
      throw new Error('Variables de entorno EMAIL_USER o EMAIL_PASS no están configuradas');
    }

    console.log('Email configurado:', process.env.EMAIL_USER);

    // Configurar el transportador de correo
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    console.log('Transporter creado');

    // Verificar la conexión
    await transporter.verify();
    console.log('Conexión SMTP verificada');

    // Correo de confirmación para el cliente
    const mailOptionsCliente = {
      from: '"Amano Reformas y Decoración" <' + process.env.EMAIL_USER + '>',
      to: email,
      subject: 'Hemos recibido tu mensaje - Amano Reformas',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #2c3e50; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
            .content { background-color: #f9f9f9; padding: 30px; border-radius: 0 0 5px 5px; }
            .info-box { background-color: white; padding: 15px; border-left: 4px solid #3498db; margin: 20px 0; }
            .footer { text-align: center; margin-top: 20px; color: #777; font-size: 12px; padding: 20px; }
            .button { background-color: #3498db; color: white !important; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">¡Gracias por contactarnos!</h1>
            </div>
            <div class="content">
              <p>Hola <strong>${name}</strong>,</p>
              <p>Hemos recibido tu mensaje correctamente y nos pondremos en contacto contigo lo antes posible.</p>
              
              <h3 style="color: #2c3e50; margin-top: 30px;">Resumen de tu consulta:</h3>
              <div class="info-box">
                <p style="margin: 5px 0;"><strong>Nombre:</strong> ${name}</p>
                <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
                <p style="margin: 5px 0;"><strong>Teléfono:</strong> ${phone}</p>
                <p style="margin: 15px 0 5px 0;"><strong>Mensaje:</strong></p>
                <p style="margin: 5px 0; white-space: pre-wrap;">${message}</p>
              </div>
              
              <p>Nuestro horario de atención es de <strong>lunes a viernes, mañanas de 9:00 a 14:00, tardes de 16:00 a 19:00</strong>.</p>
              <p>Responderemos tu consulta en un plazo máximo de 24-48 horas laborables.</p>
              
              <div style="text-align: center;">
                <a href="tel:+34917857716" class="button">Llámanos: +34 917 85 77 16</a>
              </div>
            </div>
            <div class="footer">
              <p style="margin: 5px 0;"><strong>Amano, Reformas y Decoración</strong></p>
              <p style="margin: 5px 0;">Calle Historias de la Radio 3, Portal 4 (Local)</p>
              <p style="margin: 5px 0;">28018 Madrid</p>
              <p style="margin: 5px 0;">Tel: +34 917 85 77 16 | Móvil: +34 603 03 03 16</p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    // Correo de notificación para ti
    const mailOptionsEmpresa = {
      from: '"Formulario Web Amano" <' + process.env.EMAIL_USER + '>',
      to: process.env.EMAIL_USER,
      subject: 'Nuevo mensaje de contacto de ' + name,
      html: `
        <h2>Nuevo mensaje del formulario de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Teléfono:</strong> <a href="tel:${phone}">${phone}</a></p>
        <p><strong>Mensaje:</strong></p>
        <div style="background-color: #f0f0f0; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message}</div>
        <hr>
        <p><small>Enviado desde el formulario de contacto web</small></p>
      `
    };

    console.log('Enviando correo al cliente...');
    const infoCliente = await transporter.sendMail(mailOptionsCliente);
    console.log('Correo enviado al cliente:', infoCliente.messageId);

    console.log('Enviando correo a la empresa...');
    const infoEmpresa = await transporter.sendMail(mailOptionsEmpresa);
    console.log('Correo enviado a la empresa:', infoEmpresa.messageId);

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        message: 'Correos enviados exitosamente',
        clientMessageId: infoCliente.messageId,
        companyMessageId: infoEmpresa.messageId
      })
    };

  } catch (error) {
    console.error('Error completo:', error);
    console.error('Error stack:', error.stack);
    console.error('Error message:', error.message);
    
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        message: 'Error al enviar el correo', 
        error: error.message,
        details: error.toString()
      })
    };
  }
};