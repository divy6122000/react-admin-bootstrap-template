import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserData } from '../../features/users/userSlice'

const Dashboard = () => {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.user)
    // console.log("users", users)
    useEffect(() => {
        if (users.status === 'idle') {
            dispatch(fetchUserData())
        }
    }, [users.status, dispatch])

    let content
    if (users.status === 'loading') {
        content = <tr><td colSpan={8}><div className="d-flex justify-content-center mt-4"> <div className="spinner-border text-primary" role="status"> <span className="visually-hidden">Loading...</span></div></div></td></tr>
    }
    else if (users.status === 'succeeded') {
        // console.log("users", users)
        content = users?.data?.map((data, i) => {
            return <tr key={data?.id}>
                <th scope="row">{i + 1}</th>
                <td>{data?.name}</td>
                <td>{data?.username}</td>
                <td>{data?.email}</td>
                <td>{data?.phone}</td>
                <td>{data?.website}</td>
                <td>{data?.address?.city}</td>
                <td>{data?.address?.zipcode}</td>
            </tr>
        })
    }
    else if (users.status === 'failed') {
        content = <div className="alert alert-primary bg-primary text-light border-0 alert-dismissible fade show" role="alert">
            {users?.error}
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    }
    return (
        <>
            <Header />
            <Sidebar />
            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>View Users</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to={'/'}>Home</Link></li>
                            <li className="breadcrumb-item active">View Users</li>
                        </ol>
                    </nav>
                </div>

                <section className="section">
                    <div className="card">
                        <div className="card-body">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Username</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Website</th>
                                        <th scope="col">City</th>
                                        <th scope="col">Zip Code</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {content}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}

export default Dashboard