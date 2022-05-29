import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Search = () => {
    const deleteapicall=(id)=>{
        const data={"_id":"id"}
        console.log(data)
        axios.post("http://localhost:5000/api/delete",data).then((Response)=>{
            if(Response.data.status=="success")
            {
                alert("successfully deleted")
            }
            else{
                alert("error in deletion")
            }
        })
    }
    var [title,setTitle]=useState("")
    const [data,setData]=useState([{"category":"","description":"","preparedby":""}])
    const subData=()=>{
        const data={"title":title}
        console.log(data)

      axios.post("http://localhost:5000/api/search",data).then((Response)=>{
          console.log(Response.data)
          setData(Response.data)
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
                    <input onChange={(e)=>{setTitle(e.target.value)}} placeholder="Enter RecipeTitle" type="text" className="form-control"/>

                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={subData} className="btn btn-primary">SEARCH</button>
                </div>
            </div>
            {data.map((value,key)=>{
                return <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Category</label>
                    <input value={value.category} type="text" className="form-control"/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Description</label>
                    <input value={value.description}  type="text" className="form-control"/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">PreparedBy</label>
                    <input value={value.preparedby} type="text" className="form-control"/>

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={()=>{deleteapicall(value._id)}} className="btn btn-danger">DELETE</button>
                </div>
                        
                        



                </div>
            })}
        </div>
    </div>
</div>


    </div>
  )
}

export default Search