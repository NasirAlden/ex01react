
import React from 'react'

function Card(props) {
  return (
    <li class="list-item-container">
            <img
              class="list-image"
              src={props.imageUrl} //"images/iron-man.jpg"
              alt=""
              srcset=""
            />
            <div class="content">
              <h2>{props.title}</h2>
              <p>
                {props.description}
              </p>
            </div>
          </li>
  )
}

export default Card