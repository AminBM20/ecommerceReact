import axios from 'axios'
import { Button } from 'bootstrap'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Listscategories = () => {
  const [scategories,setScategories]=useState([])
  const fetchscategories=async()=>{
    await axios.get("http://localhost:3001/api/scategories").then(res=>{
      setScategories(res.data)
      console.log(res.data)
    })
   .catch(error=>{
    console.log(error)
    
   }) 
  }
  useEffect(()=>{
    fetchscategories()
  },[])

  const handleDelete=async(id)=>{
    if(window.confirm(`Etes vous sur de supprimer !`)){
    await axios.delete(`http://localhost:3001/api/scategories/${id}`).then(res=>{
      setScategories(scategories.filter(scat=>scat._id!=id))
    }).catch(error=>{
      console.log(error)
    })
  }
  }
  
  return (
    <div>
      <br/> <br/>
      <Link to="/scategories/add"><button className='btn-success btn-sm'><i class="fa-solid fa-plus"></i>Ajouter</button></Link> 
        <h1>Afficher Scategorie</h1> <br/>  <br/> 
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Nom Scatégorie</th>
              <th>Image Scatégorie</th>
            </tr>
          </thead>
          <tbody>
            {scategories.map((scat,index)=>
            <tr key={index}>
              <td>
                {scat.nomscategorie}
              </td>
              <td>
                <img src={scat.imagescategorie} width="150" height="100"/>
              </td>
              <td>
  <Link to={`/scategories/edit/${scat._id}`}>
    <button className="btn btn-sm btn-warning">
      <i className="fa-solid fa-pen-to-square"></i> Update
    </button>
  </Link>
</td>

              <td>
              <button className='btn btn-sm btn-danger' onClick={()=>handleDelete(scat._id)}><i class="fa-solid fa-trash"></i>Delete</button>
              </td>
            </tr>
            )}
          </tbody>
            

        </table>   
    </div>
  )
}

export default Listscategories