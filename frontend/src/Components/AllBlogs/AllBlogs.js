import React from "react";
import "./allblogs.css";
import { Link } from "react-router-dom";
import {baseAPIURL, baseBackendURL} from '../../configs';



class AllBlogs extends React.Component {
  state = {
    blog: [],
  };
  async componentDidMount() {
    await fetch(`${baseAPIURL}/blog`)
      .then((response) => response.json())
      .then((result) => {
        this.setState({ blog: result.ResponseData });
        console.log(this.state.blog);
      });
  }

  render() {
    const { blog } = this.state;
    return (
      <section id="blogs">
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
        <div className="back-button">
          <Link to="/">
            <img
              src={
                process.env.PUBLIC_URL + "/assets/icons/arrow-left-circle.svg"
              }
              alt="Go home"
            />
          </Link>
        </div>
      </section>
    );
  }
}

export default AllBlogs;