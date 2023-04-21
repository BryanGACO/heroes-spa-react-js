import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks"
import queryString from 'query-string';
import { getHerosByName } from "../helpers";
import { HeroCard } from "../components";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const heroes = getHerosByName(q);

  const { searchText, onInputChange, onResetForm } = useForm({
    searchText: q
  });

  const onHandleSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`);
  }

  return (
    <>
      <h1>SearchPage</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onHandleSubmit}>
            <input
              type="text"
              name="searchText"
              className="form-control"
              autoComplete="off"
              placeholder="Search a hero"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div className="alert alert-primary">
            Search a hero
          </div>

          <div className="alert alert-danger">
            No hero with <b>ABC</b>
          </div>

          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }
        </div>
      </div>
    </>
  )
}
