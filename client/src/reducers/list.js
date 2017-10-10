import { LIST_ACTIONS } from '../consts/action_types';
import { LISTS } from '../consts/default_state';

export default (state = LISTS, action) => {
  switch (action.type) {
    case LIST_ACTIONS.ITEM_DELETE:
      const nextItems = state.items;
      const newArr = nextItems.filter( el => el.name !== action.name );
      const returnVal = { ...state, items: newArr };
      return returnVal;
    case LIST_ACTIONS.ITEM_ADD: {
      const nextItems = state.items, addedItems = state.recentlyAdded;
      nextItems.push(action.item);
      addedItems.push(action.item);
      const returnVal = { ...state, items: nextItems, recentlyAdded: addedItems };
      return returnVal;
    }
    default:
      return state;
  }
};
