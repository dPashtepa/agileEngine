import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddedProducts extends Component {
    renderList() {
        const { listItems} = this.props;
        if(listItems.length) {
            return Object.keys(listItems).map((key) => {
                const item = listItems[key];
                return (
                    <div
                        key={item.name}
                    >
                        <h2>{ item.name }</h2>
                        <p>{ item.color }</p>
                    </div>
                );
            });
        } else {
            return (
                <div>No recently added products</div>
            )
        }

    }
    render() {
        console.log(this.prop);
        return (
            <div>
                <h4>Recently added products</h4>
                <div className="list_items">
                    { this.renderList() }
                </div>
            </div>
        )
    }

}

AddedProducts.propTypes = {
    listItems: PropTypes.array.isRequired,
};

export default AddedProducts;
