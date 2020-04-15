import React from 'react'
import '../index.css'
import Map from './Map.js'
import Inventory from './Inventory.js'
import ItemPopup from './ItemPopup.js'
import sprite1 from '../.././images/sprite-1.png'
import sprite2 from '../.././images/sprite-2.png'
import sprite3 from '../.././images/sprite-3.png'
import sprite4 from '../.././images/sprite-4.png'
import bag from '../.././images/Bag.png'

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showInventory: false,
      inventory: [],
      spritePositionTop: 340,
      spritePositionLeft: 0,
      spriteSrc: `${sprite3}`,
      lastKeyPress: 0,
      showItemPopup: false,
      lastItemClicked: '',
      showSettings: false
    };
    this.handleKey = this.handleKey.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
    this.pickupItem = this.pickupItem.bind(this);
    this.itemPopup = this.itemPopup.bind(this);
    this.toggleSettings = this.toggleSettings.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKey);
    window.focus();
  }

  handleKey(event) {
    if (event.keyCode === 39) {
      this.setState({
        spritePositionLeft: this.state.spritePositionLeft + 20,
        lastKeyPress: event.keyCode,
        spriteSrc: `${sprite3}`
      })
    }
    if (event.keyCode === 37) {
      this.setState({
        spritePositionLeft: this.state.spritePositionLeft - 20,
        lastKeyPress: event.keyCode,
        spriteSrc: `${sprite4}`
      })
    }
    if (event.keyCode === 38) {
      this.setState({
        spritePositionTop: this.state.spritePositionTop - 20,
        lastKeyPress: event.keyCode,
        spriteSrc: `${sprite2}`
      })
    }
    if (event.keyCode === 40) {
      this.setState({
        spritePositionTop: this.state.spritePositionTop + 20,
        lastKeyPress: event.keyCode,
        spriteSrc: `${sprite1}`
      })
    }
  }

  togglePopup() {
    this.setState({
      showInventory: !this.state.showInventory
    });
  }

  pickupItem(src, name) {
    this.setState({
      inventory: [...this.state.inventory, src],
      lastItemClicked: name
    })
    this.itemPopup()
  }

  itemPopup() {
    this.setState({
      showItemPopup: !this.state.showItemPopup
    })
  }

  toggleSettings() {
    this.setState({
      showSettings: !this.state.showSettings
    })
  }

  render() {
    return (
      <div >
        {/* inventory button */}
        <div className="btn" onClick={this.togglePopup}>
          <img src={bag} />
        </div>
        {this.state.showInventory ? <Inventory
          toggle={this.togglePopup}
          inventory={this.state.inventory} /> : null}
        {this.state.showItemPopup ? <ItemPopup
          showItemPopup={this.itemPopup}
          lastItemClicked={this.state.lastItemClicked} /> : null}
        {/* settings buttons */}

        {/* character sprite */}
        <img
          id='sprite'
          src={this.state.spriteSrc}
          style={{ top: this.state.spritePositionTop, left: this.state.spritePositionLeft }}
        />
        {/* game map contaning items and NPC's */}
        <Map pickupItem={this.pickupItem} />
      </div>
    )
  }
}

export default App