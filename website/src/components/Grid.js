import React from 'react'
import './components.css'

export default function Grid(props) {
  return (
    <div className='MainGrid'>
        <div className = {`Cell ${props.path[0]}`}>1</div>
        <div className = {`Cell ${props.path[1]}`}>2</div>
        <div className = {`Cell ${props.path[2]}`}>3</div>
        <div className = {`Cell ${props.path[3]}`}>4</div>
        <div className = {`Cell ${props.path[4]}`}>5</div>
        <div className = {`Cell ${props.path[5]}`}>6</div>
        <div className = {`Cell ${props.path[6]}`}>7</div>
        <div className = {`Cell ${props.path[7]}`}>8</div>
        <div className = {`Cell ${props.path[8]}`}>9</div>
    </div>
  )
}
