import React from 'react';

export default function ContactCard( props ) {
    const { id, name, email, company, office } = {...props.data}

    function deleteContact(evt, id) {
        evt.preventDefault();
        props.delete(id);
    }

    function updateContact(evt, id) {
        evt.preventDefault();
        props.show(id);
    }

    return (
        <div className="mb-2 flex flex-col p-4 bg-white items-start text-gray-600 rounded-lg w-full">
            <span className="block text-2xl text-gray-800">Nome: {name}</span>
            <span className="block text-base text-gray-800">E-mail: {email}</span>
            <span className="block text-base text-gray-800">Empresa: {company}</span>
            <span className="block text-base text-gray-800">Cargo: {office}</span>

            <div className="mb-2 flex p-4 bg-white rounded-lg w-full">
                <button onClick={(evt) => updateContact(evt, id)}
                        className="flex-1 text-lg text-gray-100 bg-purple-800 p-3 mr-2 rounded-full"
                        type="submit">Editar</button>
                <button onClick={(evt) => deleteContact(evt, id)}
                        className="flex-1 text-lg text-gray-100 bg-purple-800 p-3 rounded-full"
                        type="submit">Excluir</button>
            </div>
        </div>
    )
}
