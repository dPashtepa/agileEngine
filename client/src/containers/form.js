import { connect } from 'react-redux';
import { addItem } from '../actions/list_actions';
import Form from '../components/form';

const mapStateToProps = state => ({
  listItems: state.list.items,
});

const mapDispatchToProps = dispatch => ({
  addItem: (item) => {
    dispatch(addItem(item));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
