import React, { Component } from 'react';

class ListView extends Component {
  constructor(props) {
    super(props);

    this.newItem = this.newItem.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  clearForm () {
    this.refs['name'].value = '';
    const inp = document.querySelectorAll('input[type=checkbox]');
    inp.forEach(el => el.checked = false);
  }

  newItem () {
    const name = this.refs['name'].value;
    const validate = name.length > 3 && name.length < 9 && /^[a-zA-Z0-9]+$/.test(name);

    if (validate) {
      const {addItem} = this.props;
      const newItem = {};
      const inp = document.querySelectorAll('input[type=checkbox]');

      newItem['name'] = name;
      newItem['color'] = [];

      inp.forEach(el => el.checked && newItem['color'].push(el.value));

      addItem(newItem);
      this.clearForm();
    } else {
      alert('Please check name field: 4-8 characters, only numbers and letters allowed.')
    }
    return false;
  }

  render() {
    return (
      <div className="add_item">
        <h2>Fill the fields to add new item</h2>
        <input id="prodName" type="text" name="name" placeholder="Name" ref="name"/>
        <div>
          <input type="checkbox" id="green" name="color" value="green"/>
          <label htmlFor="green">Green</label>
        </div>
        <div>
          <input type="checkbox" id="red" name="color" value="red"/>
          <label htmlFor="red">Red</label>
        </div>
        <div>
          <input type="checkbox" id="blue" name="color" value="blue"/>
          <label htmlFor="blue">Blue</label>
        </div>
        <button onClick={() =>this.newItem()}>Add</button>
      </div>
    );
  }
}

export default ListView;
