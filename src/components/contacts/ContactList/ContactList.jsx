
import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import "../../../App.css";
import { ContactService } from '../../../services/ContactService';

let ContactList = () => {

    let [state , setState] = useState({
        loading : false,
        contacts : [],
        errorMessage : ''
    });

    useEffect(async () => {
        
        try {
            setState({...state, loading: true});
            let response = await ContactService.getAllContacts();
            setState({
                ...state,
                loading: false,
                contacts: response.data
            });
        }
        catch (error) {
            setState({
                ...state,
                loading: false,
                errorMessage: error.message
            });
        }
    
    }, []);

    let {loading , contacts , errorMessage} = state;

        return(
            <React.Fragment>
                <pre>{JSON.stringify(contacts)}</pre>
                <section className="contact-search">
                <div className="container">
                    <div className="grid">
                        <div className="row">
                            <div className="col">
                                <p className="h3 fw-bold">Phone Directory
                                    <Link to={'/contacts/add'} className="btn btn-success ms-2">
                                        <i className="fa fa-plus-circle me-2"/>
                                        New</Link>
                                </p>
                                <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo asperiores blanditiis minus ducimus inventore dolore excepturi fugit quisquam expedita facere. Sequi debitis vel quae quasi iure nemo maxime, temporibus minus!</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <form className="row">
                                    <div className="inp col">
                                        <div className="input mb-4">
                                            <input type="text" className="for-control" placeholder="Search Names"/>
                                        </div>   
                                    </div>
                                    <div className="sub col">
                                        <div className="mb-2">
                                            <input type="submit" className="btn btn-outline-dark search" value="Search"/>
                                        </div>
                                    </div>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                </section>

                <section className="contact-list">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row align-items-center d-flex justify-content-around">
                                            <div className="col-md-4">
                                                <img src="https://assets.stickpng.com/images/585e4bc4cb11b227491c3395.png" alt="Female User Icon" className='contact-img'/>
                                            </div>
                                            <div className="col-md-7">
                                                <ul className='list-group'>
                                                    <li className='list-group-item list-group-item-action'>
                                                        Name : <span className='fw-bold'>SJA</span>
                                                    </li>
                                                    <li className='list-group-item list-group-item-action'>
                                                        Mobile : <span className='fw-bold'>+966572705741</span>
                                                    </li>
                                                    <li className='list-group-item list-group-item-action'>
                                                        Email : <span className='fw-bold'>sja.affu765@gmail.com</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-md-1 d-flex flex-column align-items-center">
                                                <Link to={`/contacts/view/:contactId`} className='btn btn-warning my-1'>
                                                    <i className='fa fa-eye'/>
                                                </Link>
                                                <Link to={`/contacts/edit/:contactId`} className='btn btn-info my-1'>
                                                    <i className='fa fa-pen'/>
                                                </Link>
                                                <button className='btn btn-danger my-1'>
                                                    <i className='fa fa-trash'/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row align-items-center d-flex justify-content-around">
                                            <div className="col-md-4">
                                                <img src="https://assets.stickpng.com/images/585e4bc4cb11b227491c3395.png" alt="Female User Icon" className='contact-img'/>
                                            </div>
                                            <div className="col-md-7">
                                                <ul className='list-group'>
                                                    <li className='list-group-item list-group-item-action'>
                                                        Name : <span className='fw-bold'>SJA</span>
                                                    </li>
                                                    <li className='list-group-item list-group-item-action'>
                                                        Mobile : <span className='fw-bold'>+966572705741</span>
                                                    </li>
                                                    <li className='list-group-item list-group-item-action'>
                                                        Email : <span className='fw-bold'>sja.affu765@gmail.com</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-md-1 d-flex flex-column align-items-center">
                                                <Link to={`/contacts/view/:contactId`} className='btn btn-warning my-1'>
                                                    <i className='fa fa-eye'/>
                                                </Link>
                                                <Link to={`/contacts/edit/:contactId`} className='btn btn-info my-1'>
                                                    <i className='fa fa-pen'/>
                                                </Link>
                                                <button className='btn btn-danger my-1'>
                                                    <i className='fa fa-trash'/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
    );
}
export default ContactList;