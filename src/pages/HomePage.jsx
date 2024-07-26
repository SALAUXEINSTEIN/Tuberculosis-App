import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const HomePage = () => {
  return (
    <section className='homepage'>
        <header>
            <div className="content">
                <h1>Tuberculosis Prediction Model</h1>
                <p>Predict your Tuberculosis Status.</p>
             <Link to="/tb"><button className='btn btn-home'>Check Your TB status</button></Link>
            </div>
        </header>
        <Outlet />
    </section>
  )
}

export default HomePage