import React from 'react'

class ItemPopup extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.showItemPopup();
  };

  render() {
    return (
      <div className="shadow">
        <div className="itemPopup">
          <span className="close" onClick={this.handleClick}>&times;</span>
          <p>What's this? You found a <strong>{this.props.lastItemClicked}</strong>! Let's put this in our backpack for safe keeping. </p>
        </div>
      </div>
    )
  }
}

export default ItemPopup;