import React from 'react'
import { NavLink } from 'react-router-dom'

const Common = (props) => {
    return (
        <>
            <section id='header' className="">
                <div className="container-fluid">
                    <div className="row d-flex">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>{props.name} <strong className='brand-name'>Lernology</strong></h1>
                                    <h2 className="my-3">{props.disc}</h2>
                                    <div className="mt-5">
                                        <NavLink to={props.visit} className="btn btn-get-started">{props.btname}</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={props.imgsrc} className="img-fluid animated" alt="Common Img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Common