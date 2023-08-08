import { useEffect, useRef, useState } from "react";
import {firestore} from '../firebase';
import { useFormInput } from "../hooks";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function CreatePost() {
const title=useFormInput("");
const content=useFormInput("");
const subTitle=useFormInput("");
const navigate=useNavigate();
const titleref=useRef(null);
useEffect(()=>{
    titleref.current.focus();
    document.title="createPost"
   },[])



function handleSubmit(e){
    e.preventDefault();

firestore.collection('posts').add({
    title:title.value,
    subTitle:subTitle.value,
    content:content.value,
    createdAt:new Date()
}).then(()=>{
    toast.success("Blog has been added");

}).catch((err)=>{
    toast.error(err);
})
navigate('/')
}

    return (
      
      <div className='create-post'>
        <div>
            <Link to={`/`}>

        <i className="fa-solid fa-circle-chevron-left"></i>
            </Link>
       <h1> Create Post</h1>
        </div>
      
      <form onSubmit={handleSubmit}>
            <div className="form-feild">
                <label> Title</label>
                <input ref={titleref} {...title} placeholder="Type title" required/>
            </div>
            
            <div className="form-feild">
                <label> Sub-Title</label>
                <input {...subTitle} placeholder="Type Subtitle"/>
            </div>
            
            <div className="form-feild">
                <label> Content</label>
                <textarea {...content} placeholder="Type Content of Blog" required> </textarea>
            </div>
            <button className="create-post-btn">Creat Post</button>
      </form>
      </div>
    
          );
      }
      
      export default CreatePost;
      