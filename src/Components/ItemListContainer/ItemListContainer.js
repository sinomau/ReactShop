import React from 'react'
import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase'
import Swal from 'sweetalert2'

const ItemListContainer = ({ greeting  }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
       
        const collectionRef = categoryId 
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')

        getDocs(collectionRef).then(response => {
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data }
            })

            setProducts(productsAdapted)

        }).catch(error => {
            Swal.fire({
                title: {error},
                icon: "warning",
                buttons: true,
                dangerMode: true,
        
            });
        }).finally(() => {
            setLoading(false)
        })  
    }, [categoryId])


    if(loading) {
        return <h1>Cargando productos...</h1>
    }

    return (
        <div className='itemContainer'>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer
