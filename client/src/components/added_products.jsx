import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddedProducts extends Component {
    renderList() {
        const { recentlyAdded } = this.props;
        if(recentlyAdded.length) {
            return Object.keys(recentlyAdded).map((key) => {
                const item = recentlyAdded[key];
                let colors = item.color && item.color.length ? item.color.join(', ') : '';

                return (
                    <div
                        key={item.name}
                    >
                        <h2>{ item.name }</h2>
                        <p>{ colors }</p>
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
  recentlyAdded: PropTypes.array.isRequired,
};

export default AddedProducts;
