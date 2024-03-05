
import './App.css';
import { Provider } from 'react-redux';
import store from './service/store';
import Header from './view/layout/Header';
import Footer from './view/layout/Footer';
import ProductList from './common/ProductList';
import { useEffect, useState } from 'react';
function App() {
   const [arr,setArr]=useState([])
    async function getData(){
    let data=await fetch('https://dummyjson.com/products?limit=100')
    let jsonData=await data.json()
    setArr(jsonData?.products) 
  }
  useEffect(()=>{
    getData()
  },[])

  return (
    <Provider store={store}>
      <Header />
      {/* <ProductList arr={arr}/> */}
      <Footer/>
    </Provider>
  );
}

export default App;
