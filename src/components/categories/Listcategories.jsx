import axios from 'axios'
import { Button } from 'bootstrap'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Listcategories = () => {

  const [isLoading,setIsLoading]=useState(true)
  const [categories,setCategories]=useState([])
  const fetchcategories=async()=>{
    await axios.get("http://localhost:3001/api/categories").then(res=>{
      setCategories(res.data)
      console.log(res.data)
      setIsLoading(false)
    })
   .catch(error=>{
    console.log(error)
    
   }) 
  }
  useEffect(()=>{
    fetchcategories()
  },[])

  const handleDelete=async(id)=>{
    if(window.confirm(`Etes vous sur de supprimer !`)){
    await axios.delete(`http://localhost:3001/api/categories/${id}`).then(res=>{
      setCategories(categories.filter(cat=>cat._id!=id))
    }).catch(error=>{
      console.log(error)
    })
  }
  }
  if(isLoading){
    return (
      <div>En cours de chargement !</div>
    )
  }
  return (
    <div>
      <br/> <br/>
      <Link to="/categories/add"><button className='btn-success btn-sm'><i class="fa-solid fa-plus"></i>Ajouter</button></Link> 
        <h1>Afficher categorie</h1> <br/>  <br/> 
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Nom catégorie</th>
              <th>Image</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat,index)=>
            <tr key={index}>
              <td>
                {cat.nomcategorie}
              </td>
              <td>
                <img src={cat.imagecategorie} width="150" height="100"/>
              </td>
              <td>
  <Link to={`/categories/edit/${cat._id}`}>
    <button className="btn btn-sm btn-warning">
      <i className="fa-solid fa-pen-to-square"></i> Update
    </button>
  </Link>
</td>

              <td>
              <button className='btn btn-sm btn-danger'onClick={()=>handleDelete(cat._id)} ><i class="fa-solid fa-trash"></i>Delete</button>
              </td>
            </tr>
            )}
          </tbody>
            

        </table>   
    </div>
  )
}

export default Listcategories