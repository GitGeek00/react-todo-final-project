import PropTypes from 'prop-types';
import styles from '../styles/TodoListItem.module.css'
import moment from 'moment'
import { useRef } from 'react';

const TodoListItem = ({ todo, onRemoveTodo, paramSorting, setParamSorting }) => {

    const azRef = useRef('')
    const zaRef = useRef('')

    const handleSort = () => {
        switch (paramSorting) {
            case '':
                setParamSorting('?view=Grid%20view&sort[0][field]=title&sort[0][direction]=desc')
                azRef.current.style.display = 'none'
                zaRef.current.style.display = 'inline'

                break
            case '?view=Grid%20view&sort[0][field]=title&sort[0][direction]=desc':
                setParamSorting('')
                azRef.current.style.display = 'inline'
                zaRef.current.style.display = 'none'
                break
        }
    }

    return (
        <>
            <li className={styles.listItem}>
                {todo[1] != 'Task' ?
                    <span style={{ display: 'inline-block', textAlign: 'left', width: '40%', marginLeft: '20px' }}>
                        <svg onClick={() => confirm("Are you sure") ? onRemoveTodo() : ''} style={{ paddingRight: '10px' }} width="20px" height="20px" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#4674D1"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 11V17" stroke="#4674D1" strokeWidth="1.500" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M14 11V17" stroke="#4674D1" strokeWidth="1.500" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M4 7H20" stroke="#4674D1" strokeWidth="1.500" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="#4674D1" strokeWidth="1.500" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#4674D1" strokeWidth="1.500" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        <svg onClick={() => alert('Coming Soon')} style={{ paddingRight: '10px' }} width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#4674D1" strokeWidth="0.00024000000000000003"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M21.1213 2.70705C19.9497 1.53548 18.0503 1.53547 16.8787 2.70705L15.1989 4.38685L7.29289 12.2928C7.16473 12.421 7.07382 12.5816 7.02986 12.7574L6.02986 16.7574C5.94466 17.0982 6.04451 17.4587 6.29289 17.707C6.54127 17.9554 6.90176 18.0553 7.24254 17.9701L11.2425 16.9701C11.4184 16.9261 11.5789 16.8352 11.7071 16.707L19.5556 8.85857L21.2929 7.12126C22.4645 5.94969 22.4645 4.05019 21.2929 2.87862L21.1213 2.70705ZM18.2929 4.12126C18.6834 3.73074 19.3166 3.73074 19.7071 4.12126L19.8787 4.29283C20.2692 4.68336 20.2692 5.31653 19.8787 5.70705L18.8622 6.72357L17.3068 5.10738L18.2929 4.12126ZM15.8923 6.52185L17.4477 8.13804L10.4888 15.097L8.37437 15.6256L8.90296 13.5112L15.8923 6.52185ZM4 7.99994C4 7.44766 4.44772 6.99994 5 6.99994H10C10.5523 6.99994 11 6.55223 11 5.99994C11 5.44766 10.5523 4.99994 10 4.99994H5C3.34315 4.99994 2 6.34309 2 7.99994V18.9999C2 20.6568 3.34315 21.9999 5 21.9999H16C17.6569 21.9999 19 20.6568 19 18.9999V13.9999C19 13.4477 18.5523 12.9999 18 12.9999C17.4477 12.9999 17 13.4477 17 13.9999V18.9999C17 19.5522 16.5523 19.9999 16 19.9999H5C4.44772 19.9999 4 19.5522 4 18.9999V7.99994Z" fill="#4674D1"></path> </g></svg>
                        {todo[1]}
                    </span>
                    :
                    <span style={{ display: 'inline-block', textAlign: 'left', width: '40%', marginLeft: '20px' }}>
                        <svg onClick={handleSort} style={{ paddingLeft: '50px' }} width="32px" height="32px" viewBox="0 -4 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" strokeWidth="0.00024000000000000003"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18 10.75H5.99998C5.85218 10.751 5.70747 10.7077 5.58449 10.6257C5.46151 10.5437 5.3659 10.4268 5.30998 10.29C5.25231 10.1528 5.23673 10.0016 5.26523 9.85561C5.29372 9.70959 5.36499 9.57535 5.46998 9.46995L11.47 3.46995C11.6106 3.3295 11.8012 3.25061 12 3.25061C12.1987 3.25061 12.3894 3.3295 12.53 3.46995L18.53 9.46995C18.635 9.57535 18.7062 9.70959 18.7347 9.85561C18.7632 10.0016 18.7476 10.1528 18.69 10.29C18.6341 10.4268 18.5384 10.5437 18.4155 10.6257C18.2925 10.7077 18.1478 10.751 18 10.75ZM7.80998 9.24995H16.19L12 5.05995L7.80998 9.24995Z" fill="#d6d6d6"></path> <path d="M12 20.7499C11.9014 20.7504 11.8038 20.7311 11.7128 20.6934C11.6218 20.6556 11.5392 20.6 11.47 20.5299L5.46998 14.5299C5.36499 14.4245 5.29372 14.2903 5.26523 14.1442C5.23673 13.9982 5.25231 13.847 5.30998 13.7099C5.3659 13.5731 5.46151 13.4561 5.58449 13.3742C5.70747 13.2922 5.85218 13.2489 5.99998 13.2499H18C18.1478 13.2489 18.2925 13.2922 18.4155 13.3742C18.5384 13.4561 18.6341 13.5731 18.69 13.7099C18.7476 13.847 18.7632 13.9982 18.7347 14.1442C18.7062 14.2903 18.635 14.4245 18.53 14.5299L12.53 20.5299C12.4607 20.6 12.3782 20.6556 12.2872 20.6934C12.1962 20.7311 12.0985 20.7504 12 20.7499ZM7.80998 14.7499L12 18.9399L16.19 14.7499H7.80998Z" fill="#d6d6d6"></path> </g></svg>
                        {todo[1]}
                        <svg ref={azRef} width="32px" height="32px" viewBox="0 -4 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.22 15.97L9 17.19V5C9 4.59 8.66 4.25 8.25 4.25C7.84 4.25 7.5 4.59 7.5 5V17.19L6.28 15.97C5.99 15.68 5.51 15.68 5.22 15.97C4.93 16.26 4.93 16.74 5.22 17.03L7.72 19.53C7.79 19.6 7.87 19.65 7.96 19.69C8.05 19.73 8.15 19.75 8.25 19.75C8.35 19.75 8.45 19.73 8.54 19.69C8.63 19.65 8.71 19.6 8.78 19.53L11.28 17.03C11.57 16.74 11.57 16.26 11.28 15.97C10.99 15.68 10.51 15.68 10.22 15.97Z" fill="#dad8d8"></path> <path d="M14 11.21C14.39 11.35 14.82 11.15 14.96 10.76L15.24 9.98001H17.27L17.55 10.76C17.66 11.07 17.95 11.26 18.26 11.26C18.34 11.26 18.43 11.25 18.51 11.22C18.9 11.08 19.1 10.65 18.96 10.26L17.25 5.47001C17.08 5.04001 16.69 4.76001 16.25 4.76001C15.81 4.76001 15.42 5.04001 15.25 5.49001L13.55 10.26C13.41 10.65 13.61 11.08 14 11.22V11.21ZM16.73 8.48001H15.77L16.25 7.14001L16.73 8.48001Z" fill="#dad8d8"></path> <path d="M18.67 13.46C18.48 13.02 18.08 12.75 17.62 12.75H14.51C14.1 12.75 13.76 13.09 13.76 13.5C13.76 13.91 14.1 14.25 14.51 14.25H16.9L14.07 17.2C13.73 17.56 13.64 18.08 13.83 18.54C14.02 18.98 14.42 19.25 14.88 19.25H18.01C18.42 19.25 18.76 18.91 18.76 18.5C18.76 18.09 18.42 17.75 18.01 17.75H15.62L18.44 14.82C18.78 14.46 18.88 13.93 18.68 13.47L18.67 13.46Z" fill="#dad8d8"></path> </g></svg>
                        <svg ref={zaRef} style={{ display: 'none' }} width="32px" height="32px" viewBox="0 -4 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.78 4.47C8.71 4.4 8.63 4.35 8.54 4.31C8.36 4.23 8.15 4.23 7.97 4.31C7.88 4.35 7.8 4.4 7.73 4.47L5.23 6.97C4.94 7.26 4.94 7.74 5.23 8.03C5.52 8.32 6 8.32 6.29 8.03L7.51 6.81V19C7.51 19.41 7.85 19.75 8.26 19.75C8.67 19.75 9.01 19.41 9.01 19V6.81L10.23 8.03C10.38 8.18 10.57 8.25 10.76 8.25C10.95 8.25 11.14 8.18 11.29 8.03C11.58 7.74 11.58 7.26 11.29 6.97L8.79 4.47H8.78Z" fill="#dad8d8"></path> <path d="M18.96 18.25L17.25 13.46C17.08 13.03 16.69 12.75 16.25 12.75C15.81 12.75 15.42 13.03 15.25 13.48L13.55 18.25C13.41 18.64 13.61 19.07 14 19.21C14.39 19.35 14.82 19.15 14.96 18.76L15.24 17.98H17.27L17.55 18.76C17.66 19.07 17.95 19.26 18.26 19.26C18.34 19.26 18.43 19.25 18.51 19.22C18.9 19.08 19.1 18.65 18.96 18.26V18.25ZM15.77 16.48L16.25 15.14L16.73 16.48H15.77Z" fill="#dad8d8"></path> <path d="M13.83 10.54C14.02 10.98 14.42 11.25 14.88 11.25H18.01C18.42 11.25 18.76 10.91 18.76 10.5C18.76 10.09 18.42 9.75001 18.01 9.75001H15.62L18.44 6.82001C18.78 6.46001 18.88 5.93001 18.68 5.47001C18.49 5.03001 18.09 4.76001 17.63 4.76001H14.52C14.11 4.76001 13.77 5.10001 13.77 5.51001C13.77 5.92001 14.11 6.26001 14.52 6.26001H16.91L14.08 9.21001C13.74 9.57001 13.65 10.09 13.84 10.55L13.83 10.54Z" fill="#dad8d8"></path> </g></svg>
                    </span>
                }
                <div style={{ display: 'none' }}>{todo[0]}</div>

                <span style={{ display: 'inline-block', textAlign: 'left', width: '20%' }}>
                    {todo[2] == 'Date' ? todo[2] : moment(todo[2]).format("MMM Do YY")}
                </span>
                <span style={{ display: 'inline-block', textAlign: 'left', width: '20%' }}>
                    {todo[3] == 'Due At' ? todo[3] : moment(todo[3]).fromNow()}
                </span>
                <span style={{ display: 'inline-block', textAlign: 'left', width: '10%' }}>
                    {todo[4]}
                </span>
            </li >
        </>
    )
}

TodoListItem.protoTypes = {
    todo: PropTypes.object,
    onRemoveTodo: PropTypes.func,
}


export default TodoListItem