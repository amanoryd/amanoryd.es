const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  // Solo permitir POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Método no permitido' })
    };
  }

  try {
    const data = JSON.parse(event.body);
    const { name, email, phone, message } = data;

    // Configurar el transportador de correo
    // Usando Gmail como ejemplo (puedes usar otro servicio)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Tu correo
        pass: process.env.EMAIL_PASS  // Tu contraseña de aplicación
      }
    });

    // Correo de confirmación para el cliente
    const mailOptionsCliente = {
      from: `"Amano Reformas" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: '✅ Hemos recibido tu mensaje - Amano Reformas',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #2c3e50; color: white; padding: 20px; text-align: center; }
            .content { background-color: #f9f9f9; padding: 30px; border-radius: 5px; margin-top: 20px; }
            .footer { text-align: center; margin-top: 20px; color: #777; font-size: 12px; }
            .button { background-color: #3498db; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>¡Gracias por contactarnos!</h1>
            </div>
            <div class="content">
              <p>Hola <strong>${name}</strong>,</p>
              <p>Hemos recibido tu mensaje correctamente y nos pondremos en contacto contigo lo antes posible.</p>
              
              <h3>Resumen de tu consulta:</h3>
              <p><strong>Nombre:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Teléfono:</strong> ${phone}</p>
              <p><strong>Mensaje:</strong></p>
              <p style="background-color: white; padding: 15px; border-left: 4px solid #3498db;">${message}</p>
              
              <p>Nuestro horario de atención es de lunes a viernes de 9:00 a 14:00 y de 16:00 a 19:00.</p>
              
              <a href="tel:+34917857716" class="button">Llámanos: +34 917 85 77 16</a>
            </div>
            <div class="footer">
              <p><strong>Amano, Reformas y Decoración</strong></p>
              <p>Calle Historias de la Radio 3, Portal 4 (Local) - 28018 Madrid</p>
              <p>Tel: +34 917 85 77 16 | Móvil: +34 603 03 03 16</p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    // Correo de notificación para ti (opcional pero recomendado)
    const mailOptionsEmpresa = {
      from: `"Formulario Web" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Tu correo donde recibirás las notificaciones
      subject: `🔔 Nuevo mensaje de contacto de ${name}`,
      html: `
        <h2>Nuevo mensaje del formulario de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Mensaje:</strong></p>
        <p style="background-color: #f0f0f0; padding: 15px;">${message}</p>
        <hr>
        <p><small>Enviado desde el formulario de contacto web</small></p>
      `
    };

    // Enviar ambos correos
    await transporter.sendMail(mailOptionsCliente);
    await transporter.sendMail(mailOptionsEmpresa);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Correos enviados exitosamente' })
    };

  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error al enviar el correo', error: error.message })
    };
  }
};
```

### Paso 4: Configurar variables de entorno en Netlify

1. Ve a tu sitio en Netlify Dashboard
2. Ve a **Site settings > Environment variables**
3. Añade estas variables:
```
EMAIL_USER = tucorreo@gmail.com
EMAIL_PASS = tu_contraseña_de_aplicación