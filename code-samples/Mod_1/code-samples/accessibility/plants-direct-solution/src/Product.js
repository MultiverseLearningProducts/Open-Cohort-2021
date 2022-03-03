import {Img} from './Img'

export const Product = (props) => { 
    //DO SOMETHING BELOW vv
    const {
        name, features, images, price, stockLevel
    } = props.product


    // features - array 
    //     loop through the array
    //     render each message as a list element
    // images - array ->

    console.log('THIS IS PROPS FROM THE CHILD COMPONENT PRODUCT ====', props)
    
    return (
        <article className="product">
            <h3>{name}</h3>
            {/* the image below is not dynamic! */}
            <Img image={images}/>
            <p>
                Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam eaque ipsa
            </p>
            <p>
                Stock level: {stockLevel}
            </p>
            {/* the list below is not dynamic! array method features = [m1, m2, m3] */}
            <ul>            
               {features.map((feature, idx) => {
                   return <li key={idx}>{feature}</li>
               })}
            </ul>
            {/* This is not dynamic */}
            <p>{price}</p>
            <div className="promo-blocks__actions">
                <a className="button--anchor">
                Full Details
                </a>
                {(!props.cartStatus) ? 
                    <button onClick={() =>{
                    props.addToCart(props.product)
                    props.setCartStatus(props.id)
                    }}> add to cart
                    </button> 
                    :
                    <button onClick={() => {
                    props.removeFromCart(props.product)
                    props.setCartStatus(props.id)
                    }}> Remove from cart
                    </button>
                }        
            </div>            
        </article>
    )
}

//1. We need to toggle the button from add to cart -> remove from cart [ ]
//2. How do we identify which specific button to toggle? [ ]
//3. Where is the connection between the total items in the cart vs when the user interacts with the add to cart buttons [ ]