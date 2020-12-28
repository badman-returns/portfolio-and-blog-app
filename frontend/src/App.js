import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/IndexBanner/IndexBanner";
import Description from "./Components/IndexBio/IndexBio";
import BlogPost from "./Components/IndexBlog/IndexBlog";
import Footer from "./Components/Footer/Footer";
import AboutMe from "./Components/About/About";
import AllBlogs from "./Components/AllBlogs/AllBlogs";
import BlogDetails from "./Components/BlogDetails/blogdetails";
import Software from "./Components/Software/software";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import  ScrollToTop  from  "./scrollToTop";
import "./App.css";

function App() {
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
        <Route path="/about">
          <AboutMe />
        </Route>
        <Route path="/blogs">
          <AllBlogs />
        </Route>
        <Route path={`/blog/:id`}> 
         <BlogDetails />
        </Route>
        <Route path="/softwares">
          <Software />
          </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
