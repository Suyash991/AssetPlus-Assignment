import React from "react";

function Content(props) {
  console.log(props.content.length)
  if(props.content.length >0)
  {
  return <div>
  { 
  props.content.map((ele)=>{
    console.log(ele.title)
    return (
  <div>
       <h1>Content</h1>
    <div style={{display:'flex', gap:'60px',flexWrap:'wrap'}}>
      <div style={{display:'flex',marginTop:'50px'}}>
     
         <img className="content-img" style={{width:'500px'}}
          src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvb2t8ZW58MHx8MHx8&w=1000&q=80"
          alt=""
        /> 
        <div className="content-text" style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                  
       <div>
        <h3 style={{wordWrap:'break-word'}}>{ele.title}</h3>
        
      </div>
        
        <p> 3/4/2012</p>
        </div>
      </div>
      
      </div>
    </div>)})  
  }
    </div>
    }
  else
{
  return <div>Please add something</div>
}

}

export default Content;
