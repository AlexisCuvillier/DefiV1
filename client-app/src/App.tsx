import React, { useEffect, useState } from 'react';

import './App.css';
import axios from 'axios';
import { Header, Table } from 'semantic-ui-react';
// import Search from "./components/search"

function App() {
  const[persons, setPersons] = useState([])

  const[searchPersons, setSearchPersons] = useState("");



  useEffect(() => {
    axios.get('https://localhost:7298/api/persons').then(response =>
    {
      console.log(response);
      setPersons(response.data);
    })
  }, [])

  const handleSearchTerm = (e : any) => {
    //  console.log(e.target.value)
        let value = e.target.value;
        setSearchPersons(value);
      }

  
  console.log(searchPersons)

  // const sentence = "Hello World!"; 
  // const toLower = sentence.toLowerCase();

  // console.log(toLower);

  return (
   
    <div>
         {/* <Search/> */}

  
      <Header as ='h2' icon='users' content='DefiStage' />

      <div className="searchBar">
            <input 
                type="text" 
                name="serachBar" 
                id = "searchBar" 
                placeholder ="Rechercher" 
                onChange={handleSearchTerm}
            />
        </div>
      <Table celled>
        <Table.Header className ="Toz">
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>LastName</Table.HeaderCell>
              <Table.HeaderCell>Mail</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
       
        {persons.filter((val : any) => {
          return val.name.toLowerCase().includes(searchPersons.toLowerCase()) ||
                 val.lastName.toLowerCase().includes(searchPersons.toLowerCase()) ||
                 val.mail.toLowerCase().includes(searchPersons.toLowerCase())
                

        }).map((val: any) => (
            <Table.Row key={val.id}>
              <Table.Cell>{val.name}</Table.Cell>
              <Table.Cell>{val.lastName}</Table.Cell>
              <Table.Cell>{val.mail}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

      </Table>



    </div>
  );
}

export default App;
