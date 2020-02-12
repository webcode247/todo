import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove  from 'react-flip-move'

const TodoList = (props) => {
    let {items, deleteItem, updateItem} = props;
    
     items = props.items.map(item => <div className="item" key={item.id}>
        <FontAwesomeIcon icon="asterisk" className="fa-asterisk"/> 
        <input value={item.text} id={item.id} onChange={(e) =>updateItem(e.target.value,item.id)}/>
            <FontAwesomeIcon icon="times" onClick={() => deleteItem(item.id)} className="fa-times" />
        </div>);
    
    return (
            <FlipMove easing="ease-in-out" duration={500}>
                 {items}
            </FlipMove>
    );
}

export default TodoList;