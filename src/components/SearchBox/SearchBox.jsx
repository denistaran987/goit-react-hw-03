import { useId } from 'react';
import s from '../SearchBox/SearchBox.module.css';
const SearchBox = () => {
  const findId = useId();

  return (
    <div>
      <label className={s.label} htmlFor={findId}>
        Find contacts by name
      </label>
      <input type="text" id={findId} />
    </div>
  );
};
export default SearchBox;
