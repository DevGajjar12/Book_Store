import React from 'react';
import axios from 'axios';

const DeleteBook = ({ id, onDelete }) => {
    const Delete = async () => {
        try {
            const response = await axios.delete(`http://localhost:4000/api/v1/deleteBook/${id}`);
            alert(response.data.message);
            onDelete();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <button className='btn btn-danger' onClick={Delete}>DELETE</button>
    );
}

export default DeleteBook;
