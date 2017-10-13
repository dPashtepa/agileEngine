import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListView extends Component {
  renderList() {
    const { listItems, deleteItem } = this.props;
    if(listItems.length) {
      return Object.keys(listItems).map((key) => {
        const item = listItems[key];
        let colors = item.color && item.color.length ? item.color.join(', ') : '';

        return (
            <div
                key={item.name}
            >
              <h2>{ item.name }</h2>
              <p>{ colors }</p>
              <button onClick={() => deleteItem(item.name)}>Delete</button>
            </div>
        );
      });
    } else {
      return (
          <div>No items</div>
      )
    }

  }
  render() {
    return (
        <div className="list_items">
            { this.renderList() }
        </div>
    );
  }
}

ListView.propTypes = {
  listItems: PropTypes.array.isRequired,
};

export default ListView;
