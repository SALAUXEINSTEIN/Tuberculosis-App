import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const HomePage = () => {
  return (
    <section className='homepage'>
        <header>
            <div className="content">
                <h1>Tuberculosis Prediction Model</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nobis iste voluptatem nam. Voluptatum soluta maiores, quam fuga minima illum ipsam. Ratione dolor corporis, quas excepturi quia repudiandae autem deleniti.</p>
             <Link to="/tb"><button className='btn btn-home'>Check Your TB status</button></Link>
            </div>
        </header>
        <Outlet />
    </section>
  )
}

export default HomePage