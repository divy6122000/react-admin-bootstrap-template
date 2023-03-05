import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'

const Dashboard = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>Add User</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to={'/'}>Home</Link></li>
                            <li className="breadcrumb-item active">Add User</li>
                        </ol>
                    </nav>
                </div>

                <section className="section">

                </section>

            </main>
            <Footer />
        </>
    )
}

export default Dashboard