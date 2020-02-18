import React, {useState} from 'react';

import TaskItem from './TaskItems/TaskItem';
import Input from './Input/Input';

const App = () => {
  const [items, setItems] = useState([]);

  console.log(items)

  let favorites = [];

  const addItem = (val, prior, color) => {
    console.log(`[App.js]AddItem ${val} ${prior} ${color}`)
    let helper = {
      value: val,
      priority: prior,
      color: color
    }
    setItems(items.concat([helper]))
  }

  const handlePriorityChange = (i) => {
    let itemsHelper = [...items];
    itemsHelper[i].priority = !itemsHelper[i].priority;
    setItems(itemsHelper);
  }

  const deleteItem = (i) => {
    const itemsHelper = [...items];
    itemsHelper.splice(i, 1);
    setItems(itemsHelper);
  }

  const itemsToRender = items.map((item, index) => {
    
    if (item.priority === false) {
     
     return <TaskItem
      key = {index}
      color = {item.color} 
      title={item.value}
      handleDeleteClick={() => deleteItem(index)}
      handlePriority={() => handlePriorityChange(index)}/>
    } else {

      favorites = [<TaskItem
        key = {index}
        color = {item.color}  
        title={item.value}
        handleDeleteClick={() => deleteItem(index)}
        handlePriority={() => handlePriorityChange(index)}/>, ...favorites];

      return null;
    }
    
  })

  return (
    <div className='App'>
      <Input handleClick={addItem} />
      {favorites}
      {itemsToRender}
    </div>
  );
  
}

export default App;
