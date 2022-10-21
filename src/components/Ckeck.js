import React from 'react'
import Back from "../images/Back1.jpg"
const Ckeck = () => {
  return (
    <>
    {/* <div className="wrapper"> 
  
  <div className="fixed-bg bg-1">
    <img></img>
    <h1>Fixed Background scrolling</h1>
  </div>
  
  <div className="scroll-bg">
    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in dolor tempor, posuere mi id, eleifend magna. Nulla at lectus magna. Etiam sodales arcu at lectus porttitor accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur id urna dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin et pharetra justo, quis suscipit risus. Maecenas tincidunt efficitur ex in pharetra.</h3>
  </div>
  
  <div className="fixed-bg bg-2">
    <h1>Fixed Background scrolling</h1>
  </div>
  
  <div className="scroll-bg">
    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in dolor tempor, posuere mi id, eleifend magna. Nulla at lectus magna.</h3>
  </div>
  
  <div className="fixed-bg bg-3">
    <h1>Fixed Background scrolling</h1>
  </div>
  
</div>  */}

<div
        className="cardImage bg-dark text-white bg-image hover-zoom"
        style={{ marginTop: "0rem" }}
      >
        <img src={Back} className="card-img img-fluid" alt="techImage" />
        <div className=" bottom-text">
          <h1 className="card-title text-center centered">
          
            <p className="line-1 anim-typewriter">Hii Development</p>
          </h1>
        </div>
      </div>
    </>
  )
}

export default Ckeck