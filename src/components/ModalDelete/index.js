import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


function Index({ isOpen, dataGender }) {
    
    const [modalIsOpen, setIsOpen] = useState(isOpen);


    function closeModal() {
        setIsOpen(false);
    }


    async function handleDeleteGender() {

        const genderData = {
              "idGenero": dataGender.id_genero
        }

        try {
            await axios.delete(`http://localhost:3333/gender/${dataGender.id_genero}`);
            window.location.reload(true);
        } catch (err) {
            alert(`não foi possivel deletar. \nErro: ${err}`);
        }
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
        >
            <h2> Confirmação</h2>
            <p>Tem certeza que deseja excluir o item selecionado?</p>
            <button
                className="btn modal-trigger"
                onClick={() => { window.location.reload(true)}}
            >Cancelar</button>

            <button
                className="btn modal-trigger"
                onClick={handleDeleteGender}
            >Excluir</button>
        </Modal>
    )
}

export default Index