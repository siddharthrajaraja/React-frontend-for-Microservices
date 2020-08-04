import React /*,{useState,useEffect}*/ from 'react'
//import axios from 'axios'

export default ({/*postID*/ comments})=>{
    
    // No use as we have Microservice ------
    /*const [comment,setComment]=useState([])

    const fetchData=async()=>{
        const res=await axios.get(`http://localhost:4001/posts/${postID}/comments`)
        setComment(res.data);
    }

    useEffect(()=>{
        fetchData()
    },[])

    */

    const  renderComments=comments.map(element=>{
        let content;
        if(element.status=='approved'){
            content=element.content
        }
        if(element.status==='pending'){
            content='This comment is under moderation';
        }
        if(element.status==='rejected'){
            content='This comment has been rejected'
        }
        
        return (<li key={element.id}>{content}</li>)
    })

    return (
        <ul>
            {renderComments}
        </ul>
    )


}