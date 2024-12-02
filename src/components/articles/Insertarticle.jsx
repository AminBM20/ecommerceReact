import axios from 'axios'
import React, { useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom'

const Insertarticle = () => {

  const navigate=useNavigate()
  const [article,setArticle]=useState({})
  const handleSave=async(e)=>{
    try {
      e.preventDefault();
      axios.post("http://localhost:3001/api/articles",article).then(res=>{
        navigate("/articles");
      })
    } catch (error) {
      console.log(error)
     
    }

  }

  return (
    <div>
        <Form>
        <Row className='mb-2'>
      <Form.Group as={Col} md="6">
        <Form.Label>Marque</Form.Label>
        <Form.Control type="text" value={article.marque} onChange={(e)=>setArticle({...article, marque:e.target.value})} />
      </Form.Group>
      <Form.Group as={Col} md="6">
        <Form.Label>designation</Form.Label>
        <Form.Control type="text" value={article.designation} onChange={(e)=>setArticle({...article, designation:e.target.value})} />
      </Form.Group>
      </Row>
      <Row className='mb-2'>
      <Form.Group as={Col} md="6">
        <Form.Label>imageart</Form.Label>
        <Form.Control type="text" value={article.imageart} onChange={(e)=>setArticle({...article, imageart:e.target.value})} />
      </Form.Group>
      <Form.Group as={Col} md="6">
        <Form.Label>prix</Form.Label>
        <Form.Control type="text" value={article.prix} onChange={(e)=>setArticle({...article, prix:e.target.value})} />
      </Form.Group>
      </Row>
      <Row className='mb-2'>
      <Form.Group as={Col} md="6">
        <Form.Label>qtestock</Form.Label>
        <Form.Control type="text" value={article.qtestock} onChange={(e)=>setArticle({...article, qtestock:e.target.value})} />
      </Form.Group>
      <Form.Group as={Col} md="6">
        <Form.Label>reference</Form.Label>
        <Form.Control type="text" value={article.reference} onChange={(e)=>setArticle({...article, reference:e.target.value})} />
      </Form.Group>
      </Row>
      <button className='btn btn-sm btn-success' onClick={(e)=>handleSave(e)}>Enregistrer</button>
      <button className='btn btn-sm btn-danger'>Annuler</button>
     
    </Form>

    </div>
  )
}

export default Insertarticle