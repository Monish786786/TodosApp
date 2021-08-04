import React from 'react'
import axios from 'axios'
import { Button} from 'react-bootstrap';

class CustomersData1 extends React.Component {
    constructor() {
        super() 
        //we have declared the state over here
        this.state = {
            customers:[],
            pageno:[],
            currentpage:1
        }
    }
//we are fetching the data in the fetchData function
 fetchdata = ()=>{
    axios.get(`https://reqres.in/api/users?page=${this.state.currentpage}` 
    )
  .then(response => {

      console.log(response.data, "Real data")  
      const customers = response.data
      // let page=response.data.data.length/6
      // console.log(page, "page")
      
      console.log(customers, "yyy")
      this.setState({customers:customers})
      
//declaring the buttons over her accotding to the pages
  let buttons = []
  for(let i=0; i<response.data.total_pages; i++){
      buttons.push(`page ${i+1}`)
     
  }
  this.setState({pageno:buttons})
  })
}    

    componentDidMount() {
        this.fetchdata()   
        
    }

//fetching up of the more data as of the next page
fetchmoreData=(index)=>{
    console.log(this.state.currentpage, "index123")
this.setState({currentpage:index+1})
console.log(this.state.currentpage, "index12345")
this.fetchdata() 
}
   

    render() {

        //rendering is taking place
       console.log(this.state.customers.data, "Monish")
       console.log(this.state.pageno, "tyu")
        
        return (
           
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>name</th>
                            <th>email</th>
                            
                        </tr>
                    </thead>
                    <tbody>

                    
                        {
                            this.state.customers.length !==0 && this.state.customers.data.map((customer,i)=>{
                                return(
                                <tr>
                                    
                                <td>{customer.id}</td>
                                <td>{customer.first_name}</td>
                                <td>{customer.email}</td>
                                
                        
                                    </tr>
                                )
                            
                                })
                            
                            }
                        
                    </tbody>
                   
                </table>
                <p></p>
               
               {
                   this.state.pageno.map((button, index)=>{
                       return(
                           <Button onClick={()=>{this.fetchmoreData(index)}}>{button}</Button>
                       )
                   })
               }
               
                
            </div>
        )
    }
}

export default CustomersData1