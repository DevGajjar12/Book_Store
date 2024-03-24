import React from 'react';
import { Link } from 'react-router-dom';
import DeleteBook from './DeleteBook';

function BooksSection({ data }) {
    const Delete = () => {
        // Delete functionality
    };

    const colors = ["#FFCCCC", "#CCFFCC", "#CCCCFF", "#FFFFCC", "#CCFFFF"];

    return (
        <div className='row row-cols-1 row-cols-md-3 g-4 justify-content-center p-3'>
            {data && data.map((item, index) => (
                <div key={index} className='col'>
                    <div className='card h-100' style={{ backgroundColor: colors[index % colors.length] }}>
                        <div className='card-body'>
                            <div className='d-flex justify-content-center align-items-center' style={{ height: '200px' }}>
                                <img src={item.image} className='card-img-top' alt='Book Cover' style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                            </div>
                            <h5 className='card-title text-center mt-3'>{item.bookname}</h5>
                            <p className='card-text'><b>Description:</b> {item.description}</p>
                            <p className='card-text'><small className='text-muted'><b>Author:</b> {item.author}</small></p>
                            <p className='card-text'><small className='text-muted'><b>Genre:</b> {item.genre}</small></p>
                        </div>
                        <div className='card-footer d-flex justify-content-between align-items-center'>
                            <h5 className='card-text'>Price: <span className='text-danger'>$ {item.price}</span></h5>
                            <div>
                                <Link to={`/update/${item._id}`} className='btn btn-primary'>UPDATE</Link>
                                <DeleteBook id={item._id} onClick={Delete} />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BooksSection;
