
 
import React, { useState, useEffect } from 'react';
//LD "useState" in an hook that tells to react to re-render any time content change
// we have setup "useEffect"(see below) to launch only when the application launches.

import Header from './components/Header/Header';
import NewProduct from './components/Products/NewProduct';
import ProductList from './components/Products/ProductList';

import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';


import './App.css';

function App() {
  const [loadedProducts, setLoadedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const response = await fetch('http://localhost:5000/products');

      const responseData = await response.json();

      //LD I set the constant "LoadedProducts" declared above. So I do invoke "setLoadedProducts"
      setLoadedProducts(responseData.products);
      setIsLoading(false);
    };

    fetchProducts();
  }, []);

  const addProductHandler = async (productName, productPrice) => {
    try {
      const newProduct = {
        title: productName,
        price: +productPrice // "+" to convert string to number
      };
      let hasError = false;
      const response = await fetch('http://localhost:5000/product', {
        method: 'POST',
        body: JSON.stringify(newProduct),
        headers: { //LD letting BE know that we are sending Json data
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        hasError = true;
      }

      const responseData = await response.json();

      if (hasError) {
        throw new Error(responseData.message);
      }

      setLoadedProducts(prevProducts => {
        return prevProducts.concat({
          ...newProduct,
          id: responseData.product.id
        });
      });
    } catch (error) {
      alert(error.message || 'Something went wrong!');
    }
  };

  const courseGoals = [
    {id: 'cg1', text: 'Finish the Course'},
    {id: 'cg2', text: 'Learn all about the Course Main Topic'},
    {id: 'cg3', text: 'Help other students in the Course Q&A'},
  ];

  //LD the below jsx is translated in javascript
  // where "Header", "NewProduct", "ProductList" are react component/
  // the components are imported on the top of this file. Folder "Components"
  return (
    <React.Fragment>
      {/* //LD I pass an array as prop in order to dynamically render */}
      <Header />
      <main>
        <div> 
          <h2>a list</h2>
          <ul>
          <GoalList goals={courseGoals} /> 
          </ul>
        </div>
        <div>
          <NewGoal/>
        </div>
        <NewProduct onAddProduct={addProductHandler} />
        {isLoading && <p className="loader">Loading...</p>}
        {!isLoading && <ProductList items={loadedProducts} />}
      </main>
    </React.Fragment>
  );
}

export default App;
