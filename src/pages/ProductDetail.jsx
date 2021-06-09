import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router'
import { Card,Image,Button } from 'semantic-ui-react';
import ProductService from '../services/productService'

export default function ProductDetail() {
    
    //  let {id} = useParams() // bu fonksiyon parametreleri object olarak verir !!
    let { name } = useParams();
    //{id:id} iki tarafta aynı ise tek yazılır {id} gibi.

    const [product, setProduct] = useState({});

    useEffect(()=>{
      let productService = new ProductService()
      productService.getByProductName(name).then(result=>setProduct(result.data.data))
    },[])


    return (
        <div>
            <Card.Group>                
                <Card>                    
                    <Card.Content>
                        <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'/>
                        <Card.Header>{ product.productName }</Card.Header>
                        <Card.Meta>{ product.category.categoryName }</Card.Meta>
                        <Card.Description>
                            Steve wants to add you to the group <strong>best friends</strong>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Approve
                            </Button>
                            <Button basic color='red'>
                                Decline
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    )
}
