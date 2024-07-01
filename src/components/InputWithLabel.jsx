import PropTypes from 'prop-types';
import { useEffect, useRef } from "react";

const InputWithLabel = ({ newTitle, onInputChange, inputRef }) => {

    return (
        <>
            <input
                type="text"
                ref={inputRef}
                onChange={onInputChange}
                placeholder='Title'
                value={newTitle}
                style={{ fontFamily: 'Poppins', fontSize: '2rem' }} 
            />
        </>
    )
}

InputWithLabel.protoTypes = {
    newTitle: PropTypes.string,
    handleTitleChange: PropTypes.func,
    children: PropTypes.object,
}

export default InputWithLabel