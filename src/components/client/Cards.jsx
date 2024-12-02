
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useShoppingCart } from 'use-shopping-cart';

const Cards = ({article}) => {
  const {addItem} = useShoppingCart()
  
  const addToCart=(product)=>{
    const target = {
      id : product._id,
      title : product.designation,
      image: product.imageart,
      price : product.prix,
      qtestock : product.qtestock,
      quantity : 1
    };
    
    addItem(target);
    console.log("Item added to cart : ", target);
  }
  return (
    <div>
      <hr/>
      <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 180 }}
        image={article.imageart}
        title={article.reference}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {article.reference}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Prix : {article.prix} DT
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" onClick={()=>addToCart(article)} >Add to Card &nbsp; <i class="fa-solid fa-cart-shopping"></i></Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default Cards