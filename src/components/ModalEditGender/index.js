import React, { useState } from "react";
import { Modal } from "react-modal";
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
    const [txtGender, setTxtGender] = useState(dataGender.genero);
    console.log(dataGender);
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <h2> Atualização de generos </h2>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    className="validate"
                                    placeholder="Genero"
                                    id="txtGender"
                                    type="text"
                                    value={txtGender}
                                    onChange={({ target }) => setTxtGender(target.value)}
                                />

                            </div>
                        </div>
                    </form>
                    <button
                        className="btn waves-effect waves-light"
                        type="submit"
                        name="action"
                        onClick={handleSubmit}
                    > Update </button> 

                    <button
                        className="btn modal-trigger"
                        onClick={() => { window.location.reload(true)}}
                    > Cancelar </button>
                </div>
            </Modal>
        </div>
    )
}

export default Index