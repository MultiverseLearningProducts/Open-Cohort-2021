import React, { useState } from 'react'
import pic from './eth.png'
import clock from './clock.png'


const Card = () => {
    const [hover, setHover] = useState(false)

    const onMouseEnter = () => {
        setHover(true)
    }

    const onMouseLeave = () => {
        setHover(false)
    }

  return(
      <div className="card">
            <div className={(hover) ? "card-image active" : "card-image"}>
            
            </div>
            <div className="description">
                <p className="card-title"
                   onMouseEnter={onMouseEnter}
                   onMouseLeave={onMouseLeave} 
                >Equilibrium #3429</p>
                <p className="card-description"> Our Equilibrium collection promotes balance and calm.</p>
            </div>
            <div className="footer">
                    <div className="crypto">
                        <div>
                            <img src={pic} />
                        </div>
                        <p>0.041 ETH</p>
                    </div>
                    <div className="crypto">
                        <div>
                            <img src={clock} />
                        </div>
                        <p className="time">3 days left</p>
                    </div>
            </div>
            <hr></hr>
            <div className="">
                    <div className="crypto">
                        <div>
                            <img src={pic} />
                        </div>
                        <p className="created">Creation of <span className={(hover) ? "created active": "created"}
                        onMouseOver={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        >Apprentice</span></p>
                    </div>
           
            </div>


      </div>
  )  
}

export default Card