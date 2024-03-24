import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";

function UpdateBook() {
    const { id } = useParams(); // Fetch the bookId from the URL
    const [data, setData] = useState({ bookname: "", description: "", author: "", genre: "", image: "", price: "" });

    useEffect(() => {
        fetchData();
    }, [id]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/api/v1/getBooks/${id}`);
            setData(response.data.book);
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:4000/api/v1/updateBook/${id}`, data);
            alert("Book updated successfully");
            // You may want to perform additional actions after updating the book
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='bg-dark d-flex justify-content-center align-items-center' style={{ minHeight: "91.5vh" }}>
            <div className='container p-4'>
                <div className="mb-3">
                    <label htmlFor="bookname" className="form-label text-white">Book Name</label>
                    <input type="text" className="form-control" id="bookname" placeholder="Enter Book Name" name='bookname' onChange={handleChange} value={data.bookname} />
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label text-white">Description</label>
                    <textarea type="text" className="form-control" id="description" placeholder="Enter Description" name='description' onChange={handleChange} value={data.description} />
                </div>

                <div className="mb-3">
                    <label htmlFor="author" className="form-label text-white">Author Name</label>
                    <input type="text" className="form-control" id="author" placeholder="Enter Author Name" name='author' onChange={handleChange} value={data.author} />
                </div>

                <div className="mb-3">
                    <label htmlFor="genre" className="form-label text-white">Genre</label>
                    <input type="text" className="form-control" id="genre" placeholder="Enter Genre Name" name='genre' onChange={handleChange} value={data.genre} />
                </div>

                <div className="mb-3">
                    <label htmlFor="image" className="form-label text-white">Image URL</label>
                    <input type="text" className="form-control" id="image" placeholder="Enter Image Url" name='image' onChange={handleChange} value={data.image} />
                </div>

                <div className="mb-3">
                    <label htmlFor="price" className="form-label text-white">Price</label>
                    <input type="Number" className="form-control" id="price" placeholder="Enter Price" name='price' onChange={handleChange} value={data.price} />
                </div>

                <button className='btn btn-success' onClick={handleSubmit}>Update</button>
            </div>
        </div>
    );
}

export default UpdateBook;
