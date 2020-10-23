import React, { useState } from 'react';

function getId() {
    return (5999 - Math.round(Math.random() * 392))
} 

function validateContact(data) {
    if (data.name === '') {
        alert('Campo Nome não informado!');
        return false
    }

    if (data.company === '') {
        alert('Campo Empresa não informado!');
        return false
    }

    if (data.email === '') {
        alert('Campo E-mail não informado!');
        return false
    }

    return true
}

export default function ContactForm(props) {
    const [data, setData] = useState({ name:'', email: '', company: '', office: '' });
    const [status, setStatus] = useState(true);

    if(typeof props.show.id !== 'undefined' && status === true){
        setStatus({status: false})
        setData({  
            name: (typeof props.show.name === 'undefined' ? '' : props.show.name), 
            email: (typeof props.show.email === 'undefined' ? '' : props.show.email), 
            company: (typeof props.show.company === 'undefined' ? '' : props.show.company), 
            office: (typeof props.show.office === 'undefined' ? '' : props.show.office)
        })
    }
    
    function updateContact(evt, id){
        evt.preventDefault()
        if (validateContact(data)) {
            props.updItem({ ...data, id: id })
            setData({ name: '', email: '', company: '', office: '' })
            setStatus({status: true})
        }
    }
    
    const changeField = (field) => {
        const change = (evt) => setData({ ...data, [field]: evt.target.value })
        return change
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        if (validateContact(data)) {
            props.save({ ...data, id: getId() })
            setData({ name: '', email: '', company: '', office: '' })
        }
    }

    const definedButton = (typeof props.show.id === 'undefined' ? (
        <div className="mb-2 flex p-4 w-full">
            <button className="flex-1 text-lg text-gray-100 bg-purple-800 bg-opacity-75 p-3 rounded-full" type="submit">Salvar</button>
        </div>
      ) : (
        <div className="mb-2 flex p-4 w-full">
            <button onClick={(evt) => updateContact(evt, props.show.id)}
                    className="flex-1 text-lg text-gray-100 bg-purple-800 bg-opacity-75 p-3 mr-2 rounded-full" type="submit">Atualizar</button>
        </div>
    ));

    return (
        <form onSubmit={handleSubmit} className="shadow-md rounded px-8 pt-6 pb-100 mb-4">
        <div className="flex flex-row mb-5 items-stretch justify-between">
            <label className="text-lg">Nome:</label>
            <input
              type="text" className="p-2 rounded text-gray-900 text-lg"
              maxLength={50} onChange={changeField('name')} 
              value={data.name}
            />
        </div>

        <div className="flex flex-row mb-5 items-stretch justify-between">
            <label className="text-lg">E-mail:</label>
            <input
              type="email" className="p-2 rounded text-gray-900 text-lg" 
              maxLength={50} onChange={changeField('email')} 
              value={data.email}
            />
        </div>

        <div className="flex flex-row mb-5 items-stretch justify-between">
            <label className="text-lg">Empresa:</label>
            <input
              type="text" className="p-2 rounded text-gray-900 text-lg" 
              maxLength={50} onChange={changeField('company')} 
              value={data.company}
            />
        </div>

        <div className="flex flex-row mb-5 items-stretch justify-between">
            <label className="text-lg">Cargo:</label>
            <input
              type="text" className="p-2 rounded text-gray-900 text-lg" 
              maxLength={50} onChange={changeField('office')} 
              value={ data.office }
            />
        </div>

        {definedButton}
    </form>
    )
}
