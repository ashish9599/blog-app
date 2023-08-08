import { useEffect, useState } from "react";
import{Link} from 'react-router-dom'
import { firestore } from "../firebase";
import { toast } from "react-toastify";
function Home() {
    useEffect(()=>{
        document.title="Blogs"
       },[])
    const [posts,setPosts]=useState([]);
useEffect(()=>{
firestore
.collection('posts').get().then((snapshot)=>{
const posts=snapshot.docs.map((doc)=>{
  return {
    id:doc.id,
    ...doc.data()
}
})
    setPosts(posts);
})
},[])

const handleDelete=(postId)=>{
    firestore.collection('posts').doc(postId).delete()
    .then(()=>{
        toast.success("Post has been deleted");
    }).catch((err)=>{
        toast.error(err);
    })
  const newpost = posts.filter((post)=>post.id!=postId);
  setPosts(newpost);
  }

    return (
      
      <div className='home'>
        <h1>Tech Blog</h1>
        <div id="blog-by">
            {posts.map((post,index)=>(
                <div className="post" key={`post-${index}`}>
                   <div>

                 <Link to={`/post/${post.id}`}>

                    <h3>{post.title}</h3>
                 </Link>
                 <p>{post.subTitle}</p>
                   </div>
                 <div className="removeUpd">
                    <Link to={`/update/${post.id}`}>

                 <i className="fa-sharp fa-regular fa-pen-to-square"></i>
                    </Link>
                 <i className="fa-sharp fa-solid fa-trash" onClick={()=>handleDelete(post.id)}></i>
                 </div>
                </div>
            ))}
        </div>
    
      </div>
    
          );
      }
      
      export default Home;
      