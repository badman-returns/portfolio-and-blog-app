import React from "react";
import Navbar from "./Navbar/Navbar";
import Banner from "./IndexBanner/IndexBanner";
import Description from "./IndexBio/IndexBio";
import BlogPost from "./IndexBlog/IndexBlog";
import Footer from "./Footer/Footer";
import AboutMe from "./About/About";
import AllBlogs from "./AllBlogs/AllBlogs";
import BlogDetails from "./BlogDetails/blogdetails";
import Software from "./Software/software";
import ScrollToTop from "./scrollToTop";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function PublicRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Banner />
          <Description />
          <BlogPost />
        </Route>
        <Route exact path="/about">
          <AboutMe />
        </Route>
        <Route exact path="/blogs">
          <AllBlogs />
        </Route>
        <Route exact path={`/blog/:id`}>
          <BlogDetails />
        </Route>
        <Route exact path="/softwares">
          <Software />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default PublicRoutes;