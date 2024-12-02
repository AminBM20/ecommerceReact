
import axios from 'axios'
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom'

const Insertcategorie = () => {

  const navigate=useNavigate()
  const [categorie,setCategorie]=useState({})
  const handleSave=async(e)=>{
    try {
      e.preventDefault();
      axios.post("http://localhost:3001/api/categories",categorie).then(res=>{
        navigate("/categories");
      })
    } catch (error) {
      console.log(error)
     
    }

  }

  return (
    <div>
        <Form>
      <Form.Group className="mb-3">
        <Form.Label>Nom Catégorie</Form.Label>
        <Form.Control type="text" value={categorie.nomcategorie} onChange={(e)=>setCategorie({...categorie, nomcategorie:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Image Catégorie</Form.Label>
        <Form.Control type="text" value={categorie.imagecategorie} onChange={(e)=>setCategorie({...categorie, imagecategorie:e.target.value})} />
      </Form.Group>
      <button className='btn-success btn-sm' onClick={(e)=>handleSave(e)}>Enregistrer</button>
      <button className='btn-danger btn-sm'>Annuler</button>
     
    </Form>

    </div>
  )
}

export default Insertcategorie