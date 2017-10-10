import { LIST_ACTIONS } from '../consts/action_types';

export const deleteItem = name => ({
  type: LIST_ACTIONS.ITEM_DELETE,
  name, // shorthand for name: name
});

export const addItem = item => ({
  type: LIST_ACTIONS.ITEM_ADD,
  item, // shorthand for item: item
});

