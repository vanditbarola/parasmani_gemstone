import React, { Dispatch, SetStateAction } from 'react'

interface PropsType {
    setShowCart: Dispatch<SetStateAction<boolean>>
}

const Cart = ({setShowCart}: PropsType) => {
  return (
    <div>Cart</div>
  )
}

export default Cart