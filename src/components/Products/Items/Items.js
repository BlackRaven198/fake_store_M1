import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/core'
import useStyles from './styles'

const Items = ({items}) => {
    const classes=useStyles()
    return ( 
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={items.image} title={items.name}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {items.name}
                    </Typography>
                    <Typography variant="h5">
                        {items.price}
                    </Typography>
                    <Typography variant="h2" color='textSecondary'>
                        {items.description}
                    </Typography>
                </div>
                
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart"></IconButton>
            </CardActions>

        </Card>
    )
}

export default Items
