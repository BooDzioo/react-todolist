import * as actionTypes from './actions';

const initialState = {
    items: [],
    editItem: {
        item: {}
    }
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_ITEM:
            let itemsAdd = [...state.items];
            const adition = {
                value: action.value,
                priority: action.priority
            }
            let state2 = {
                ...state
            }
            if (typeof action.index === 'number') {
                itemsAdd[action.index] = adition;
                state2.editItem = {item: {}};
            } else {
                itemsAdd = itemsAdd.concat([adition]);
            } 
            return {
                ...state2,
                items: itemsAdd
            }
        case actionTypes.EDIT_ITEM:
            return {
                ...state,
                editItem: {
                    index: action.index,
                    item: state.items[action.index]
                }
            }
        case actionTypes.DELETE_ITEM:
            let itemsDel = [...state.items];
            itemsDel.splice(action.index, 1);
            return {
                ...state,
                items: itemsDel
            }
        case actionTypes.CHANGE_ITEM_PRIORITY:
            let itemsChange  = [...state.items];
            itemsChange[action.index].priority = !itemsChange[action.index].priority;
            return {
                ...state,
                items: itemsChange
            }
        default:
            return state;
    }
    
}

export default rootReducer;