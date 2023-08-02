
import React from 'react'
import './scss/app.scss';
import Header from './components/Header';
import Sort from './components/Sort';
import Categories from './components/Categories';
import PizzaBlock from './components/PizzaBlock';
import pizzas from './assets/pizza.json'

function App() {
  return (
    <>
     <div class="wrapper">
      <Header/>
      <div class="content">
        <div class="container">
          <div class="content__top">
           <Categories/>
           <Sort/>
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
            {
              pizzas.map((obj)=>(
                <PizzaBlock title ={obj.title} price={obj.price} img={obj.imageUrl} sizes={obj.sizes} types={obj.types}/>
              ))
            }
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
