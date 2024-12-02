import axios from 'axios'
import { Button } from 'bootstrap'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Listarticles = () => {
  const [articles,setArticles]=useState([])
  const fetcharticles=async()=>{
    await axios.get("http://localhost:3001/api/articles").then(res=>{
      setArticles(res.data)
      console.log(res.data)
    })
   .catch(error=>{
    console.log(error)
    
   }) 
  }
  useEffect(()=>{
    fetcharticles()
  },[])

  const handleDelete=async(id)=>{
    if(window.confirm(`Etes vous sur de supprimer !`)){
    await axios.delete(`http://localhost:3001/api/articles/${id}`).then(res=>{
      setArticles(articles.filter(art=>art._id!=id))
    }).catch(error=>{
      console.log(error)
    })
  }
  }
  
  return (
    <div>
      <br/> <br/>
      <Link to="/articles/add"><button className='btn-success btn-sm'><i class="fa-solid fa-plus"></i>Ajouter</button></Link>
        <h1>Afficher Articles</h1> <br/>  <br/> 
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Designation article</th>
              <th>Image article</th>
              <th>Marque article</th>
              <th>Prix article</th>
              <th>Stock article</th>
              <th>Reference article</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((art,index)=>
            <tr key={index}>
              <td>
                {art.designation}
              </td>
              <td>
                <img src={art.imageart} width="150" height="100"/>
              </td>
              <td>

                {art.marque}
              </td>
              <td>
                {art.prix}
              </td>
              <td>
                {art.qtestock}
              </td>
              <td>
                {art.reference}
              </td>

              <td>
  <Link to={`/articles/edit/${art._id}`}>
    <button className="btn btn-sm btn-warning">
      <i className="fa-solid fa-pen-to-square"></i> Update
    </button>
  </Link>
</td>
              <td>
              <button className='btn btn-sm btn-danger' onClick={()=>handleDelete(art._id)}><i class="fa-solid fa-trash"></i>Delete</button>
              </td>
            </tr>
            )}
          </tbody>
            

        </table>   
    </div>
  )
}

export default Listarticles