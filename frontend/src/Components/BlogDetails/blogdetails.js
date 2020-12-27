import './blogdetails.css'
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BlogDetails() {
  const [blog, setBlog] = useState({ });
  let { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/api/v2/blog/${id}`)
      .then((res) => res.json())
      .then((response) => {
        setBlog(response.ResponseData);
      }).catch((e) => {
        console.log(e);
      });
  }, [id]);

  return(
   
    <section id="content">  
    <div className="container">
      <div className="col-sm-12">
        <div className="title">
        <h1 className="text-center">
          {blog.title}
        </h1>
        </div>
    <div className="content">
      <p className="text-center">
        {blog.content}
        </p>
      </div>
        </div>
      </div>
    </section>
    
  )
}

export default BlogDetails;