import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserData } from '../../features/users/userSlice'
import { singleUserData } from '../../features/users/userSingleSlice'

const Dashboard = () => {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.user)
    const singleUser = useSelector((state) => state.singleUser)
    // console.log("users", users)
    useEffect(() => {
        if (users.status === 'idle') {
            dispatch(fetchUserData())
        }
    }, [users.status, dispatch])

    const getSingleUserData = (id) => {
        dispatch(singleUserData(id))
    }

    let content
    if (users.status === 'loading') {
        content = <tr><td colSpan={8}><div className="d-flex justify-content-center mt-4"> <div className="spinner-border text-primary" role="status"> <span className="visually-hidden">Loading...</span></div></div></td></tr>
    }
    else if (users.status === 'succeeded') {
        // console.log("users", users)
        content = users?.data?.map((data) => {
            return <tr key={data?.id}>
                <th scope="row">{data?.id}</th>
                <td><img src={data?.avatar} width={85} alt="" /></td>
                <td>{data?.first_name}</td>
                <td>{data?.last_name}</td>
                <td>{data?.email}</td>
                <td><button onClick={() => getSingleUserData(data?.id)} className="btn btn-sm btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">View</button></td>
            </tr>
        })
    }
    else if (users.status === 'failed') {
        content = <div className="alert alert-primary bg-primary text-light border-0 alert-dismissible fade show" role="alert">
            {users?.error}
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    }


    let singleContent;
    if (singleUser.status === 'loading') {
        document.getElementById('exampleModalLabel').innerHTML = 'Please Wait...';
    }
    else if (singleUser.status === 'succeeded') {
        document.getElementById('exampleModalLabel').innerHTML = singleUser.data.first_name + " " + singleUser.data.last_name;
        singleContent = <><tr>
            <th scope="row">#</th>
            <td>{singleUser.data.id}</td>
        </tr>
            <tr>
                <th scope="row">First Name</th>
                <td scope="row">{singleUser.data.first_name}</td>
            </tr>
            <tr>
                <th scope="row">Last Name</th>
                <td scope="row">{singleUser.data.last_name}</td>
            </tr>
            <tr>
                <th scope="row">Email</th>
                <td scope="row">{singleUser.data.email}</td>
            </tr></>
    }
    else if (singleUser.status === 'failed') {
        document.getElementById('exampleModalLabel').innerHTML = 'Failed';
        toast.error(singleUser.error);
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
                                        <th scope="col">Avatar</th>
                                        <th scope="col">First Name</th>
                                        <th scope="col">Last Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {content}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <table className="table table-sm">
                                        <tbody>
                                            {singleContent}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}

export default Dashboard