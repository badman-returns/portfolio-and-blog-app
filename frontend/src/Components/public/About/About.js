import React from "react";
import { Link } from "react-router-dom";
import "./about.css";
import mypic from "./mypic.jpg";

function AboutMe() {
  return (
    <div className="grey">
      <section id="cards">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="card-body">
                <img
                  src={mypic}
                  alt="Trishnangshu Goswami"
                  className="img-fluid-rounded-circle w-100 mb-2"
                />
                <h4>Trishnangshu Sekhar Goswami</h4>
                <h5>Learning Software development & Secuirity</h5>

                <ul>
                  <li>Pursuing Computer Engineering</li>
                  <li>Learning Software Development</li>
                  <li>Self-Specialising in IT Secuirty</li>
                  <li>Will learn Game development</li>
                  <li>Will love to learn electronics</li>
                  <li>Wanna Be Hacker</li>
                </ul>
                <div className="marker">
                  <br />
                  <img
                    src={process.env.PUBLIC_URL + "/assets/icons/marker.svg"}
                    alt="Marker"
                  />
                  <p>&nbsp; India</p>
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-md-12 col-sm-12">
              <div className="card-body-2">
                <div className="img-fluid-rounded-circle w-100 mb-2">
                  <br />
                  <ul
                    className="nav nav-pills mb-3"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#home"
                      >
                        KNOW ME
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#menu1">
                        JOURNEY
                      </a>
                    </li>
                    <li className="nav-item ">
                      <Link
                        to="/"
                        exact={true.toString()}
                        className="nav-link "
                      >
                        HOME
                      </Link>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div id="home" className="container tab-pane active">
                      <br />
                      <br />
                      <h3 className="journey">KNOW ME</h3>
                      <p className="j-para">
                        I am super curious guy interested in computers and
                        electronics. I am teaching myself about software
                        development and security as I can not wait for college
                        to teach me out. From the beginning I was not good at
                        academics but I was interested in learning technology.
                        At this moment I am trying to build software products
                        with my own research and innovation. Beside that also
                        learning about security and hacking.
                      </p>
                      <br />
                      <p className="j-para">
                        I built this website by myself so that I can share the
                        process of learning programming, hacking and a lot of
                        stuffs with you guys. I will be writing about the
                        challeges, problems I face and also how I manage to
                        solve it and move forward through my journey. All you
                        have to do is to visit the blog section. You will also
                        get the available free resources.
                      </p>
                      <br />
                    </div>
                    <div id="menu1" className="container tab-pane fade">
                      <br />
                      <br />
                      <br />
                      <h3 className="journey">MY JOURNEY</h3>
                      <p className="j-para">
                        It was around 2010-11 when my brother introduces me to
                        HTML, at that time I was only 10. From the beginning I
                        was not very good at academics neither interested as
                        there was nothing except mugging up and as I was a kind
                        of introvert I look around myself to do some creative
                        stuff(ex. Drawing, Art & Craft). It was this time when I
                        got very much interested to computers. I started
                        learning HTML from my brother and made some web pages
                        and believe me nobody at school was teaching about
                        Computers at that time. So I kind of gain confidence as
                        this was only thing I know I was better than any kids of
                        my age. Next year a computer was bought into home and I
                        started learning more about technology. At this time I
                        got to know about hacking and security stuff which
                        thrives me more towards tech. I started learning linux,
                        networking althought it was very challeging for me as no
                        one was there to help or support, only thing I do that
                        time was Google. When I was 14 , it was around 12:20 at
                        night I secretly hacked into someone's computer within
                        my Local Network as in our place ISP used to NAT an IP
                        Address and distribute them among various customers.
                        Believe me I will never forget that moment in my life.
                        From that time onwards I knew that this is the thing I
                        am gonna do for rest of my life. After then something
                        happened, until I finished my high school I was not
                        being able to do all these kinds of stuff. As I was
                        becoming more poor in academics my family does not allow
                        me to do all those stuffs until I finished my school. It
                        was very difficult for me but I have no options also.
                        Anyway time passed I reached college but still somehow I
                        was able to keep updates about current technology.
                        Finally I got the freedom to do what I love to do. So
                        thats all brief about myself. To know more please visit
                        the blog section. I write both my personal and technical
                        blog there. Feel free to message, visit contact section.
                      </p>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default AboutMe;
