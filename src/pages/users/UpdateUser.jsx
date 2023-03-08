import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux'
import { updateUserData } from '../../features/users/userUpdateSlice'

const AddUser = () => {
    const dispatch = useDispatch()
    const userUpdate = useSelector((state) => state.userUpdate)

    const [formData, setFormData] = useState({ fName: '', lName: '', email: '', country: '', gender: '', mobile: '', password: '', cPassword: '', address: '' })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        // console.log(userUpdate)
        e.preventDefault()
        if (formData.password !== formData.cPassword) {
            toast.error('Password should be Equal');
        }
        else {
            console.log(formData)
            dispatch(updateUserData(formData))
        }
    }

    useEffect(() => {
        if (userUpdate.status === 'loading') {
            document.getElementById('submit').innerHTML = 'Please Wait...';
        }
        else if (userUpdate.status === 'succeeded') {
            document.getElementById('submit').innerHTML = 'Submit';
            toast.success('Data submitted successfully');
            setFormData({ fName: '', lName: '', email: '', country: '', gender: '', mobile: '', password: '', cPassword: '', address: '' })
            document.querySelector('select').selectedIndex = 0;
            // console.log(userUpdate.data)
        }
        else if (userUpdate.status === 'failed') {
            document.getElementById('submit').innerHTML = 'Submit';
            toast.error(userUpdate.error);
        }
    }, [userUpdate.status, dispatch])


    return (
        <>
            <Header />
            <Sidebar />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>Add User</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to={'/'}>Home</Link></li>
                            <li className="breadcrumb-item active">Update User</li>
                        </ol>
                    </nav>
                </div>

                <section className="section">
                    <form action="" method="post" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="fName" className="form-label">First Name</label>
                                    <input type="text" className="form-control" value={formData.fName} onChange={handleChange} name='fName' id="fName" required />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="lName" className="form-label">Last Name</label>
                                    <input type="text" className="form-control" value={formData.lName} onChange={handleChange} name='lName' id="lName" required />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" value={formData.email} onChange={handleChange} name='email' id="exampleInputEmail1" aria-describedby="emailHelp" required />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="lName" className="form-label">Choose Your Country</label>
                                    <select className="form-select" defaultValue={'DEFAULT'} aria-label="Default select example" onChange={handleChange} name='country' required>
                                        <option>-- Country --</option>
                                        <option value="India">India</option>
                                        <option value="USA">USA</option>
                                        <option value="Canada">Canada</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" value="male" onChange={handleChange} name="gender" id="flexRadioDefault1" />
                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                            Male
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" value="female" onChange={handleChange} name="gender" id="flexRadioDefault2" />
                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                            Female
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <div className="mb-3">
                                        <label htmlFor="mobile" className="form-label">Mobile</label>
                                        <input type="text" className="form-control" value={formData.mobile} onChange={handleChange} name='mobile' id="mobile" required />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" value={formData.password} onChange={handleChange} name='password' id="password" required />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="cPassword" className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" value={formData.cPassword} onChange={handleChange} name='cPassword' id="cPassword" required />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Address</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleChange} value={formData.address} name='address' rows="3"></textarea>
                                </div>
                            </div>
                        </div>
                        <button type="submit" id='submit' className='btn btn-primary'>Submit</button>
                    </form>
                </section>

            </main>
            <Footer />
        </>
    )
}

export default AddUser