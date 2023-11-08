import React from 'react';

function Devs(props)
{
  return(<>
  <div className = "column1">
    <div className = "card2">
      <img src={props.imgsrc} alt={props.Name} style={{width:"100%"}}/>
      <div className="container3">
        <h2>{props.Name}</h2>
        <p className="title1">{props.title}</p>
        <p>{props.email}</p>
      </div>
    </div>
  </div>
  </>)
}

export default Devs;