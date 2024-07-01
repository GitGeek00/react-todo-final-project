import PropTypes from 'prop-types';
import { useState } from 'react';
import InputWithLabel from './InputWithLabel'

const AddTodoForm = ({ onAddTodo, divRef, tableName, setNewTitle, newDate, setNewDate, newDue, setNewDue, newStatus, setNewStatus, inputRef }) => {

    const handleTitleChange = (e) => {
        setNewTitle(e.target.value)
    }

    const handleAddTodo = (e) => {
        e.preventDefault()
        onAddTodo(tableName)
        divRef.current.style.display = 'none'
    }

    return (
        <>
            <div className='center'>
                <div style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <svg width="44px" height="44px" viewBox="0 0 48 48" version="1" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 48 48" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#CFD8DC" d="M5,38V14h38v24c0,2.2-1.8,4-4,4H9C6.8,42,5,40.2,5,38z"></path> <path fill="#F44336" d="M43,10v6H5v-6c0-2.2,1.8-4,4-4h30C41.2,6,43,7.8,43,10z"></path> <g fill="#B71C1C"> <circle cx="33" cy="10" r="3"></circle> <circle cx="15" cy="10" r="3"></circle> </g> <g fill="#B0BEC5"> <path d="M33,3c-1.1,0-2,0.9-2,2v5c0,1.1,0.9,2,2,2s2-0.9,2-2V5C35,3.9,34.1,3,33,3z"></path> <path d="M15,3c-1.1,0-2,0.9-2,2v5c0,1.1,0.9,2,2,2s2-0.9,2-2V5C17,3.9,16.1,3,15,3z"></path> </g> <g fill="#90A4AE"> <rect x="13" y="20" width="4" height="4"></rect> <rect x="19" y="20" width="4" height="4"></rect> <rect x="25" y="20" width="4" height="4"></rect> <rect x="31" y="20" width="4" height="4"></rect> <rect x="13" y="26" width="4" height="4"></rect> <rect x="19" y="26" width="4" height="4"></rect> <rect x="25" y="26" width="4" height="4"></rect> <rect x="31" y="26" width="4" height="4"></rect> <rect x="13" y="32" width="4" height="4"></rect> <rect x="19" y="32" width="4" height="4"></rect> <rect x="25" y="32" width="4" height="4"></rect> <rect x="31" y="32" width="4" height="4"></rect> </g> </g></svg>
                    <h2 style={{ color: '#CFD8DC', margin: '25px 0' }}>
                        New Task
                    </h2>
                </div>
            </div>
            <form className='center' style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleAddTodo}>
                <InputWithLabel onInputChange={handleTitleChange} inputRef={inputRef}/>
                <input
                    id='date'
                    type="datetime-local"
                    value={newDate}
                    onChange={e => setNewDate(e.target.value)}
                    style={{ fontFamily: 'Poppins', fontSize: '2rem' }} placeholder='Date'
                />
                <input
                    id='dueAt'
                    type="datetime-local"
                    value={newDue}
                    onChange={e => setNewDue(e.target.value)}
                    style={{ fontFamily: 'Poppins', fontSize: '2rem' }} placeholder='Due At'
                />
                <input
                    id='stat'
                    type="text"
                    value={newStatus}
                    onChange={e => setNewStatus(e.target.value)}
                    style={{ fontFamily: 'Poppins', fontSize: '2rem' }} placeholder='Status'
                />
                <div className='center'>
                    <button type='submit' style={{ marginTop: '20px', marginRight: '20px', color: '#325cb1', padding: '5px 35px', fontSize: '1.5rem', fontFamily: 'headingnow' }}>&nbsp;&nbsp;Ok&nbsp;&nbsp;</button>
                    <button style={{ marginTop: '20px', padding: '5px 35px', fontSize: '1.5rem', color: '#325cb1', fontFamily: 'headingnow' }} onClick={(e) => { e.preventDefault(); divRef.current.style.display = 'none' }} >Close</button>
                </div>
            </form>
        </>
    )
}

AddTodoForm.protoTypes = {
    onAddTodo: PropTypes.func
}

export default AddTodoForm