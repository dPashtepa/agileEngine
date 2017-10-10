import { connect } from 'react-redux';
import { previewItem } from '../actions/list_actions';
import ProductsView from '../components/list_products_view';

const mapStateToProps = state => ({
  item: state.list.items,
});

const mapDispatchToProps = dispatch => ({
  previewItem: (name) => {
    dispatch(previewItem(name));
  },
});

/*
 Here we are creating a Higher order component
 https://facebook.github.io/react/docs/higher-order-components.html
 */
export default connect(mapStateToProps, mapDispatchToProps)(ProductsView);
