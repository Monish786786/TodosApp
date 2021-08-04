
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import './App.css';
import TodosApp from './component/todos';
import CustomersData  from './component/users';
import { Button} from 'react-bootstrap';

function App() {
  return (
    <div style={{ 
      backgroundImage: `url("https://www.shutterstock.com/image-vector/software-web-development-programming-concept-abstract-1122339353")` 
    }}>
    <BrowserRouter>
    <Button variant="outline-success"><Link to="/todos">Todos App
    </Link></Button>
    <br></br>
    <Button variant="outline-success"><Link to="/customers">Customers List</Link></Button>

    <Switch>
    <Route path="/todos" component={TodosApp} exact={true} />

    
    <Route path="/customers" component={CustomersData} exact={true} />

    </Switch>
    </BrowserRouter>
    </div>
    // <div className="App">
    //  {/* <TodosApp/> */}
    //  <CustomerList/>
    // </div>
  );
}

export default App;
