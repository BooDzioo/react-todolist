import React, {useState} from 'react';
import { connect } from 'react-redux';

import * as actionTypes from './reducers/actions';

import TaskItem from './components/TaskItems/TaskItem';
import Input from './components/Input/Input';

const App = (props) => {
  // const [items, setItems] = useState([]);
  // const [editItem, setEditItem] = useState({});

  let favorites = [];

  // const addItem = (val, prior, i) => {
  //   if(typeof i === 'number') {
  //     let helper = [...items];
  //     helper[editItem.index] = {
  //       value: val,
  //       priority: prior
  //     };
  //     setItems(helper);
  //     setEditItem({});
  //   } else {
  //     let helper = {
  //       value: val,
  //       priority: prior
  //     }
  //     setItems(items.concat([helper]))
  //   }
  // }

  // const handlePriorityChange = (i) => {
  //   let itemsHelper = [...items];
  //   itemsHelper[i].priority = !itemsHelper[i].priority;
  //   setItems(itemsHelper);
  // }

  // const handleEdit = (i) => {
  //   setEditItem({
  //     ...items[i],
  //     index: i
  //   })
  // }

  // const deleteItem = (i) => {
  //   const itemsHelper = [...items];
  //   itemsHelper.splice(i, 1);
  //   setItems(itemsHelper);
  // }

  const itemsToRender = props.items.map((item, index) => {
    
    //cheking if item is in edition (for styling)
    let edit = '';
     if (props.edit.hasOwnProperty('index')) {
       edit = props.edit.index === index ? index : '';
     }

    if (item.priority === false) {
     
     return <TaskItem
      key = {index}
      title={item.value}
      priority={item.priority}
      handleDeleteClick={() => props.deleteItem(index)}
      handlePriority={() => props.changeItemPriority(index)}
      handleEditClick={() => props.editItem(index)}
      edit={edit}/>
    } else {

      favorites = [<TaskItem
        key = {index}
        title={item.value}
        priority={item.priority}
        handleDeleteClick={() => props.deleteItem(index)}
        handlePriority={() => props.changeItemPriority(index)}
        handleEditClick={() => props.editItem(index)}
        edit={edit}/>, ...favorites];


      return null;
    }
    
  })

  return (
    <div className='App'>
      <Input/>
      <div className="items">
        {favorites}
        {itemsToRender}
      </div>
    </div>
  );
  
}

const stateToProps = state => {
  return {
      items: state.items,
      edit: state.editItem
  }
}

const actionsToProps = dispatch => {
  return {
      editItem:(index) => dispatch({type: actionTypes.EDIT_ITEM, index: index}),
      deleteItem:(index) => dispatch({type: actionTypes.DELETE_ITEM, index: index}),
      changeItemPriority:(index) => dispatch({type: actionTypes.CHANGE_ITEM_PRIORITY, index: index})
  }
}

export default connect(stateToProps, actionsToProps)(App);
