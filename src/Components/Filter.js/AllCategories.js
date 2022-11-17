import Filter from "./Filter";

const AllCategories = () => {

    return(
        <div>
            {['ALL', 'MEAT', 'SEAFOOD', 'VEGETARIAN'].map((
                category, index) => <Filter key={index} category={category}/>
            )}
        </div>
    )
}

export default AllCategories;