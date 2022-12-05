import React from "react";

function PopupPage(props) {

  const titleRef = React.useRef()
  const DescRef =React.useRef()
  const imageRef =React.useRef()
  const onSubmitHandle=(e)=>
  {
    e.preventDefault();
    
    props.addContent(titleRef.current.value,DescRef.current.value,imageRef.current.value)


   
  }

     
  return (
    <>
    <div style={{display:'flex', flexDirection:'column'}}>
      <form onSubmit={onSubmitHandle}>
        <nav style={{ display: "flex", marginLeft: "40%" }}>
          <button 
            type="submit"
            style={{
              marginLeft: "30%",
              backgroundColor: "green",
              padding: "10px 20px",
              color: "#fff",
            }}
          >
            Save
          </button>
          <hr />
        </nav>
        <div className="form-section">
          <div>
            <h2>Title</h2>
            <input ref={titleRef} type="input" style={{ padding: "20px", width: "35%" }} />
          </div>
          <div>
            <h2>Description</h2>
            <textarea
             ref={DescRef}
              type="input"
              style={{ padding: "20px", width: "35%", height: "200px" }}
            />
          </div>
          <input ref={imageRef} type="file" style={{ padding: "20px", width: "35%" }} />
        </div>
      </form>

      </div>
    </>
  );
}

export default PopupPage;
