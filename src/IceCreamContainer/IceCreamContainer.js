import React from 'react'
// import { buyCake } from './redux/cake/cakeActions'
import * as action from '../actionCreators'
import {connect} from 'react-redux'

// this is the component which need to subsribe to state for 
//num of cakes and also needs to dispatch an action for buy cake
// 3 steps
// 1. define a function map state to props
// 2. define a function map dispatch to props
// 3. connect above two functions with connect(HOF) from react-redux


function IceCreamContainer(props) {
    return (
        <div>
            <h2>No. of Ice cream: {props.numOfIceCream}</h2>
            <button onClick={props.buyIceCream}>Buy Ice Creams</button>
        </div>
    )
}

const mapStateToProps = (state) => {
 return {
     numOfIceCream:state.iceCream.numOfIceCream
     // in complex apps selectors are used to extract only required information
 }
}
 
const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(action.buyIceCream())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)
