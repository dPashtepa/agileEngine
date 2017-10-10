import { connect } from 'react-redux';
import AddedProducts from '../components/added_products';

function mapStateToProps(state) {
  return {
    item: state.list.itemPreview,
  };
}

export default connect(mapStateToProps)(AddedProducts);
