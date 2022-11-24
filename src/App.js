import React, { useEffect, useState } from 'react';
import axios from "axios";
import Tab_meal from './coponent/Tab_meal';
import "./static.css"
import Blog from './coponent/Blog';


const App = () => {

  const [data, setData] = useState([]);
  const [rcg, setRcg] = useState('');

  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + rcg + "").then((res) => {
      if (!res.data.meals) {
        setData([])
      } else {
        setData(res.data.meals)

      }
    });

  }, [rcg])

  return (
    <div id="all">
      <h1>Goutez nos recettes</h1>
      <input id="recherche" type="text" placeholder="tapez le nom d'un aliment (en anglais) " onChange={(event) => setRcg(event.target.value)} value={rcg} />
      <div id="tab_meal">
        {data.map((element) =>
          <Tab_meal elem={element} />
        )}
      </div>
      <Blog />
    </div>
  )
};




export default App;