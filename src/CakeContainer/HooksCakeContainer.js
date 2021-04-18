import React from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import { buyCake } from './redux/cake/cakeActions'

//using useSelector hook : used to access state in store
// using useDispacth hook : used to dispatch actions 


function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>No. of cakes: {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer
