import React, { useState } from 'react';
import axios from "axios";

function AddBook() {
  const [Data, setData] = useState({bookname:"",description:"",author:"",genre:"",image:"",price:""})
  const change = (e)=> {
    const {name,value} = e.target
    setData({ ...Data,[name]: value});
  };

  const submit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/api/v1/add", Data)
      .then((res) => alert(res.data.message))
      .catch((error) => console.error(error));
      setData({bookname:"",description:"",author:"",genre:"",image:"",price:""})
  }
  
  console.log(Data);


  return (
    <div className='bg-dark d-flex justify-content-center align-items-center' style={{minHeight:"91.5vh"}}>
     <div className='container p-4'> 
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label text-white">Book Name</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Book Name" name='bookname' onChange={change} value={Data.bookname}/>
      </div>


      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label text-white">Description</label>
        <textarea type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Description" name='description' onChange={change} value={Data.description}/>
      </div>


      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label text-white">Author Name</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Author Name" name='author' onChange={change} value={Data.author} />
      </div>


      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label text-white">Genre</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Genre Name" name='genre' onChange={change} value={Data.genre} />
      </div>


      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label text-white">Image URL</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Image Url" name='image' onChange={change} value={Data.image}/>
      </div>

      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label text-white">Price</label>
        <input type="Number" className="form-control" id="exampleFormControlInput1" placeholder="Enter Price" name='price' onChange={change} value={Data.price} />
      </div>

      <button className='btn btn-success' onClick={submit}> Submit </button>
      
      </div>  
    </div>
  );
}

export default AddBook;
