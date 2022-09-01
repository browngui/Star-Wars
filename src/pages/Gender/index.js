import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import api from "../../services/api";


      function Index() {

        const [genders, setGenders] = useState([]);
        useEffect(() =>{

          async function getGenders() {
             const {data} = await api.get('/gender');
             setGenders (data)
          }
          getGenders();
        }, [])

          return (
            <Table striped bordered hover variant="dark" style={{marginTop: '90px', marginLeft: '350px', width: '700px', height:'400px'}}>
              <thead>
                <tr>
                  <th style={{textAlign: 'center'}}>ID</th>
                  <th style={{textAlign: 'center'}}>Genero</th>
                  <th style={{textAlign: 'center'}}> Ações </th>
                </tr>
              </thead>
              
              <tbody style={{textAlign: 'center'}}>
            
                  {
                    genders.map((gender) => (
                      <tr> 
                        <td> {gender.id_genero} </td>
                        <td> {gender.genero}</td>
                        <td> 
                          <button style={{color: 'white', backgroundColor: 'green'}}> Update </button> 
                          
                          <button style={{color: 'white', backgroundColor: 'red'}}> Delete </button>
                        </td>
                        
                      </tr>
                    ))
                  }
                

              </tbody>
            </Table>
          );
        }
        
        export default Index;
