import styles from '../App.css'
import {useState} from 'react'

function Square({value, onSquareClick }) {

    return <button className="square" onClick={onSquareClick} >{value}</button>
}

export default Square;