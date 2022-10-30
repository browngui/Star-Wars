import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import api from "../../services/api";
import ModalUpdateGender from '../../components/ModalEditGender';
import ModalDeleteGender from '../../components/ModalDelete';


function Index() {

  const [genders, setGenders] = useState([]);
  const [loadModalUpdate, setLoadModalUpdate] = useState(false);
  const [loadModalDelete, setLoadModalDelete] = useState(false);
  const [genderItem, setGenderItem] = useState('');

  function showUpdateGender(gender) {
    setLoadModalUpdate(true);
    setGenderItem(gender);
  }

  function showDeleteGender(gender) {
    setLoadModalDelete(true);
    setGenderItem(gender);
  }

  useEffect(() => {

    async function getGenders() {
      const { data } = await api.get('/gender');
      setGenders(data)
    }
    getGenders();
  }, [])

  return (
    <>
      {loadModalUpdate && <ModalUpdateGender isOpen={loadModalUpdate} dataGender={genderItem} />}
      {loadModalDelete && <ModalDeleteGender isOpen={loadModalDelete} dataGender={genderItem}/>}

      <Table striped bordered hover variant="dark" style={{ marginTop: '90px', marginLeft: '350px', width: '700px', height: '400px' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'center' }}>ID</th>
            <th style={{ textAlign: 'center' }}>Genero</th>
            <th style={{ textAlign: 'center' }}> Ações </th>
          </tr>
        </thead>

        <tbody style={{ textAlign: 'center' }}>

          {
            genders.map((gender) => (
              <tr key={gender.id_genero}>
                <td> {gender.id_genero} </td>
                <td> {gender.genero}</td>
                <td>
                  <button style={{ color: 'white', backgroundColor: 'green' }}
                    className='btn modal-trigger btn-update'
                    onClick={() => showUpdateGender(gender)}
                  > Update </button>

                  <button style={{ color: 'white', backgroundColor: 'red' }}
                    className='btn modal-trigger btn-update'
                    onClick={() => showDeleteGender(gender)}
                  > Delete </button>
                </td>

              </tr>
            ))
          }


        </tbody>
      </Table>
    </>
  );
}

export default Index;
