import axios from "axios"
import { useEffect,useState } from "react"
import {useParams} from 'react-router-dom'
import {Container,Jumbotron,Row,Spinner} from 'reactstrap'



function Profil(){
    const [listOfUser,setListOfUser]=useState([])
    const [loading,setLoading]=useState(true)
    const {userId}=useParams()
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(res=>setListOfUser(res.data))
        .then(res=>setLoading(false))
        .catch(err=>console.log(err))
    },[])

    return (
        <>
        { <> {loading ? <Spinner color="primary" />:
          <Container>
          <Jumbotron>
            <Row className="d-flex justify-content-center align-items-center">
              <p
                style={{
                  width: "80px",
                  height: "80px",
                  fontSize: "1em"
                }}
                className="d-flex justify-content-center align-items-center mr-auto border rounded-circle text-light bg-info text-md"
              >                            
               {listOfUser.name[0]}
              </p>    
              <h1 className="display-3 col">{listOfUser.name}</h1>
              <p className="lead text-center col"> 
                {listOfUser.address.street}<br/>
                {listOfUser.address.suite}<br/>
                {listOfUser.address.city}<br/>
                {listOfUser.address.zipcode}<br/>
                <br/><br/><br/><br/>
                {listOfUser.company.name}<br/>
                {listOfUser.company.catchPhrase}<br/>
                {listOfUser.company.bs}<br/>
              </p>
            </Row>
          </Jumbotron>
        </Container> 
  }
      </>
        }
        </>
        
    )

}


export default Profil