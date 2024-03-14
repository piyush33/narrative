import {useEffect, useState} from "react";

const Table = () =>{
    const [newTable, setNewTable] = useState([]);

    let table = [
        { firstName: "Beth", lastName: "Smith", class1: "English", class2: "Math", school: "Harvard", location: "Boston" },
        { firstName: "Rahul", lastName: "Shankar", class1: "Physics", class2: "Chemistry", school: "Stanford", location: "Palo Alto" }
     ]


    let databaseStructure = { name: String, class: String, school: String, location: String } 

    

    const csvTool = () => {

        table.forEach((item) => {
            
            setNewTable((prev) => [...prev, { name: `${item.firstName} ${item.lastName}`, class: item.class1, school: item.school, location: item.location}])
            setNewTable((prev) => [...prev, { name: `${item.firstName} ${item.lastName}`, class: item.class2, school: item.school, location: item.location}])
               
      })
    }

    useEffect(()=>{
        csvTool();
    },[])

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

