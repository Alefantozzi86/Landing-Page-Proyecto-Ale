import propTypes from "prop-types";
import React from "react";
  
const CardImg =(props)=>{
  return (
    <>
        <img className="card-img-top" src={props.scr} alt="Card image cap"/>
    </>
  )
}
const CardBody =(props)=>{
  return (
    <>
 <div className="card-body">
      <h5 className="card-title d-flex justify-content-center">{props.title}</h5>
      <p className="card-text">{props.text}</p>
    </div>
    </>
  )
}
 
const CardFooter =()=>{
  return (
    <>
        <div className="card-footer">
    <button type="button" className="btn btn-secondary position-relative top-50 start-50 translate-middle">Ver más</button>
    </div>
    </>
  )
}

const Card =(props)=> {
    return (
        <>  
  <div className="card m-4 border rounded">
   <CardImg scr={props.scr}/>
   <CardBody title={props.title} text={props.text}/>
   <CardFooter/>
  </div>
        </>
    )
}


export default Card;