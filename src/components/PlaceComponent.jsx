import React from 'react'
import '../style/PlaceComponent.css';

const PlaceComponent = (props) => {
  return (
    <div>
      <div className='card'>
        <div className='card-header'>
            <img className="card-img" alt="destination" src={"https://source.unsplash.com/1600x1000/?"+props.image}/>
            <h6 className={props.ratings>=4.0 ? "best" : "d-none"}>Best Reviews</h6>
        </div>
        <div className='card-body'>
            <h3 class="card-title">{props.title}</h3>
            <p class="card-text">{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default PlaceComponent


