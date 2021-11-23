import React from 'react'
import "./search.css"
import { useEffect, useState } from 'react';
import axios from 'axios';

// function Search(){

//     const[persons, setPersons] = useState([]);
//     const[searchPersons, setSearchPersons] = useState("");

//     useEffect(() => {
//         axios.get('https://localhost:7298/api/persons').then(response =>
//         {
//          // console.log(response);
//           setPersons(response.data);
//         })
//       }, [])

//     // console.log(persons)
//       const handleSearchTerm = (e : any) => {
//       //console.log(e.target.value)
//         let value = e.target.value;
//         setSearchPersons(value);
//       }

//       console.log(searchPersons)
//     return (
//     <>
//         <div className="searchBar">
//             <input 
//                 type="text" 
//                 name="serachBar" 
//                 id = "searchBar" 
//                 placeholder ="Rechercher" 
//                 onChange={handleSearchTerm}
//             />
//         </div>
   
//         {/* <div className="search_results">
//             {persons.filter((val :any) => {
//                 return val.name.includes(searchPersons)

//             }).map((val : any) => {
//             return <div className="search_result" key ={val.id}>
//                 {val.name}
//             </div>
//             })}
       
//         </div>  */}
//     </>
//     )
// }

// export default Search;