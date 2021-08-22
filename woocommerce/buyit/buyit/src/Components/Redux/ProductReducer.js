const initialstate = {
     products : []
}

const ProductReducer = (state = initialstate, action) => {
    if(action.type === 'GETALLPRODUCTS'){
        return {
            allproducts : [...action.payload]
        };
    }
    return state;
}

export default ProductReducer;