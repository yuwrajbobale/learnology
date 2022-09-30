import React, { useState } from 'react'

const Contact = () => {

    const [data, setData] = useState({
        FullName: " ",
        MobileNumber:" ",
        Email:" ",
        Messege:" ",
    });

    const InputEvent = (event) =>{
        const{name, value} = event.target;

        setData((prevData) => {
            return{
                ...prevData,
                [name]: value,
            }
        })
    }

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My Name is ${data.FullName}. My mobile number is ${data.MobileNumber} and email is ${data.Email}, Here is what i want to say ${data.Messege}`)
    };

  return (
    <>
        <div className='my-5'>
            <h1 className="text-center"> Contact US</h1>
        </div>
        <div className="container contact-div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Full Name</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" name="FullName" value={data.FullName} onChange={InputEvent} placeholder='Enter Your Name'/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Mobile Number</label>
                            <input type="number" class="form-control" id="exampleInputEmail1" name="MobileNumber" value={data.MobileNumber} onChange={InputEvent} placeholder='Enter Your Mobile Number'/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" name="Email" value={data.Email} onChange={InputEvent} placeholder='Enter Your Email address'/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Messege</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="Messege" value={data.Messege} onChange={InputEvent}></textarea>
                        </div>
                        <div class="col-12 mb-5">
                            <button class="btn btn-outline-primary" type="submit">Submit form</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact