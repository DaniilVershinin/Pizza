import React from 'react';
import styles from './search.module.scss';
import { SearchContext } from '../../App';

const Search = () => {

  const {searchValue, setSearchValue} = React.useContext(SearchContext)

  return (
    <div className={styles.root}>
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className={styles.input}
        placeholder="Поиск по пиццам.."
      />
    </div>
  );
};

export default Search;
