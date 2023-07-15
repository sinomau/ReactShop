import React from 'react'
import Item from '../Item/Item'
import { memo } from 'react'

const ItemList = ({ products }) => {
    return(
        <div className='ListGroup'>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>    
    )
}

export default memo(ItemList)