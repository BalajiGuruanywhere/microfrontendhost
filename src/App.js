import React,{ useState } from 'react';

const MFE1_Product = React.lazy(
  () => import('MFE1/Product')
);
function App() {
  const [products,setProducts]=useState([{"name":"Airpods","description":"Apple's very own earphones","price":300},{"name":"Iphone 13","description":"Variant of Apple's iphone series","price":1200},{"name":"Mac Pro","description":"Apple's laptop","price":3000}])
  const incrementPrice =(index)=>{
    var updatedProducts=[...products];
    Object.assign(updatedProducts[index], updatedProducts[index], { price: updatedProducts[index].price+10 });
    setProducts(updatedProducts);
  }
  const decrementPrice =(index)=>{
    var updatedProducts=[...products];
    Object.assign(updatedProducts[index], updatedProducts[index], { price: updatedProducts[index].price-10 });
    setProducts(updatedProducts);
  }
  return (
        <div>
        <h1>Products</h1>
        <React.Suspense fallback='Loading Products'>
        {products.map((item,index) => (
                <MFE1_Product name={item.name} description={item.description} price={item.price} incrementPrice={()=>incrementPrice(index)} decrementPrice={()=>decrementPrice(index)}/>   
        ))}
        </React.Suspense>
        </div>
    );
  }

export default App;