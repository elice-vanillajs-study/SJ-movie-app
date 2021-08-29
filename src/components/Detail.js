import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      const { year, title, summary, poster, genres } = location.state;
      return (
        <div className="detail">
          <div className="detail__info">
            <img title={title} src={poster} alt={title} />
            <h1 className="detail__title">{title}</h1>
            <div className="detail__year">{year}</div>
            <ul className="detail__genres">
              {genres.map((genre, index) => (
                <li key={index} className="genres__genre">
                  {genre}
                </li>
              ))}
            </ul>

            <div className="detail__summary">{summary}</div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
