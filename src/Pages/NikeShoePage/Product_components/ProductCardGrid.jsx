import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { bigShoe1, bigShoe2, bigShoe3 } from '../assets/images'
import { productNikeContext } from '../Nike_page'


/**
 * Responsive product card grid using MUI + Tailwind.
 * - Accepts `products` prop; falls back to dummy data with Nike assets.
 * - Intentional simple API so data can be swapped easily by parent.
 */
const DEFAULT_PRODUCTS = [
  { id: 'ava-rover', name: 'Nike Ava Rover', price: 129.99, tag: 'Just In', image: bigShoe1 },
  { id: 'shox-ride-2', name: 'Nike Shox Ride 2', price: 159.99, tag: 'Bestseller', image: bigShoe2 },
  { id: 'field-general', name: 'Nike Field General', price: 99.99, tag: 'Classic', image: bigShoe3 },
]

export default function ProductCardGrid({ products = DEFAULT_PRODUCTS }) {
  return (
    <section className='w-full box-border !px-6 !py-8'>
      <div className='!mb-4'>
        <h2 className='text-6xl font-semibold text-text-01'>Men's Shoes</h2>
        <p className='text-gray-600 text-lg'>Showing {products.length} products</p>
      </div>

      <Grid container spacing={2} >
        {products.map((p) => (
          <Grid key={p.id} item xs={12} sm={6} md={4}>
            <Card className='shadow-md hover:shadow-xl transition-all duration-300 rounded-lg overflow-hidden'>
              <CardMedia 
                component='img' 
                height='100' 
                image={p.image} 
                alt={p.name}
                className='object-contain bg-gray-50'
              />
              <CardContent className='!pb-2'>
                <div className='text-xs font-medium !mb-1' style={{ color: '#d1e91f' }}>{p.tag}</div>
                <Typography gutterBottom variant='h6' component='div' className='text-base'>
                  {p.name}
                </Typography>
                <Typography variant='body2' color='text.secondary' className='text-xs'>
                  Men's Shoes
                </Typography>
              </CardContent>
              <CardActions className='flex items-center justify-between !px-4 !pb-3 !pt-0'>
                <span className='font-semibold text-lg'>$ {p.price.toFixed(2)}</span>
                <Button size='small' variant='contained' sx={{
                  backgroundColor: '#01e5c8',
                  '&:hover': { backgroundColor: '#00cbb0' },
                  fontSize: '0.75rem',
                  padding: '6px 16px'
                }}>
                  Add to bag
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  )
}



