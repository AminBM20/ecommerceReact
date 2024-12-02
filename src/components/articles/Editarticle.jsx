import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Editarticle = () => {
  const { id } = useParams(); // Get the article ID from the URL
  const [article, setArticle] = useState({
    designation: '',
    imageart: '',
    marque: '',
    prix: '',
    qtestock: '',
    reference: '',
  });
  const navigate = useNavigate();

  // Fetch article details
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/api/articles/${id}`);
        setArticle(res.data);
      } catch (error) {
        console.error('Error fetching article data:', error);
      }
    };
    fetchArticle();
  }, [id]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setArticle({ ...article, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/api/articles/${id}`, article);
      alert('Article updated successfully!');
      navigate('/articles'); // Navigate back to the articles list
    } catch (error) {
      console.error('Error updating article:', error);
      alert('Failed to update the article.');
    }
  };

  return (
    <div>
      <h1>Edit Article</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Designation:</label>
          <input
            type="text"
            className="form-control"
            name="designation"
            value={article.designation}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Image URL:</label>
          <input
            type="text"
            className="form-control"
            name="imageart"
            value={article.imageart}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Marque:</label>
          <input
            type="text"
            className="form-control"
            name="marque"
            value={article.marque}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Prix:</label>
          <input
            type="number"
            className="form-control"
            name="prix"
            value={article.prix}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Stock:</label>
          <input
            type="number"
            className="form-control"
            name="qtestock"
            value={article.qtestock}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Reference:</label>
          <input
            type="text"
            className="form-control"
            name="reference"
            value={article.reference}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Update</button>
      </form>
    </div>
  );
};

export default Editarticle;
