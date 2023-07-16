import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { buyCake } from './redux/cakes/cakeActions'

const HooksCakeContainer = () => {
    const numbOfCakes = useSelector(state => state.cake.numbOfCakes)
    const dispatch = useDispatch()
  return (
    <div>
      <h2>Numb of cakes- {numbOfCakes}</h2>
      <button onClick={()=> dispatch(buyCake())}>BuyCake</button>
    </div>
  )
}

export default HooksCakeContainer
