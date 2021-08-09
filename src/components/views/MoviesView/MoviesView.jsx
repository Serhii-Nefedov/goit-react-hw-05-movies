import { Link, useHistory, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovieByQuery } from "../../ApiSevice/ApiService";
import styles from "./MoviesView.module.css";

const MoviesView = () => {
  const [stateQuery, setStateQuery] = useState("");
  const [stateMovies, setStateMovies] = useState([]);

  const history = useHistory();
  const location = useLocation();
  const { pathname, search } = useLocation();
  const searchParam = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (search === "") {
      return;
    }
    fetchMovieByQuery(searchParam)
      .then((response) => setStateMovies(response))
      .finally(reset());
    history.push({ search: `query=${searchParam}` });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParam]);

  const onChangeQuery = (e) => {
    setStateQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push({ ...location, search: `query=${stateQuery}` });
  };

  const reset = () => {
    setStateQuery("");
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Let`s find some movie"
          autoComplete="off"
          autoFocus
          value={stateQuery}
          onChange={onChangeQuery}
        />
        <button className={styles.searchBtn} type="submit">Search</button>
      </form>
      <ul className={styles.moviesList}>
        {stateMovies !== "" &&
          stateMovies.map(({ id, original_title }) => (
            <li key={id}>
              <Link
                to={{
                  pathname: `${pathname}/${id}`,
                  state: {
                    from: location,
                  },
                }}
              >
                {original_title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MoviesView;