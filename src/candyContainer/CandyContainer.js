import React from 'react'
// import { buyCake } from './redux/cake/cakeActions'
import * as action from '../actionCreators'
import {connect} from 'react-redux'



function CandyContainer(props) {
    return (
        <div>
            <h1>Num of candies: {props.numOfCandy}</h1>
            <button onClick={props.buyCandy}>Buy candy</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfCandy: state.candy.numOfCandy
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCandy:() => dispatch(action.buyCandy())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(CandyContainer)
