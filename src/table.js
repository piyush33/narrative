import {useEffect, useState} from "react";
import { getTable } from "./api";


const Table = () =>{
    const [newTable, setNewTable] = useState([]);
    const [table, setTable] = useState([]);
    const [map, setMap] = useState(false);

    const getTableApi = () => {
        getTable()
          .then((data)=>{
           setTable(data);
          })         
    }


    let databaseStructure = { name: String, class: String, school: String, location: String } 

    

    const csvTool = () => {

        if(newTable.length!==0){
            setNewTable([]);
        }
        table.forEach((item) => {
            
            setNewTable((prev) => [...prev, { name: `${item.firstName} ${item.lastName}`, class: item.class1, school: item.school, location: item.location}])
            setNewTable((prev) => [...prev, { name: `${item.firstName} ${item.lastName}`, class: item.class2, school: item.school, location: item.location}])
               
      })
      setMap(!map);
    }


    useEffect(()=>{
        getTableApi();  
    },[])

    useEffect(()=>{
        // csvTool();
    },[table])

    console.log("table:",table);

    return(
        <>
        <div>
            <button onClick={csvTool}>Map to database</button>
        </div>
       {!map && 
        <table>
           <thead>
            <tr>
              <th> firstName </th>
              <th> lastName </th>
              <th> class1 </th>
              <th>class2</th>
              <th> school </th>
              <th> location </th>

           </tr>
           </thead>
          <tbody>
          {table.map((item) => {
            return (
              <tr>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td> {item.class1} </td>
                <td> {item.class2} </td>
                <td>{item.school} </td>
                <td>{item.location} </td>
              </tr>
            );
          })}
          </tbody>
         </table>
        }
        {map &&
          <table>
           <thead>
            <tr>
              <th> name </th>
              <th> class </th>
              <th> school </th>
              <th> location </th>

           </tr>
           </thead>
          <tbody>
          {newTable.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td> {item.class} </td>
                <td>{item.school} </td>
                <td>{item.location} </td>
              </tr>
            );
          })}
          </tbody>
         </table>
         }
        </>
    );
}

export default Table;

