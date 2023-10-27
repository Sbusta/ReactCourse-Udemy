import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
//import { HelloWorldApp } from './HelloWorldApp'
//import { NameApp } from './NameApp'
import { CounterApp } from './CounterApp'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<NameApp title= 'Buen Título' />*/}
    <CounterApp value={20} />
  </React.StrictMode>,
)
