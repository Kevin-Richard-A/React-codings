import React from 'react'
import './card.css'
import {Card,Button,Row, Container} from 'react-bootstrap'
const foods=[
    {
        id:1,
        name:'Idli',
        price:35,
        desc:'Idli is made using stream',
        img:'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/idli.jpg'
    },
    {
        id:2,
        name:'Dosa',
        price:45,
        desc:'Dosa is a savoury rice dish made from fermented lentils.',
        img:'https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa-500x500.jpg'
    },
    {
        id:3,
        name:'Puri',
        price:55,
        desc:'Chapathi is a savoury rice dish made wheat.',
        img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.chitrasfoodbook.com%2F2015%2F01%2Fhow-to-make-soft-chapatichapathi-recipe.html&psig=AOvVaw3yb1MBLOwDuT2K-l4FpiFs&ust=1652415067822000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJDrofyL2fcCFQAAAAAdAAAAABAD'
    },
    {
        id:4,
        name:'Paratha',
        price:65,
        desc:'Parotta is food of South Indian cuisine.',
        img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.outlookindia.com%2Foutlooktraveller%2Fexplore%2Fstory%2F70641%2Fdid-you-know-about-malabar-parotta&psig=AOvVaw2TRkNk36fHe6MGm_FEY6mE&ust=1652415129168000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMDI-piM2fcCFQAAAAAdAAAAABAD'
    },
 
]
function Cards() {
    const [counter,setCounter]=React.useState(0)
    const [color,setColor]=React.useState('')
    const handleIncrement=()=>{
        setCounter(counter+1)
    }
    const handleDecrement=()=>{
        setCounter(counter-1)
    }
    return (
        <>
        <h1>Combos</h1>
        <Container className='container'>
            <Row style={{gap:'80px'}}>
                {foods.map(food=>(
                    <>
                    <Card className='card' style={{width:'16rem'}}>
                        <Card.Img variant="top" className='image' src={food.img} />
                        <Card.Body>
                            <Card.Title>{food.name}</Card.Title>
                            <Card.Text>
                                {food.desc}
                            </Card.Text>
                            <Card.Text>
                                Price: {food.price}
                            </Card.Text>
                           
                        </Card.Body>
                    </Card>
                     </>
                ))}
                    

            </Row>
        </Container>
        <div style={{padding:'20px'}}>
        <button onClick={handleIncrement}>+</button>
        <button>Add to cart:{counter}</button>
        <button onClick={handleDecrement}>-</button>
        <h2>@ the price is just ₹150 only /-</h2>

        <p>Change color <p style={{color}}>{color}</p></p>
        
        <Button className='btn' onClick={()=>setColor('red')}>Red</Button>
        <Button className='btn' onClick={()=>setColor('blue')}>Blue</Button>
        <Button className='btn' onClick={()=>setColor('green')}>Green</Button>
        <Button className='btn' onClick={()=>setColor('orange')}>Orange</Button>
        </div>
        </>
    )



}


     
        
 
export default Cards
