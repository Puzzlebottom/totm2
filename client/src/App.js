import React from 'react'
import {BsGearFill} from 'react-icons/bs'
import './sass/App.sass'
import './sass/panel.sass'

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={"header"}>
        <span>Round 0 Turn 0</span>
        TOTM Tracker 2.0
        <button className={'menu-button'}>
          <BsGearFill style={{color: 'white'}}/>
        </button>
      </div>
    )
  }
}