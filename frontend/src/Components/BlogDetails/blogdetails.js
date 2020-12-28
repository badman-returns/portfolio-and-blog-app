import "./blogdetails.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseAPIURL, baseBackendURL } from "../../configs";

function BlogDetails() {
  const [blog, setBlog] = useState({});
  let { id } = useParams();

  useEffect(() => {
    fetch(`${baseAPIURL}/blog/${id}`)
      .then((res) => res.json())
      .then((response) => {
        setBlog(response.ResponseData);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [id]);

  return (
    <section id="content">
      <div className="container">
        <div className="col-sm-12">
          <div className="title">
            <h1 className="text-center">{blog.title}</h1>
          </div>
          <br></br>
          <br></br>
          <div className="image col-sm-12">
            <img
              src={baseBackendURL + "/" + blog.imagePath}
              alt="blog"
              width="100%"
            />
          </div>
          <div className="content col-sm-12">
            <p className="text-center">{blog.content}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogDetails;
