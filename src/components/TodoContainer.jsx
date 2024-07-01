import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import AddTodoForm from './AddTodoForm'
import TodoList from './TodoList'
import styles from '../styles/TodoContainer.module.css'
import Menu from './Menu'
import { useRef } from 'react'

const TodoContainer = () => {
    const [todoList, setTodoList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [paramSorting, setParamSorting] = useState('')
    const [inputValue, updateInputValue] = useState('')
    const [tableName, setTableName] = useState('My Todo')

    const [newTitle, setNewTitle] = useState('')
    const [newDate, setNewDate] = useState('')
    const [newDue, setNewDue] = useState('')
    const [newStatus, setNewStatus] = useState('Active')

    const divRef = useRef('')
    const div2Ref = useRef('')
    const inputRef = useRef('');
    const inputRef2 = useRef('')
    const todoListDiv = useRef('')
    const div3Ref = useRef('')

    useEffect(() => {
        fetchData(tableName)
    }, [paramSorting])

    useEffect(() => {
        fetchData(tableName)
    }, [tableName])

    const compareTitleAsc = (a, b) => {
        const titleA = a.fields.title.toUpperCase();
        const titleB = b.fields.title.toUpperCase();
        if (titleA < titleB) {
            return -1;
        }
        if (titleA > titleB) {
            return 1;
        }
        return 0;
    }

    const fetchData = async (tableName) => {
        
        const options =
        {
            method: "GET",
            headers:
            {
                "Content-Type": "application/json",
                Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
            },
        }

        const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${tableName}${paramSorting}`

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                const message = `Error has ocurred: ${response.status}`;
                throw new Error(message);
            }

            const data = await response.json();

            if (!paramSorting) {
                data.records.sort(compareTitleAsc);
            }

            const todos = data.records.map((todo) => ({ id: todo.id, title: todo.fields.title, date: todo.fields.completedAt, dueAt: todo.fields.dueAt, tStatus: todo.fields.tStatus }));

            todos.unshift({ id: 1, title: 'Task', date: 'Date', dueAt: 'Due At', tStatus: 'Status' })

            setTodoList(todos)
            setIsLoading(false)

        } catch (error) {
            div3Ref.current.style.display = 'flex'
            console.log(error.message);
        }
    }

    const addTodo = async (tableName) => {
        setIsLoading(true);

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
            },
            body: JSON.stringify({ "fields": { "title": newTitle, "completedAt": newDate, "dueAt": newDue, "tStatus": newStatus } })
        }

        const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${tableName}`

        try {
            const response = await fetch(url, options);

            if (!response.ok) {
                const message = `Error has ocurred: ${response.status}`;
                throw new Error(message);
            }

            const data = await response.json();

            const todos = [{ id: data.id, title: data.fields.title, date: data.fields.completeAt, dueAt: data.fields.dueAt, tStatus: data.fields.tStatus }, ...(todoList.filter((item) => item.id != 1))]
            todos.unshift({ id: 1, title: 'Task', date: 'Date', dueAt: 'Due At', tStatus: 'Status' })
            setTodoList(todos);
            setIsLoading(false);

        } catch (error) {
            console.log(error.message);
        }
    };

    const removeTodo = async (id) => {
        setIsLoading(true);
        const options =
        {
            method: "DELETE",
            headers:
            {
                "Content-Type": "application/json",
                Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
            },
        }

        const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${tableName}/${id}`

        try {
            const response = await fetch(url, options);

            if (!response.ok) {
                const message = `Error has ocurred: ${response.status}`;
                throw new Error(message);
            }

            const data = await response.json();

            const idx = todoList.indexOf(todoList.find((item) => item.id == data.id))

            const todos = [...todoList]
            todos.splice(idx, 1)
            setTodoList(todos)
            setIsLoading(false);


        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        (isLoading) ?
            <>
                <Menu />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <div className={`${styles.loader}`} ></div>
                </div>
            </>
            :
            <>
                <div ref={divRef} className={styles.overlay}>
                    <div className={styles.overlayDiv3}>
                        <AddTodoForm
                            onAddTodo={addTodo}
                            divRef={divRef}
                            newTitle={newTitle}
                            setNewTitle={setNewTitle}
                            newDate={newDate}
                            setNewDate={setNewDate}
                            newDue={newDue}
                            setNewDue={setNewDue}
                            newStatus={newStatus}
                            setNewStatus={setNewStatus}
                            tableName={tableName}
                            inputRef={inputRef} />
                    </div>
                </div>

                <div ref={div2Ref} className={styles.overlay} >
                    <div className={styles.overlayDiv2}>
                        <div className='center'>
                            <h2 style={{ color: '#C2C0CB', margin: '0 0 15px 0' }}>Table Name</h2>
                        </div>
                        <div className='center'>
                            <input
                                ref={inputRef2}
                                id='tableName'
                                type="text"
                                value={inputValue}
                                onChange={e => updateInputValue(e.target.value)}
                                style={{ fontFamily: 'Poppins', fontSize: '1.8rem', textAlign: 'center', color: '#C2C0CB', backgroundColor: 'transparent', border: 'none', outline: 'none' }}
                            />
                        </div>
                        <div className='center' style={{ borderTop: '3px solid #325cb1' }}>
                            <button style={{ marginTop: '20px', padding: '5px 35px', fontSize: '1.5rem', fontFamily: 'headingnow', color: '#325cb1', marginRight: '30px' }} onClick={(e) => { setTableName(inputRef2.current.value); div2Ref.current.style.display = 'none'; todoListDiv.current.style.display = 'block' }}>&nbsp;&nbsp;Ok&nbsp;&nbsp;</button>
                            <button style={{ marginTop: '20px', padding: '5px 35px', fontSize: '1.5rem', fontFamily: 'headingnow', color: '#325cb1' }} onClick={() => div2Ref.current.style.display = 'none'}>Close</button>
                        </div>
                    </div>
                </div>

                <div ref={div3Ref} className={styles.overlay} >
                    <div className={styles.overlayDiv2}>
                        <div className='center'>
                            <h3 style={{ color: '#C2C0CB', margin: '0 0 15px 0' }}>Table is not exist</h3>
                        </div>
                        <div className='center'>
                            <button style={{ marginTop: '20px', padding: '5px 35px', fontSize: '1.5rem', fontFamily: 'headingnow', color: '#325cb1' }} onClick={(e) => { setTableName('My Todo'); div2Ref.current.style.display = 'flex'; div3Ref.current.style.display = 'none' }}>&nbsp;&nbsp;Ok&nbsp;&nbsp;</button>
                        </div>
                    </div>
                </div>

                <Menu />
                <div style={{ paddingTop: '80px' }}>
                    <h1 className={styles.tableName}>{tableName}
                        <svg onClick={() => { div2Ref.current.style.display = 'flex'; inputRef2.current.value = tableName; inputRef2.current.focus() }} id='tableNameSvg' style={{ paddingLeft: '20px' }} width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#4674D1" strokeWidth="0.00024000000000000003"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M21.1213 2.70705C19.9497 1.53548 18.0503 1.53547 16.8787 2.70705L15.1989 4.38685L7.29289 12.2928C7.16473 12.421 7.07382 12.5816 7.02986 12.7574L6.02986 16.7574C5.94466 17.0982 6.04451 17.4587 6.29289 17.707C6.54127 17.9554 6.90176 18.0553 7.24254 17.9701L11.2425 16.9701C11.4184 16.9261 11.5789 16.8352 11.7071 16.707L19.5556 8.85857L21.2929 7.12126C22.4645 5.94969 22.4645 4.05019 21.2929 2.87862L21.1213 2.70705ZM18.2929 4.12126C18.6834 3.73074 19.3166 3.73074 19.7071 4.12126L19.8787 4.29283C20.2692 4.68336 20.2692 5.31653 19.8787 5.70705L18.8622 6.72357L17.3068 5.10738L18.2929 4.12126ZM15.8923 6.52185L17.4477 8.13804L10.4888 15.097L8.37437 15.6256L8.90296 13.5112L15.8923 6.52185ZM4 7.99994C4 7.44766 4.44772 6.99994 5 6.99994H10C10.5523 6.99994 11 6.55223 11 5.99994C11 5.44766 10.5523 4.99994 10 4.99994H5C3.34315 4.99994 2 6.34309 2 7.99994V18.9999C2 20.6568 3.34315 21.9999 5 21.9999H16C17.6569 21.9999 19 20.6568 19 18.9999V13.9999C19 13.4477 18.5523 12.9999 18 12.9999C17.4477 12.9999 17 13.4477 17 13.9999V18.9999C17 19.5522 16.5523 19.9999 16 19.9999H5C4.44772 19.9999 4 19.5522 4 18.9999V7.99994Z" fill="#C2C0CB"></path> </g></svg>
                        <svg onClick={() => { divRef.current.style.display = 'flex'; inputRef.current.focus() }} width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" strokeWidth="0.00024000000000000003"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M3.75 4.5L4.5 3.75H10.5L11.25 4.5V10.5L10.5 11.25H4.5L3.75 10.5V4.5ZM5.25 5.25V9.75H9.75V5.25H5.25ZM13.5 3.75L12.75 4.5V10.5L13.5 11.25H19.5L20.25 10.5V4.5L19.5 3.75H13.5ZM14.25 9.75V5.25H18.75V9.75H14.25ZM17.25 20.25H15.75V17.25H12.75V15.75H15.75V12.75H17.25V15.75H20.25V17.25H17.25V20.25ZM4.5 12.75L3.75 13.5V19.5L4.5 20.25H10.5L11.25 19.5V13.5L10.5 12.75H4.5ZM5.25 18.75V14.25H9.75V18.75H5.25Z" fill="#02f26a"></path> </g></svg>
                    </h1>

                    <div ref={todoListDiv}>
                        <TodoList todoList={todoList} onRemoveTodo={removeTodo} setParamSorting={setParamSorting} paramSorting={paramSorting} />
                    </div>
                </div>
            </>
    )
}

TodoContainer.protoTypes = {
    tableName: PropTypes.string
}

export default TodoContainer