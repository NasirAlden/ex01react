import React from 'react';
import './App.css';
import Header from './components/header';

function App() {
  let imageUrl = "images/marvel.jpg";
  let title = "Lorem ipsum dolor sit";
  let description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturiautem, laboriosam"
  +"minima a error necessitatibus similique quae,"
  +"accusamus, facere deserunt officia tempore ab eum maiores!";
  return (
    <Header src={imageUrl} title={title} description={description}/>
  );
}

export default App;

