import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import TodoList from './TodoList'



const Form = (props) => {
    const {handleChange, handleSubmit, handleUpdate, deleteItem, state,} = props
    
    return (
        <div className='to-do'>
          <h1 className="heading">Your Task Schedule</h1>
            <div className="iconPanel">
                <small>Add your tasks</small>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text"
                    value={state.todo.text}
                    onChange={handleChange}
                    />
                </div>

                <FontAwesomeIcon icon="plus" className="icon" 
                    onClick={handleSubmit}></FontAwesomeIcon>
            </form> 
                {
                state.allItems.length > 9 ? 
                <span onClick={props.delete} className="delete">delete all</span>: ''}
            </div>

            <TodoList items={state.allItems}
                updateItem={handleUpdate} deleteItem={deleteItem} />
        </div>
    );
}

export default Form;