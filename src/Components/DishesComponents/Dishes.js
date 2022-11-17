import { useSelector } from 'react-redux';
import { getSelectedCategory } from '../../redux/dishesSlice';
import dataPizza from '../../data/dataPizza';
import Dish from "./Dish";


const Dishes = () => {

    const selectedCategory = useSelector(getSelectedCategory);

    return( 
    <div className='contain'>
            {dataPizza.filter(dish => {
                if(selectedCategory === 'ALL') return true;
                return selectedCategory === dish.category;
            })
            .map((dish, index) => <Dish key={index} dish={dish}/> )}
         </div>
        
        )
}

export default Dishes;