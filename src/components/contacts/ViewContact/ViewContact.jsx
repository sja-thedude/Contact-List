import React from 'react';
import "../../../App.css";
import {Link} from 'react-router-dom';

let ViewContact = () => {
    return (
        <React.Fragment>
            <section className='view-contact-intro p-3'>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-warning fw-bold">
                                View Contact
                            </p>
                            <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas debitis animi ipsa ab iste dolores, facere at delectus eligendi, facilis aliquid aperiam officiis aspernatur vel, rerum excepturi numquam ad aliquam.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="view-contact mt-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <img src="https://assets.stickpng.com/images/585e4bc4cb11b227491c3395.png" alt="" className='contact-img' />
                        </div>
                        <div className="col-md-8">
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
                                <li className='list-group-item list-group-item-action'>
                                    Company : <span className='fw-bold'>Microverse & Dovelp</span>
                                </li>
                                <li className='list-group-item list-group-item-action'>
                                    Title : <span className='fw-bold'>Technical Support Engineer & Game Developer</span>
                                </li>
                                <li className='list-group-item list-group-item-action'>
                                    Group : <span className='fw-bold'></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to={"/contacts/list"} className="btn btn-warning">Back</Link>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}
    export default ViewContact;