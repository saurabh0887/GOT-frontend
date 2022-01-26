import React, { useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";



const Card = ({ battle }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="card text-white bg-dark border border-info ">
            <div className="card-header lead bg-success">{battle.battle_name}</div>
            <div className="card-body">
                <p className="lead font-weight-normal text-wrap">
                    {battle.region}
                </p>
                <button onClick={handleShow} className="col-6 btn btn-block btn-outline-success mt-2 mb-2">More</button>
                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>{battle.battle_name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Table striped bordered hover variant="dark">
                            
                            <tbody>
                                <tr>
                                    <td>Attacker King</td>
                                    <td>{battle.attacker_king}</td>
                                    
                                </tr>
                                <tr>
                                    <td>Defender King</td>
                                    <td>{battle.defender_king}</td>
                                    
                                </tr>
                                <tr>
                                    <td>Battle Type</td>
                                    <td>{battle.battle_type}</td>
                                </tr>
                                <tr>
                                    <td>Winner</td>
                                    <td>{battle.winner}</td>
                                </tr>
                                <tr>
                                    <td>Location</td>
                                    <td>{battle.location}</td>
                                </tr>
                                <tr>
                                    <td>Region</td>
                                    <td>{battle.region}</td>
                                </tr>
                                <tr>
                                    <td>Battle Year</td>
                                    <td>{battle.year}</td>
                                </tr>
                            </tbody>
                        </Table>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div >
    )
}

export default Card;