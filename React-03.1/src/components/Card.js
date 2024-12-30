import React, { useState } from "react";

function Card({ id, name, info, image, price, removeTour, deleteAll }) {
  const [readMore, setReadMore] = useState(false); // this is to handle the readmore or showless feature
  const description = readMore ? info : `${info.substring(0, 200)}...`;

  function readmoreHandler() {
    setReadMore(!readMore);
  }

  return (
    <div className="card">
      <img src={image} className="image" /> 
      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-price">{price}</h4>
          <h4 className="tour-name">{name}</h4>
        </div>
        <div className="description">
          {description}
          <span className="read-more" onClick={readmoreHandler}>
            {readMore ? `show less` : `read more`}
          </span>
        </div>
      </div>

      <button onClick={() => removeTour(id)} className="btn-red">
        Not Intrested
      </button>
    </div>
  );
}

export default Card;
