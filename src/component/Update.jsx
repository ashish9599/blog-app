import { useEffect, useState } from "react";
import {firestore} from '../firebase';
import { useFormInput } from "../hooks";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function Update() {
    const [post,setPost]=useState({});
    const {postId}=useParams();
    const [title,setTitle]=useState("");
    const [content,setContent]=useState("");
    const [subTitle,setSubTitle]=useState("");
const navigate=useNavigate();
useEffect(()=>{
    firestore
    .collection('posts').doc(postId).get().then((snapshot)=>{
    //  console.log('Snapshot',snapshot.data());
     setPost(snapshot.data());
    })
  },[])
  
function handleSubmit(e){
    e.preventDefault();

firestore.collection('posts').doc(postId).update({
    title:title,
    subTitle:subTitle,
    content:content,
}).then(()=>{
    toast.success("Blog has been Update");

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
       <h1> Update Post</h1>
        </div>
      
      <form onSubmit={handleSubmit}>
            <div className="form-feild">
                <label> Title</label>
                <input type="text" value={title} 
                onChange={(e)=>setTitle(e.target.value)}
                placeholder={post.title} required/>
            </div>
            
            <div className="form-feild">
                <label> Sub-Title</label>
                <input  value={subTitle} 
                onChange={(e)=>setSubTitle(e.target.value)}
                placeholder={post.subTitle}/>
            </div>
            
            <div className="form-feild">
                <label> Content</label>
                <textarea  value={content} 
                onChange={(e)=>setContent(e.target.value)}
                placeholder={post.content} required> </textarea>
            </div>
            <button className="create-post-btn" type="submit">Update Post</button>
      </form>
      </div>
    
          );
      }
      
      export default Update;
      