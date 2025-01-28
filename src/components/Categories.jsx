import React from 'react';

function Categories() {
  const [active, setActive] = React.useState(0);

  const categories = ['Все' , "Мясные", "Вегетерианские", "Гриль", "Острые", "Закрытые"]

  const onClickCategory = (index) => {
    setActive(index)
  }
  return (
    <div className="categories">
      <ul>
        
        {
          categories.map((value, i) => (
            <li onClick={() => onClickCategory(i)} className={active === i ? 'active' : ''}>{value}</li> 
          ))
        }
      </ul>
    </div>
  );
}

export default Categories;
