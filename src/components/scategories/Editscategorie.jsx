import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Editscategorie = () => {
  const { id } = useParams(); // Récupère l'ID de la scatégorie depuis l'URL
  const [scategorie, setScategorie] = useState({
    nomscategorie: '',
    imagescategorie: '',
  });
  const navigate = useNavigate();

  // Charger les données de la scatégorie
  useEffect(() => {
    const fetchScategorie = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/scategories/${id}`);
        setScategorie(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération de la scatégorie :', error);
      }
    };
    fetchScategorie();
  }, [id]);

  // Gestion des changements dans le formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setScategorie({ ...scategorie, [name]: value });
  };

  // Soumettre le formulaire pour mettre à jour la scatégorie
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/api/scategories/${id}`, scategorie);
      alert('Sous-catégorie mise à jour avec succès !');
      navigate('/scategories'); // Retour à la liste des scatégories
    } catch (error) {
      console.error('Erreur lors de la mise à jour :', error);
      alert('La mise à jour a échoué.');
    }
  };

  return (
    <div>
      <h1>Modifier la Sous-Catégorie</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nom de la sous-catégorie :</label>
          <input
            type="text"
            className="form-control"
            name="nomscategorie"
            value={scategorie.nomscategorie}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>URL de l'image :</label>
          <input
            type="text"
            className="form-control"
            name="imagescategorie"
            value={scategorie.imagescategorie}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Update</button>
      </form>
    </div>
  );
};

export default Editscategorie;
