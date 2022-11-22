import React from "react"
import '../css/style.css'
import Card from './card'

function Header(props) {
   let cardsImages = ["images/iron-man.jpg","images/bat-man.jpg","images/spider-man.jpg"];
   let cardsTitles =["Lorem, ipsum dolor.","Lorem, ipsum dolor.","Lorem, ipsum dolor."];
   let cardsDescription=["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi excepturi quae incidunt ad pariatur ducimus.","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi excepturi quae incidunt ad pariatur ducimus.","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi excepturi quae incidunt ad pariatur ducimus."];

  return (
    <div className="App">
      <div className="container">
      <header>
        <img className="image-main" src={props.src} alt="" srcSet="" />
        <h1>{props.title}</h1>
      </header>
      <main>
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing</h2>
        <p>
          {props.description}
        </p>
      </main>
      <aside>
        <ul class="list-style">
        <Card imageUrl={cardsImages[0]} title={cardsTitles[0]} description={cardsDescription[0]}/>
        <Card imageUrl={cardsImages[1]} title={cardsTitles[1]} description={cardsDescription[1]}/>
        <Card imageUrl={cardsImages[2]} title={cardsTitles[2]} description={cardsDescription[2]}/>
      </ul>
      </aside>
      </div>
    </div>
  )
}

export default Header




