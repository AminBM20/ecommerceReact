import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Editcategorie = () => {
  const { id } = useParams(); // Récupérer l'id de la catégorie depuis l'URL
  const navigate = useNavigate();

  const [categorie, setCategorie] = useState({
    nomcategorie: '',
    imagecategorie: '',
  });

  // Charger les détails de la catégorie
  useEffect(() => {
    const fetchCategorie = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/categories/${id}`);
        setCategorie(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    fetchCategorie();
  }, [id]);

  // Gérer les modifications des champs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategorie({ ...categorie, [name]: value });
  };

  // Soumettre les modifications
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/api/categories/${id}`, categorie);
      alert('Catégorie mise à jour avec succès !');
      navigate('/categories'); // Retour à la liste des catégories
    } catch (error) {
      console.error('Erreur lors de la mise à jour:', error);
      alert('Une erreur est survenue.');
    }
  };

  return (
    <div>
      <h1>Modifier une catégorie</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nom de la catégorie :</label>
          <input
            type="text"
            className="form-control"
            name="nomcategorie"
            value={categorie.nomcategorie}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>URL de l'image :</label>
          <input
            type="text"
            className="form-control"
            name="imagecategorie"
            value={categorie.imagecategorie}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Update
        </button>
      </form>
    </div>
  );
};

export default Editcategorie;
