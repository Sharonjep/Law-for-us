import React from 'react'
import ReactDOM from 'react-dom'

import BookingModule from './components/BookingModule'
import './components/style.css'

 
const reactContentRoot=document.getElementById("root")

console.log(BookingModule)
ReactDOM.render(<BookingModule/> , reactContentRoot)