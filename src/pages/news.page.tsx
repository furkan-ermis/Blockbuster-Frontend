import React from "react";
import { Link } from "react-router-dom";

function News() {
  return (
    <>
      {" "}
      <div className="hero common-hero">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero-ct">
                <h1> blog listing - list</h1>
                <ul className="breadcumb">
                  <li className="active">
                    <a href="#">Home</a>
                  </li>
                  <li>
                    {" "}
                    <span className="ion-ios-arrow-right" /> blog listing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-single">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-sm-12 col-xs-12">
              <div className="blog-item-style-1 blog-item-style-3">
                <img src="images/uploads/bloglist-it1.jpg" alt="" />
                <div className="blog-it-infor">
                  <h3>
                    <a href="blogdetail.html">
                      Godzilla: King Of The Monsters Adds O’Shea Jackson Jr
                    </a>
                  </h3>
                  <span className="time">27 Mar 2017</span>
                  <p>
                    Africa's burgeoning animation scene got a boost this week
                    with the announcement of an ambitious new partnership that
                    will pair rising talents from across the continent ...
                  </p>
                </div>
              </div>
              <div className="blog-item-style-1 blog-item-style-3">
                <img src="images/uploads/bloglist-it2.jpg" alt="" />
                <div className="blog-it-infor">
                  <h3>
                    <a href="blogdetail.html">
                      Magnolia Nabs ‘Lucky’ Starring Harry Dean Stanton
                    </a>
                  </h3>
                  <span className="time">27 Mar 2017</span>
                  <p>
                    Magnolia Pictures has acquired U.S. and international rights
                    to the comedic drama Lucky John Carroll Lynch’s directorial
                    debut. Lynch is an in-demand character actor who ...
                  </p>
                </div>
              </div>
              <div className="blog-item-style-1 blog-item-style-3">
                <img src="images/uploads/bloglist-it3.jpg" alt="" />
                <div className="blog-it-infor">
                  <h3>
                    <a href="blogdetail.html">
                      ‘Going in Style’ Tops ‘Smurfs: The Lost Village’ at
                      Thursday Box Office
                    </a>
                  </h3>
                  <span className="time">27 Mar 2017</span>
                  <p>
                    New Line’s remake of “Going in Style” launched with a
                    moderate $600,000 on Thursday night, while Sony’s animated
                    “Smurfs: The Lost Village” debuted with $375,000 ...
                  </p>
                </div>
              </div>
              <div className="blog-item-style-1 blog-item-style-3">
                <img src="images/uploads/bloglist-it4.jpg" alt="" />
                <div className="blog-it-infor">
                  <h3>
                    <a href="blogdetail.html">
                      India’s National Film Awards: ‘Kaasav’ Wins Best Picture
                    </a>
                  </h3>
                  <span className="time">27 Mar 2017</span>
                  <p>
                    Although it sporadically errs on the side of sentimentality
                    and simplification, "The Case for Christ" sustains interest,
                    and even generates mild suspense ...
                  </p>
                </div>
              </div>
              <div className="blog-item-style-1 blog-item-style-3">
                <img src="images/uploads/bloglist-it5.jpg" alt="" />
                <div className="blog-it-infor">
                  <h3>
                    <a href="blogdetail.html">
                      ‘Kong: Skull Island’ Tops $500 Million at Worldwide Box
                      Office
                    </a>
                  </h3>
                  <span className="time">27 Mar 2017</span>
                  <p>
                    King Kong is still a box office giant. “Kong: Skull Island”
                    has crossed the $500 million mark at the worldwide box
                    office. It’s the third 2017 title to hit the milestone after
                    Disney’s ...
                  </p>
                </div>
              </div>
              <div className="blog-item-style-1 blog-item-style-3">
                <img src="images/uploads/bloglist-it6.jpg" alt="" />
                <div className="blog-it-infor">
                  <h3>
                    <a href="blogdetail.html">Film Review: ‘Aftermath’</a>
                  </h3>
                  <span className="time">27 Mar 2017</span>
                  <p>
                    "Aftermath" is a plane crash movie without a plane crash.
                    Instead, the closest we get is a scene set in the control
                    tower, where a computer screen shows two ...
                  </p>
                </div>
              </div>
              <ul className="pagination">
                <li className="icon-prev">
                  <a href="#">
                    <i className="ion-ios-arrow-left" />
                  </a>
                </li>
                <li className="active">
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">...</a>
                </li>
                <li>
                  <a href="#">21</a>
                </li>
                <li>
                  <a href="#">22</a>
                </li>
                <li className="icon-next">
                  <a href="#">
                    <i className="ion-ios-arrow-right" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-12 col-xs-12">
              <div className="sidebar">
                <div className="sb-search sb-it">
                  <h4 className="sb-title">Search</h4>
                  <input type="text" placeholder="Enter keywords" />
                </div>
                <div className="sb-cate sb-it">
                  <h4 className="sb-title">Categories</h4>
                  <ul>
                    <li>
                      <a href="#">Awards (50)</a>
                    </li>
                    <li>
                      <a href="#">Box office (38)</a>
                    </li>
                    <li>
                      <a href="#">Film reviews (72)</a>
                    </li>
                    <li>
                      <a href="#">News (45)</a>
                    </li>
                    <li>
                      <a href="#">Global (06)</a>
                    </li>
                  </ul>
                </div>
                <div className="sb-recentpost sb-it">
                  <h4 className="sb-title">most popular</h4>
                  <div className="recent-item">
                    <span>01</span>
                    <h6>
                      <a href="#">
                        Korea Box Office: Beauty and the Beast Wins Fourth
                      </a>
                    </h6>
                  </div>
                  <div className="recent-item">
                    <span>02</span>
                    <h6>
                      <a href="#">Homeland Finale Includes Shocking Death </a>
                    </h6>
                  </div>
                  <div className="recent-item">
                    <span>03</span>
                    <h6>
                      <a href="#">
                        Fate of the Furious Reviews What the Critics Saying
                      </a>
                    </h6>
                  </div>
                </div>
                <div className="sb-tags sb-it">
                  <h4 className="sb-title">tags</h4>
                  <ul className="tag-items">
                    <li>
                      <a href="#">Batman</a>
                    </li>
                    <li>
                      <a href="#">film</a>
                    </li>
                    <li>
                      <a href="#">homeland</a>
                    </li>
                    <li>
                      <a href="#">Fast &amp; Furious</a>
                    </li>
                    <li>
                      <a href="#">Dead Walker</a>
                    </li>
                    <li>
                      <a href="#">King</a>
                    </li>
                    <li>
                      <a href="#">Beauty</a>
                    </li>
                  </ul>
                </div>
                <div className="ads">
                  <img src="images/uploads/ads1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
