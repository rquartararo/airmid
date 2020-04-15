import React from 'react'
import './index.css'
import Tiles from './Tiles.js'
import sprite1 from '../images/sprite-1.png'
import sprite2 from '../images/sprite-1.png'
import sprite3 from '../images/sprite-1.png'
import sprite4 from '../images/sprite-1.png'

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      inventory: [],
      spritePositionTop: 100,
      spritePositionLeft: 100,
      spriteSrc: `${sprite1}`,
      lastKeyPress: 0,
    };
    this.handleKey = this.handleKey.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKey);
    window.focus();
  }

  getSpriteMapLocation(keyCode) {

  }

  handleKey(event) {
    if (event.keyCode === 39) {
      this.setState({ spritePositionLeft: this.state.spritePositionLeft + 20, lastKeyPress: event.keyCode })
    }
    if (event.keyCode === 37) {
      this.setState({ lastKeyPress: event.keyCode })
      this.setState({ spritePositionLeft: this.state.spritePositionLeft - 20, lastKeyPress: event.keyCode })
    }
    if (event.keyCode === 38) {
      this.setState({ lastKeyPress: event.keyCode })
      this.setState({ spritePositionTop: this.state.spritePositionTop - 20, lastKeyPress: event.keyCode })
    }
    if (event.keyCode === 40) {
      this.setState({ lastKeyPress: event.keyCode })
      this.setState({ spritePositionTop: this.state.spritePositionTop + 20, lastKeyPress: event.keyCode })
    }
  }

  render() {
    return (
      <div >
        <img
          id='sprite'
          src={this.state.spriteSrc}
          style={{ top: this.state.spritePositionTop, left: this.state.spritePositionLeft }}
        />
        <Tiles />
      </div>
    )
  }
}

export default App