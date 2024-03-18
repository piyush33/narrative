import {useEffect, useState} from "react";
import { getTable } from "./api";


const Table = () =>{
    const [newTable, setNewTable] = useState([]);
    const [table, setTable] = useState([]);
    const [map, setMap] = useState(false);
    const [mergeColumns, setMergeColumns] = useState(false);
    const [mergeRows, setMergeRows] = useState(false);
    const [firstColumn, setFirstColumn] = useState(false);
    const [secondColumn, setSecondColumn] = useState(false);
    const [thirdColumn, setThirdColumn] = useState(false);
    const [fourthColumn, setFourthColumn] = useState(false);


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

    const columnMerge = () =>{

        if(newTable.length!==0){
            setNewTable([]);
        } 

        table.forEach((item) => {
            setNewTable((prev) => [...prev, { name: firstColumn && secondColumn ? `${item.firstName} ${item.lastName}` : 0, class1: item.class1, class2: item.class2, school: item.school, location: item.location}])
                  
      })

      setMergeColumns(!mergeColumns);
        
    }

    const columnToRows = () => {

        if(newTable.length!==0){
            setNewTable([]);
        }
        table.forEach((item) => {
            
            setNewTable((prev) => [...prev, { firstName: item.firstName, lastName: item.lastName, class: thirdColumn && fourthColumn ? item.class1 : 0, school: item.school, location: item.location}])
            setNewTable((prev) => [...prev, { firstName: item.firstName, lastName: item.lastName, class: thirdColumn && fourthColumn ? item.class2 : 0, school: item.school, location: item.location}])
               
      })
      setMergeRows(!mergeRows);

      console.log("thirdC",thirdColumn);
      console.log("fourthC", fourthColumn);
    }


    useEffect(()=>{
        getTableApi();  
    },[])

    useEffect(()=>{
        // csvTool();
    },[table])

    console.log("table:",table);

    const firstColumnSelect = () =>{
        setFirstColumn(!firstColumn);
    }

    const secondColumnSelect = () =>{
        setSecondColumn(!secondColumn);
    }

    const thirdColumnSelect = () =>{
        setThirdColumn(!thirdColumn);
    }

    const fourthColumnSelect = () =>{
        setFourthColumn(!fourthColumn);
    }



    return(
        <>
        <div>
            <button onClick={columnMerge}>Merge Columns</button>
            <button onClick={columnToRows}>Merge Columns to rows</button>
        </div>
       {!mergeColumns && !mergeRows &&
        <table>
           <thead>
            <tr>
              <th style={{border: firstColumn ? "1px solid grey" : 0}} onClick={firstColumnSelect}> firstName </th>
              <th style={{border: secondColumn ? "1px solid grey" : 0}} onClick={secondColumnSelect}> lastName </th>
              <th style={{border: thirdColumn ? "1px solid grey" : 0}} onClick={thirdColumnSelect}> class1 </th>
              <th style={{border: fourthColumn ? "1px solid grey" : 0}} onClick={fourthColumnSelect}> class2</th>
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
        {mergeColumns &&
          <table>
           <thead>
            <tr>
              <th> name </th>
              <th> class1 </th>
              <th> class2 </th>
              <th> school </th>
              <th> location </th>

           </tr>
           </thead>
          <tbody>
          {newTable.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
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
         {!mergeColumns && mergeRows &&
          <table>
           <thead>
            <tr>
              <th> firstName </th>
              <th> lastName</th>
              <th> class </th>
              <th> school </th>
              <th> location </th>

           </tr>
           </thead>
          <tbody>
          {newTable.map((item) => {
            return (
              <tr>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
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

