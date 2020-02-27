import React, {useState} from 'react';

import TaskItem from './TaskItems/TaskItem';
import Input from './Input/Input';

const App = () => {
  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState(null);

  console.log(items)

  let favorites = [];

  const addItem = (val, prior, i) => {
    if(typeof i === 'number') {
      let helper = [...items];
      helper[editItem.index] = {
        value: val,
        priority: prior
      };
      setItems(helper);
      setEditItem(null);
      console.log('o chuj')
    } else {
      let helper = {
        value: val,
        priority: prior
      }
      setItems(items.concat([helper]))
    }
  }

  const handlePriorityChange = (i) => {
    let itemsHelper = [...items];
    itemsHelper[i].priority = !itemsHelper[i].priority;
    setItems(itemsHelper);
  }

  const handleEdit = (i) => {
    setEditItem({
      ...items[i],
      index: i
    })
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
      priority={item.priority}
      handleDeleteClick={() => deleteItem(index)}
      handlePriority={() => handlePriorityChange(index)}
      handleEditClick={() => handleEdit(index)}/>
    } else {

      favorites = [<TaskItem
        key = {index}
        title={item.value}
        priority={item.priority}
        handleDeleteClick={() => deleteItem(index)}
        handlePriority={() => handlePriorityChange(index)}
        handleEditClick={() => handleEdit(index)}/>, ...favorites];


      return null;
    }
    
  })

  return (
    <div className='App'>
      <Input handleClick={addItem} handleEdit={editItem}/>
      <div className="items">
        {favorites}
        {itemsToRender}
      </div>
    </div>
  );
  
}

export default App;
