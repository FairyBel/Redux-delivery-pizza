import './App.css';
import Cart from './Components/Cart/Cart';
import Dishes from './Components/DishesComponents/Dishes';
import AllCategories from './Components/Filter.js/AllCategories';
import image from './firstpic.jpg';

function App() {
  return (<div>
   <div>
      <img className='img-header' src={image} alt='headband'/>
    </div>

    <div className="App">
      <h1>PIZZA LOCA</h1> 
      <h2>Ресторан доставки безумно вкусной пиццы</h2>
      <h2>Доставим за 30 минут!</h2>
    </div>
    <div className='container-all'>
    <div className='cont-menu'>
    <div className='block'>
      <AllCategories />
      <Cart />
    </div>
    </div>
    <div className='block cont-dish'>
      <Dishes />
      </div>
      
    </div>



    </div>
  );
}

export default App;
