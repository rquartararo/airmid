import React from 'react'
import potion from '../.././images/Potion006.png'

class Items extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <img
          src={potion}
          styles={{ position: 'relative', top: '100', left: '100' }}
          onClick={this.props.pickupItem.bind(this, { potion }, "potion")}
        />
        <img
          src={potion}
          styles={{ position: 'relative', top: '100', left: '200' }}
          onClick={this.props.pickupItem.bind(this, { potion }, "potion")}
        />
        <img
          src={potion}
          styles={{ position: 'relative', top: '100', left: '300' }}
          onClick={this.props.pickupItem.bind(this, { potion }, "potion")}
        />
        <img
          src={potion}
          styles={{ position: 'relative', top: '100', left: '400' }}
          onClick={this.props.pickupItem.bind(this, { potion }, "potion")}
        />
        <img
          src={potion}
          styles={{ position: 'relative', top: '100', left: '500' }}
          onClick={this.props.pickupItem.bind(this, { potion }, "potion")}
        />
        <img
          src={potion}
          styles={{ position: 'relative', top: '100', left: '600' }}
          onClick={this.props.pickupItem.bind(this, { potion }, "potion")}
        />
        <img
          src={potion}
          styles={{ position: 'relative', top: '100', left: '700' }}
          onClick={this.props.pickupItem.bind(this, { potion }, "potion")}
        />
        <img
          src={potion}
          styles={{ position: 'relative', top: '100', left: '800' }}
          onClick={this.props.pickupItem.bind(this, { potion }, "potion")}
        />
        <img
          src={potion}
          styles={{ position: 'relative', top: '100', left: '900' }}
          onClick={this.props.pickupItem.bind(this, { potion }, "potion")}
        />
        <img
          src={potion}
          styles={{ position: 'relative', top: '100', left: '1000' }}
          onClick={this.props.pickupItem.bind(this, { potion }, "potion")}
        />
      </div>

    )
  }
}

export default Items;