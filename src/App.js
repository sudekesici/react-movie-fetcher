import React, { useEffect, useState } from 'react';
import './App.scss';
import Header from './components/Header';
import Form from './components/Form';
import Card from './components/Card';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { handleCategoryChange } from './redux/counterSlice';

const BASE_URL = 'https://api.sampleapis.com/movies';

function App() {
  const dispatch = useDispatch(); // sliceıdaki fonksiyonu almak için
  const category = useSelector((state) => state.counter.category); // reduxtan state (value) seçmek için
  const [cards, setCards] = useState([]); //verileri cards kümesinde tutmak için.

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/${category}`);
        setCards(response.data); // cardsa verileri alıyoruz.
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMovies(); // fetcmoviesi çalıştırıyoruz.
  }, [category]); // category değiştiğinde çalışıyor.

  const handleInputChange = (event) => {
    dispatch(handleCategoryChange(event.target.value));
  }; // buna neden ekstra handleInputChange ekledik? Form compde direkt handleCategoryChaange cagıramaz mıydık?

  return (
    <div>
      <Header />
      <div className="container">
        <div className="title">
          <h1 className='poppins-semibold' style={{color:'#209bd8'}}>Hello, May I Help You?</h1>
        </div>
        <Form onCategoryChange={handleInputChange} /> 
        <div className='cards'>
          {cards.length > 0 ? (
            cards.map((card) => (
              <Card key={card.id} card={card} />
            ))
          ) : (
            <p style={{color:'lightgray'}}>No results found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
