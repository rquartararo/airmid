import React from 'react'
import './index.css'
import Tiles from './Tiles.js'
import sprite from '../images/sprite-forward-stand.png'

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      inventory: [],
      spritePosition: { top: 0, left: 0 },
      spriteSrc: `${sprite}`
    };
  }


  render() {
    return (
      <div >
        <img id='sprite' src={this.state.spriteSrc} style={{ top: '120px' }} />
        <Tiles />
      </div>
    )
  }
}

export default App