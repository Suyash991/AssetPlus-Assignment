import React from 'react';
import Navbar from './Navbar';
import Content from './Content';
import PopupPage from './PopupPage';

export default function ContentGallery() {
    const [content,setContent]=React.useState([])
    const addContent=(titleRef,DescRef,imageRef)=>
    {
        const newContent={
            title:titleRef,
            Desc:DescRef,
            poster:imageRef
        }
        console.log(newContent)
         setContent([...content,newContent])
    }

    console.log(content)
    return(
    <>
     <Navbar content={content}/>
    
     <PopupPage addContent={addContent}/>
     <Content content={content}/>
    </>
    )}