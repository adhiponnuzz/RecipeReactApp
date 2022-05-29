import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Recipeentry = () => {
    var [title,setTitle]=useState("")
    var [category,setCategory]=useState("")
    var [description,setDescription]=useState("")
    var [preparedby,setPreparedby]=useState("")

    const subData=()=>{
        const data={"title":title,"category":category,"description":description,"preparedby":preparedby}
        console.log(data)

        axios.post("http://localhost:5000/api/recipeentry",data).then((Response)=>{
            console.log(Response.data)
            if(Response.data.status=="success")
            {
                alert("successfully added")
            }
            else
            {
                alert("failed to added")
            }
        })
    }
  return (
    <div>
        <Navbar/>

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
            <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Recipe Title</label>
                    <input onChange={(e)=>{setTitle(e.target.value)}} placeholder="Enter Recipe Title" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Category</label>
                    <input onChange={(e)=>{setCategory(e.target.value)}}  placeholder="Enter Category" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Description</label>
                    <textarea onChange={(e)=>{setDescription(e.target.value)}} placeholder="Enter Description" name="" id="" cols="30" rows="10" className="form-control"></textarea>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">PreparedBy</label>
                    <input onChange={(e)=>{setPreparedby(e.target.value)}} placeholder="Enter PreparedBy" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={subData} className="btn btn-primary">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div>




    </div>
  )
}

export default Recipeentry