import React from 'react'
// import { buyCake } from './redux/cake/cakeActions'
import {useState} from 'react'
import * as action from '../actionCreators'
import {connect} from 'react-redux'

// this is the component which need to subsribe to state for 
//num of cakes and also needs to dispatch an action for buy cake
// 3 steps
// 1. define a function map state to props
// 2. define a function map dispatch to props
// 3. connect above two functions with connect(HOF) from react-redux


function NewCakeContainer(props) {
    const [number, setNumber] = useState(1)

    return (
        <div>
            <h2>No. of cakes: {props.numOfCakes}</h2>
            <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick={() => props.buyCake(number)}>Buy {number} cakes</button>
        </div>
    )
}

const mapStateToProps = (state) => {
 return {
     numOfCakes:state.cake.numOfCakes
     // in complex apps selectors are used to extract only required information
 }
}
 
const mapDispatchToProps = dispatch => {
    return {
        buyCake: (number) => dispatch(action.buyCake(number))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainer)
