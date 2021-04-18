import React from 'react'
import { buyCake } from './redux/cake/cakeActions'
import {connect} from 'react-redux'

// this is the component which need to subsribe to state for 
//num of cakes and also needs to dispatch an action for buy cake
// 3 steps
// 1. define a function map state to props
// 2. define a function map dispatch to props
// 3. connect above two functions with connect(HOF) from react-redux


function CakeContainer(props) {
    return (
        <div>
            <h2>No. of cakes: {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = (state) => {
 return {
     numOfCakes:state.numOfCakes
     // in complex apps selectors are used to extract only required information
 }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)
