import React, { useState } from "react";
import { Card, Container, Button, CardGroup, Row, Pagination } from "react-bootstrap";
import { userAPI } from "../../api/api";
import userPhoto from "../../photo/users.png"

const Users = (props) => {
  // const [follow, setFollow] = useState(props.users.followed)
  
  const portionSize = 10
  

  const pageNumber = Math.ceil(props.usersCount/props.pageSize)
  let pages =[];
 

  const [portionNumber, setPortionNumber] = useState(1)
 let leftPage = (portionNumber - 1)* portionSize
 let rightPage = portionSize * portionNumber
 

 const portionCount = Math.ceil(pageNumber/portionSize)

  for(let i = 1; i < pageNumber; i++ ) {
    pages.push(i)
  }
 debugger
  return <div>
    <Container>
    <Pagination  >
    {portionNumber > 1 &&  <Pagination.First onClick={()=>{setPortionNumber(1)}}/>} 
      {portionNumber > 1 &&  <Pagination.Prev onClick={()=>{ setPortionNumber(portionNumber - 1)}}  />}
     

      {pages.filter( pa=> pa >= leftPage && pa <= rightPage ).map(p=> {
        
        return <Pagination.Item key={p} active={p === props.currentPage} onClick={()=>{props.onCurrentPage(p)}}>{p}</Pagination.Item>
       
        
      })}
       {portionCount > portionNumber  &&  <Pagination.Next  onClick={()=>{ setPortionNumber(portionNumber + 1)}} />}
       {portionCount > portionNumber  &&   <Pagination.Last onClick={()=>{ setPortionNumber( portionCount )}}/> }
      </Pagination>
    <Row xs={1} md={5} className="g-4">

      {props.users.map(u =>
        <div key={u.id}>

        
          <Card className="d-grid" style={{ width: '14rem' }}>
            <Card.Img  variant="top" src={ u.photos.large || userPhoto} />
            <Card.Body>
              <Card.Title>User Card</Card.Title>
              <Card.Text>
                Name: {u.name}
              </Card.Text>
              {u.followed ? <Button onClick={()=> {props.users.followed(false)}} variant="primary">follow</Button> : <Button onClick={()=>{props.users.followed(true)}} variant="primary">unfollow</Button>}
              
            </Card.Body>
          </Card>
        </div>
      )}
      </Row>
    </Container>


  </div>
}

export default Users