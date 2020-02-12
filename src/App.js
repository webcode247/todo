import React from "react";
import Form from './Form';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faPlus, faAsterisk } from '@fortawesome/free-solid-svg-icons';

library.add(faTimes, faPlus, faAsterisk)

class App extends React.Component {


    state = {  
        allItems: [],
        todo: {
            text: '',
            id: ''
        }
    }

    handleChange = e => {
        let target = e.target;

        this.setState({
            todo: {
                text: target.value,
                id: Date.now()
            }
        })
    };

    
 handleSubmit = e => {
     e.preventDefault();
     const items = this.state.todo;
     if(items.text !=='') {
     const newItems = [...this.state.allItems, items];
     this.setState({
         allItems: newItems,
         todo: {
             text: '',
             id:''
         }
     });
    }
 }

 handleUpdate = (newText,id) => {
   const updatedItems = this.state.allItems
   updatedItems.map( item => {
       if(item.id === id) {
           item.text = newText
       }
       return updatedItems
   });

   this.setState({
       allItems: updatedItems
   })
 };

 deleteItem = id => {
     const restItems = this.state.allItems.filter(item => item.id !== id);
     this.setState({
         allItems:restItems
     })
 };

 delete() {
     const child = document.querySelectorAll('.item');
     child.forEach(item => item.parentNode.removeChild(item));
     
 }
    


    render() {
        return (
            <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit}
              handleUpdate={this.handleUpdate} deleteItem={this.deleteItem}
                delete={this.delete} state={this.state}
            />
        );
    }
}

export default App;