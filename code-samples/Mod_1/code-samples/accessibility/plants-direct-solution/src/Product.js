// import {Img} from './Img'

export const Product = (props) => { 
    // DO SOMETHING BELOW vv
    // const {
    //     name, features, images, price, stockLevel
    // } = props.product

    //features - array 
        // loop through the array
        // render each message as a list element
    //images - array ->


    
    return (
        <div>
            <h1>THIS IS THE PRODUCT COMPONENT!!!</h1>
        </div>

        // <article className="product">
        //     <h3>{name}</h3>
        //     {/* the image below is not dynamic! */}
        //     <Img image={images}/>
        //     <p>
        //         Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
        //         accusantium doloremque laudantium, totam rem aperiam eaque ipsa
        //     </p>
        //     <p>
        //         Stock level: {stockLevel}
        //     </p>
        //     {/* the list below is not dynamic! array method features = [m1, m2, m3] */}
        //     <ul>            
        //        {features.map((feature, idx) => {
        //            return <li key={idx}>{feature}</li>
        //        })}
        //     </ul>
        //     {/* This is not dynamic */}
        //     <p>{price}</p>
        //     <div className="promo-blocks__actions">
        //         <a className="button--anchor">
        //         Full Details
        //         </a>
        //         {(!props.cartStatus) ? 
        //             <button onClick={() =>{
        //             props.addToCart(props.product)
        //             props.setCartStatus(props.id)
        //             }}> add to cart
        //             </button> 
        //             :
        //             <button onClick={() => {
        //             props.removeFromCart(props.product)
        //             props.setCartStatus(props.id)
        //             }}> Remove from cart
        //             </button>
        //         }        
        //     </div>            
        // </article>
    )
}