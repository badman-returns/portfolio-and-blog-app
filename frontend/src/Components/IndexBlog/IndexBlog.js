import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { baseAPIURL, baseBackendURL } from "../../configs";
import "./indexblog.css";

function BlogPost() {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch(`${baseAPIURL}/blog`)
      .then((res) => res.json())
      .then((response) => {
        setBlog(response.ResponseData);
      });
  }, []);

  return (
    <section id="indexBlogs">
      <h1
        className="text-center"
        style={{
          fontFamily: "Noto Sans JP",
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      >
        Recent Blogs
      </h1>
      <div className="card-group">
        {blog
          .reverse()
          .slice(0, 3)
          .map((blog) => {
            return (
              <div className="row" key={blog.id}>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      className="card-img-top"
                      src={baseBackendURL + "/" + blog.imagePath}
                      alt="Card cap"
                    />
                    <div className="card-bodi">
                      <h5 className="card-title">{blog.title}</h5>
                      <p className="card-text">{blog.description}</p>
                      <Link
                        to={`/blog/${blog.id}`}
                        className="btn btn-success"
                        style={{ color: "white" }}
                      >
                        Read more
                      </Link>
                      <Link to="/blogs" className="btn btn-primary">
                        More Blogs
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}

export default BlogPost;
