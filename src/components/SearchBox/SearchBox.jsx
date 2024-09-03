import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/selectors";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.searchBoxContainer}>
      <p className={css.searchLabel}>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className={css.searchInput}
      />
    </div>
  );
};

export default SearchBox;
