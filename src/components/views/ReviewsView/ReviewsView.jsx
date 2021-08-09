import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FetchMovieReviews } from "../../ApiSevice/ApiService";
import styles from "./ReviewsView.module.css";

const ReviewsView = ({ movieId }) => {
  const [stateReviews, setStateReviews] = useState([]);

  useEffect(() => {
    FetchMovieReviews(movieId).then((respononse) =>
      setStateReviews(respononse)
    );
  }, [movieId]);

  return (
    <ul className={styles.reviews}>
      {stateReviews.length > 0 ? (
        stateReviews.map(({ id, author, content }) => (
          <li key={id}>
            <h2 className={styles.author}>Author: {author}</h2>
            <p>{content}</p>
          </li>
        ))
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </ul>
  );
};

ReviewsView.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default ReviewsView;