export function getProducts() {
    return dispatch => {
      fetch('http://localhost:4000/products')
        .then(res => {
          return res.json();
        })
        .then(data => {
          dispatch({ type: 'GETALLPRODUCTS', payload: data });
        });
    };
  }
  