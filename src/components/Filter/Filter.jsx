import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import { selectFilter } from 'redux/selectors';
import { addFilterSlice } from 'redux/filterSlice/filterSlice';

function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);

  const handleFilter = event => {
    dispatch(addFilterSlice(event.target.value));
  };

  return (
    <div>
      <h2 className={css.contactsTitle}>Contacts</h2>
      <p>Find contacts by name</p>
      <input
        className={`form-control ${css.filterInput}`}
        name="filter"
        onChange={handleFilter}
        value={filterValue}
      />
    </div>
  );
}

export default Filter;
