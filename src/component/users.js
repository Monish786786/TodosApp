import React from 'react'

import CustomersData1 from '../user-pages/user-page1';
import CustomersData2 from '../user-pages/user-page2';

class CustomersData extends React.Component {
    // constructor() {
    //     super() 
    //     this.state = {
    //         customers:[]
    //     }
    // }

    

    // componentDidMount() {
    //     axios.get('https://reqres.in/api/users?page=1' 
    //       )
    //     .then(response => {
    //         console.log(response.data, "Real data")
    //         const customers = response.data
    //         this.setState({customers})
    //     })
    // }


 handleClickPage1=()=>{
    <CustomersData1/>
}
   
handleClickPage2=()=>{
    <CustomersData2/>
}

    render() {
       
        
        return (

            // <BrowserRouter>
            //   <Link to='/page1'><Button variant="secondary">Page 1</Button></Link>  
            //     <Link to='/page2'><Button variant="secondary" >Page 2</Button></Link>


            //     <Route path="/page1" component={CustomersData1} exact={true}/>
            //     <Route path="/page2" component={CustomersData2} exact={true}/>

            // </BrowserRouter>
            <>
            <CustomersData1/>
            </>
               
               
                
            
        )
    }
}

export default CustomersData