import React, { useState } from 'react';
import ContactForm from '../Form/ContactForm';
import ContactCard from '../Card/ContactCard';

export default function ContactList() {
    let [list, setList] = useState([])
    let [itemList, setItemList] = useState([])


    const insertItem = (item) => {
        setList([...list, item])
    }
    
    const deleteItem = (id) => {
        let [...listAux] = list

        for(let i in listAux){
            if(listAux[i].id === id){
                listAux.splice(i,1)
            }
        }
        setList([...listAux])
    }

    const showItem = (id) => {
        setItemList([])
        for(let i in list){
            if(list[i].id === id){
                let item = list[i]
                setItemList(item)
            }
        }
    }

    const updateItem = (item) => {
        setItemList([])
        let [...listAux] = list
        for(let i in listAux){
            if(listAux[i].id === item.id){
                listAux[i] = item
            }
        }
        setList([...listAux])
    
    }

    let cards = list.map(contact => (
      <ContactCard key={contact.id} data={contact} delete={deleteItem} show={showItem}/>
    ));
    
    return (
    <div className="w-3/12 mt-4">
        <ContactForm save={insertItem} show={itemList} updItem={updateItem}/>
        {cards}
    </div>
    )
}