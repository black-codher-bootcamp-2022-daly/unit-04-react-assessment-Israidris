import "./styles/App.css";
import {Nav} from "./components/Nav";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import data from "./models/data.json";
import About from "./pages/About";
import Basket from "./components/Basket";
import ProductList from "./components/ProductList";
import Search from "./components/Search";
import BasketCount from "./components/BasketCount";

function App() {
  const [products, setProducts] = useState(data);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);
  const [keyword, setKeyword] = useState("");

  function addToBasket(trackId) {
    products.map((product) => {
      if (product.trackId === trackId) {
        product.inBasket = true;
        console.log(product);
        setBasket((prev) => [...prev, product]);

        if (product.trackPrice) {
          setTotal(parseFloat(total + product.trackPrice));
        } else {
          setTotal(total + 0);
        }
      }
      console.log(setTotal);
      setCount(count + 1);
    });
  }

  function removeFromBasket(trackId) {
    const removeFromCart = [];
    basket.filter((products) => {
      if (products.trackId !== trackId) {
        removeFromCart.push(products);
      } else {
        products.trackId = !products.trackId;
        if (products.trackPrice) {
          setTotal(parseFloat(total - products.trackPrice));
        }
        return products;
      }
    });

    setBasket(removeFromCart);
    setCount(count - 1);
  }

  console.log(products);

  async function searchAPI(value) {
  if (!value) {
    setKeyword([
      ...data.map((item) => {
        item.inBasket = basket.find(
          (basketItem) => basketItem.trackId === item.trackId
        )
        ? true
        : false

        return item;})
]) 
keyword("");
return; }

    const results = await fetch(`https://itunes.apple.com/search?term=${value}&limit=30&explicit=no`).then((res) => res.json());
    if (!results.error) {
      setProducts(
        results.results.filter(
          (result) =>
            result.trackName &&
            basket.findIndex((product) => result.id === product.trackId) === -1
        )
      );
    }
  }

  function BasketList() {
    return (
      <>
        <BasketCount />
        <Basket
          basket={basket}
          addToBasket={addToBasket}
          removeFromBasket={removeFromBasket}
          basketTotal={total}
          basketCount={count}
        />
      </>
    );
  }

  function Home() {
    return (
      <div>
        <Nav count = {count} />
        <List>
        <Search
                keyword={keyword}
                setKeyword={setKeyword}
                searchAPI={searchAPI}
              />
        <ProductList
          items={products}
          addToBasket={addToBasket}
          removeFromBasket={removeFromBasket}
          itemCount={data.length}
        />
      </List>
      </div>
    );
  }
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About.js" element={<About />} />
          <Route path="/Basket" element={<BasketList />} />
        </Routes>
    </Router>
  );
}


function List(props) {
  return (
    <div>
      <h1 className="header"> Media Store </h1>
      <div className="list-container">{props.children}</div>
    </div>
  );
}

export default App;

