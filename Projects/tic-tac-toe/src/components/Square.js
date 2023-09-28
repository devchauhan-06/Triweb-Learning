import styles from '../App.css'
import {useState} from 'react'

function Square({value}) {

    return <button className="square" >{value}</button>
}

export default Square;