import React from "react";
import Nav from "../components/nav/Nav";
import Blog from "../components/blog/Blog";
import Footer from "../components/footer/Footer";

const BlogPage = () => {
  return (
    <>
      <Nav />
      <div style={{paddingTop: "12vh", backgroundColor: "#000000"}}></div>
			<Blog />
			<Footer />
    </>
  );
};

export default BlogPage;
