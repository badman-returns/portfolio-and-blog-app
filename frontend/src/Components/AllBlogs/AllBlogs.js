import React,{useState, useEffect} from "react";
import "./allblogs.css";
import { Link } from "react-router-dom";
import {baseAPIURL, baseBackendURL} from '../../configs';
import Spinner from "../Spinner/spinner";

function AllBlogs() {
  const[blog, setBlog] = useState([]);
  const[loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch(`${baseAPIURL}/blog`)
      .then((res) => res.json())
      .then((response) => {
        setBlog(response.ResponseData);
        setLoading(false);
      });
    }, 3000);
  }, []);

  return(
    <section id="blogs">
      {loading ? <Spinner/> :
    <div className="card-group">
      {blog.reverse().map((blog) => {
        return (
          <div className="row" key={blog.id}>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={`${baseBackendURL}/${blog.imagePath}`}
                  alt="Card cap"
                />
                <div className="card-bodie">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text">{blog.description}</p>
                  <Link to={`/blog/${blog.id}`} className="btn btn-success">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    }
  </section>
  );
}




export default AllBlogs;