import React ,{useState,useEffect} from 'react'
import axios from 'axios'

export default ({postID})=>{
    
    const [comment,setComment]=useState([])

    const fetchData=async()=>{
        const res=await axios.get(`http://localhost:4001/posts/{$postID}/comments`)
        setComment(res.data);
    }

    useEffect(()=>{
        fetchData()
    },[])


    const  renderComments=comment.map(element=>{
        return (<li key={element.id}>{element.content}</li>)
    })

    return (
        <ul>
            {renderComments}
        </ul>
    )


}