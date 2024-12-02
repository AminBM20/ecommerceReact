import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


const Insertscategorie = () => {
  const navigate=useNavigate()
const [scategorie,setScategorie]=useState({})
const handleSave=async(e)=>{
  try {
    e.preventDefault();
    const res= await axios.post("http://localhost:3001/api/scategories",scategorie).then(res=>{
      navigate("/scategories");
    })
  } catch (error) {
    console.log(error)
    
  }

}
  return (
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
    <Form>
   < Row className="mb-2">
  <Form.Group  as={Col} md="6">
    <Form.Label>Nom SCatégorie</Form.Label>
    <Form.Control type="text" value={scategorie.nomcsategorie} onChange={(e)=>setscategorie({...scategorie, nomscategorie:e.target.value})} />
  </Form.Group>
  <Form.Group  as={Col} md="6">
    <Form.Label>Image SCatégorie</Form.Label>
    <Form.Control
              type="text"
              value={scategorie.categorieID.imagecategorie}
              onChange={(e) =>
                setScategorie({
                  ...scategorie,
                  categorieID: {
                    ...scategorie.categorieID,
                    imagecategorie: e.target.value,
                  },
                })
              }
              placeholder="Entrez l'URL de l'image"
            />
  </Form.Group>
  </Row>
  <button className='btn btn-success btn-sm' onClick={(e)=>handleSave(e)}>Enregistrer</button>

  <Link to="/scategories"> 
   <button className='btn btn-danger btn-sm' ><i class="fa-solid fa-person-walking-dashed-line-arrow-right">Annuler</i></button>
   </Link>
  
</Form>

</div>
  )
}

export default Insertscategorie