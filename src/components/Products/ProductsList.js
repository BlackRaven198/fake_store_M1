import React from 'react';
import {Grid} from '@material-ui/core';
import Items from './Items/Items'

import useStyles from './ProductListStyles'

const items = [
    {id: 1, name: "Old Ass Shoe", description: "running shoes", price: "$5", image: 'https://i.guim.co.uk/img/media/f293e1dde4a0db207ade95e131ef792eb7f0f460/107_0_1799_1080/master/1799.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=f796e959f803b4bc92df47639f091957'},
    {id: 2, name: "Macbook", description: "Apple Macbook", price: "$10", image: 'https://techcrunch.com/wp-content/uploads/2016/10/img_2562.jpg?resize=2048,1365'},

];

const ProductsList = () => {

    return (
        <main>
            <Grid container justify="center" spacing={4} image={items.image}>
                {items.map((items) => (
                        <Grid item key= {items.id} xs={12} sm={6} md={4} lg={3}>
                        <Items items={items} />
                    </Grid>
                ))}
                
            </Grid>
        </main>
    )
}


export default ProductsList;