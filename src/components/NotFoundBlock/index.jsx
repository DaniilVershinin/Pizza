import React from 'react';

import styles from './NotFoundBlock.module.scss';
import { Link } from 'react-router-dom';

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span> 🙁 </span>
        <br />В корзине ничего не найдено
      </h1>
      <Link to="/" className="button button--black">
        <span> Вернуться назад </span>
      </Link>
    </div>
  );
};

export default NotFoundBlock;
