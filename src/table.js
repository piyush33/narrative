import {useEffect, useState} from "react";
import { getTable } from "./api";


const Table = () =>{
    const [newTable, setNewTable] = useState([]);
    const [table, setTable] = useState([]);

    const getTableApi = () => {
        getTable()
          .then((data)=>{
           setTable(data);
          })         
    }


    let databaseStructure = { name: String, class: String, school: String, location: String } 

    

    const csvTool = () => {

        table.forEach((item) => {
            
            setNewTable((prev) => [...prev, { name: `${item.firstName} ${item.lastName}`, class: item.class1, school: item.school, location: item.location}])
            setNewTable((prev) => [...prev, { name: `${item.firstName} ${item.lastName}`, class: item.class2, school: item.school, location: item.location}])
               
      })
    }


    useEffect(()=>{
        getTableApi();  
    },[])

    useEffect(()=>{
        csvTool();
    },[table])

    console.log("table:",table);

    return(
        <>
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
        </>
    );
}

export default Table;

