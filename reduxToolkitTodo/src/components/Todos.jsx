import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

function Todos() {

  const todos = useSelector(state => state.Todos)
  const dispatch = useDispatch()

  return (
    <div>Todos</div>
  )
}

export default Todos