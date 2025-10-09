import { useState } from 'react'

import './App.css'
import HookComponent from './components/HookComponent'
import Counter from './components/Counter'
import ToggleButton from './components/ToggleButton'
import ShowHide from './components/ShowHide'
import Greetings from './components/Greetings'
import CounterClassComponent from './components/CounterClassComponent'
import LiveClock from './components/LiveClock'
import FormHandling from './components/FormHandling'
import ToDoList from './components/ToDoList'
import ParentChildProps from './components/ParentChildProps'
import ConditionalRenderingLoginForm from './components/ConditionalRenderingLoginForm'
import GymRepCounter from './components/GymRepCounter'

function App() {
  return (
    <div className="app-container">
      <h1>React Practice - Practical 8</h1>
      <div className="card">
        <GymRepCounter />
      </div>
    </div>
  )
}

export default App
