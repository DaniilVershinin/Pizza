import React from 'react';
import axios from 'axios';
import { setCategoryId, setCurrentPage } from '../redux/slices/filterSlice';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock/index';
import Skeleton from '../components/PizzaBlock/skeleton';
import Pagination from '../components/Pagination';
import { SearchContext } from '../App';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch()
  const categoryId = useSelector(state => state.filter.categoryId) 
  const sortType = useSelector(state => state.filter.sort.sortProperty) 
  const currentPage = useSelector(state => state.filter.currentPage)
  
  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  
  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id))
  }

  const onCnangePage = (number) => {
    dispatch(setCurrentPage(number))
  }

  React.useEffect(() => {
    setIsLoading(true);
    // fetch(
    //   `https://6799a853be2191d708b354e0.mockapi.io/items?page=${currentPage}&limit=4&category=` +
    //     categoryId +
    //     `&sortBy=${sortType.sortProperty}`,
    // )
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((arr) => {
    //     setItems(arr);
    //     setIsLoading(false);
    //   });

    axios.get(`https://6799a853be2191d708b354e0.mockapi.io/items?page=${currentPage}&limit=4&category=` +
     categoryId + `&sortBy=${sortType.sortProperty}`,
    )
    .then((res) => {
      setItems(res.data);
      setIsLoading(false);
    })
    window.scrollTo(0, 0);
  }, [categoryId, sortType, currentPage]);

  const skeleton = Array(10)
    .fill(0)
    .map((_, index) => <Skeleton key={index} />);
  const pizzas = items
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) return true;

      return false;
    })
    .map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories value={categoryId} onChangeCategory={onChangeCategory} />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">{isLoading ? skeleton : pizzas}</div>

        <Pagination currentPage={currentPage} onCnangePage={onCnangePage} />
      </div>
    </>
  );
};

export default Home;

