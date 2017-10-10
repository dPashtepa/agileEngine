import React, { Component } from 'react';

class ListView extends Component {
  constructor(props) {
    super(props);
    this.newItem = this.newItem.bind(this);
  }

  newItem () {
    const { addItem } = this.props;
    const newItem = {};
    for (const field in this.refs) {
      newItem[field] = this.refs[field].value;
    }
    addItem(newItem);

  }

  render() {

    return (
      <div className="list_items">
        <h2>Fill the fields to add new item</h2>
        <input type="text" name="name" placeholder="Name" ref="name"/>
        <input type="text" name="color" placeholder="color" ref="color"/>
        <button onClick={() =>this.newItem()}>Add</button>
      </div>
    );
  }
}

export default ListView;
