import React, { Component } from "react";
import Movie from "./../../Component/movie";
import { connect } from "react-redux";
import * as action from "../../Redux/action";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./../../SASS/Calendar-screening.scss"

class CalendarScreening extends Component {
  componentDidMount() {
    this.props.getListMovie();
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      row: 2,
      slidesToShow: 4,
      slidesToScroll: 4,
      rows:2
    };
    return (
      <div className="container">
        <Slider {...settings}>
        {this.props.listMovie.map((item) => {
          return (
            <div key={item} className="col-ms-3">
              <Movie key={item.maPhim} movie={item} />
            </div>
          );
        })}
      </Slider>
      </div>
      
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listMovie: state.movieReducer.listMovie,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getListMovie: () => {
      dispatch(action.actGetListMovieAPI());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarScreening);
