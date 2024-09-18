import React from "react";
import { useNavigate } from "react-router-dom";
import { Slider1 } from "../assets/static/images";

function Series() {
  const navigate = useNavigate();

  const handleSeriesClick = (seriesId: number) => {
    navigate(`/series/${seriesId}`);
  };

  return (
    <>
      <div className="hero common-hero">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero-ct">
                <h1> series listing - grid</h1>
                <ul className="breadcumb">
                  <li className="active">
                    <a href="#">Home</a>
                  </li>
                  <li>
                    {" "}
                    <span className="ion-ios-arrow-right" /> movie listing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-single">
        <div className="container">
          <div className="row ipad-width">
            <div className="col-md-8 col-sm-12 col-xs-12">
              <div className="topbar-filter">
                <p>
                  Found <span>1,608 movies</span> in total
                </p>
                <label>Sort by:</label>
                <select>
                  <option value="popularity">Popularity Descending</option>
                  <option value="popularity">Popularity Ascending</option>
                  <option value="rating">Rating Descending</option>
                  <option value="rating">Rating Ascending</option>
                  <option value="date">Release date Descending</option>
                  <option value="date">Release date Ascending</option>
                </select>
                <a href="movielist.html" className="list">
                  <i className="ion-ios-list-outline " />
                </a>
                <a href="moviegrid.html" className="grid">
                  <i className="ion-grid active" />
                </a>
              </div>
              <div className="flex-wrap-movielist">
                <div className="movie-item-style-2 movie-item-style-1">
                  <img src={Slider1} alt="" />
                  <div className="hvr-inner">
                    <div onClick={() => handleSeriesClick(1)}>
                      {" "}
                      Read more <i className="ion-android-arrow-dropright" />{" "}
                    </div>
                  </div>
                  <div className="mv-item-infor">
                    <h6>
                      <a href="#">oblivion</a>
                    </h6>
                    <p className="rate">
                      <i className="ion-android-star" />
                      <span>8.1</span> /10
                    </p>
                  </div>
                </div>
                <div className="movie-item-style-2 movie-item-style-1">
                  <img src={Slider1} alt="" />
                  <div className="hvr-inner">
                    <div onClick={() => handleSeriesClick(1)}>
                      {" "}
                      Read more <i className="ion-android-arrow-dropright" />{" "}
                    </div>
                  </div>
                  <div className="mv-item-infor">
                    <h6>
                      <a href="#">oblivion</a>
                    </h6>
                    <p className="rate">
                      <i className="ion-android-star" />
                      <span>8.1</span> /10
                    </p>
                  </div>
                </div>
                <div className="movie-item-style-2 movie-item-style-1">
                  <img src={Slider1} alt="" />
                  <div className="hvr-inner">
                    <div onClick={() => handleSeriesClick(1)}>
                      {" "}
                      Read more <i className="ion-android-arrow-dropright" />{" "}
                    </div>
                  </div>
                  <div className="mv-item-infor">
                    <h6>
                      <a href="#">oblivion</a>
                    </h6>
                    <p className="rate">
                      <i className="ion-android-star" />
                      <span>8.1</span> /10
                    </p>
                  </div>
                </div>
                <div className="movie-item-style-2 movie-item-style-1">
                  <img src={Slider1} alt="" />
                  <div className="hvr-inner">
                    <div onClick={() => handleSeriesClick(1)}>
                      {" "}
                      Read more <i className="ion-android-arrow-dropright" />{" "}
                    </div>
                  </div>
                  <div className="mv-item-infor">
                    <h6>
                      <a href="#">oblivion</a>
                    </h6>
                    <p className="rate">
                      <i className="ion-android-star" />
                      <span>8.1</span> /10
                    </p>
                  </div>
                </div>
              </div>
              <div className="topbar-filter">
                <label>Movies per page:</label>
                <select>
                  <option value="range">20 Movies</option>
                  <option value="saab">10 Movies</option>
                </select>
                <div className="pagination2">
                  <span>Page 1 of 2:</span>
                  <a className="active" href="#">
                    1
                  </a>
                  <a href="#">2</a>
                  <a href="#">3</a>
                  <a href="#">...</a>
                  <a href="#">78</a>
                  <a href="#">79</a>
                  <a href="#">
                    <i className="ion-arrow-right-b" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12">
              <div className="sidebar">
                <div className="searh-form">
                  <h4 className="sb-title">Search for movie</h4>
                  <form className="form-style-1" action="#">
                    <div className="row">
                      <div className="col-md-12 form-it">
                        <label>Movie name</label>
                        <input type="text" placeholder="Enter keywords" />
                      </div>
                      <div className="col-md-12 form-it">
                        <label>Genres &amp; Subgenres</label>
                        <div className="group-ip">
                          <select name="skills" className="ui fluid dropdown">
                            <option value="">Enter to filter genres</option>
                            <option value="Action1">Action 1</option>
                            <option value="Action2">Action 2</option>
                            <option value="Action3">Action 3</option>
                            <option value="Action4">Action 4</option>
                            <option value="Action5">Action 5</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-12 form-it">
                        <label>Rating Range</label>
                        <select>
                          <option value="range">
                            -- Select the rating range below --
                          </option>
                          <option value="saab">
                            -- Select the rating range below --
                          </option>
                        </select>
                      </div>
                      <div className="col-md-12 form-it">
                        <label>Release Year</label>
                        <div className="row">
                          <div className="col-md-6">
                            <select>
                              <option value="range">From</option>
                              <option value="number">10</option>
                            </select>
                          </div>
                          <div className="col-md-6">
                            <select>
                              <option value="range">To</option>
                              <option value="number">20</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 ">
                        <input
                          className="submit"
                          type="submit"
                          defaultValue="submit"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Series;
