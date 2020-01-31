import React, {useState} from 'react';

import TaskItem from './TaskItems/TaskItem';
import Input from './Input/Input';

const App = () => {
  const [items, setItems] = useState([]);

  let favorites = [];

  const addItem = (val, prior) => {
    setItems([...items, {
      value: val,
      priority: prior
    }])
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
      title={item.value}
      handleDeleteClick={() => deleteItem(index)}
      handlePriority={() => handlePriorityChange(index)}/>
    } else {

      favorites = [<TaskItem
        key = {index} 
        title={item.value}
        handleDeleteClick={() => deleteItem(index)}
        handlePriority={() => handlePriorityChange(index)}/>, ...favorites];

      return null;
    }
    
  })

  return (
    <div className='App'>
      <h1>TO DO APP</h1>
      <Input handleClick={addItem} />
      <hr></hr>
      {favorites}
      {itemsToRender}
    </div>
  );
  
}

export default App;
