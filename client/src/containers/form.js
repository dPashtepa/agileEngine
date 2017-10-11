import { connect } from 'react-redux';
import { addItem } from '../actions/list_actions';
import Form from '../components/form';

const mapDispatchToProps = dispatch => ({
  addItem: (item) => {
    dispatch(addItem(item));
  },
});

export default connect(null, mapDispatchToProps)(Form);
