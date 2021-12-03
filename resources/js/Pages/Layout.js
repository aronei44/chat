import React, { useEffect } from 'react'
import { Link, usePage } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'
import axios from 'axios'

export default function Layout({ children }) {
    const {users} = usePage().props
    let navHeight = "120"
    let sideHeight = window.innerHeight - navHeight
    // console.log(height)
  return (
    <main>
      <div className="row">
        <div className="col-3  bg-light">
          <nav className="navbar navbar-light bg-light" style={{height:navHeight}}>
            <div className="container-fluid">
              <span className="navbar-brand mb-0 h1">Chat 2</span>
            </div>
          </nav>
          <div className="d-flex mx-2 mt-2 mb-2">
            <input className="form-control me-2" type="search" placeholder="Cari Chat" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Cari</button>
          </div>
          <div className="card" style={{
                height:sideHeight,
                maxHeight:sideHeight,
                overflow:"auto"
            }}>
            <div className="list-group">
              {users.map((data,index)=>{
                return(
                  <Link href={"/chat/"+data.email} className="list-group-item list-group-item-action" key={index}>
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">{data.name}</h5>
                      <small className="text-muted">3 days ago</small>
                    </div>
                    <small className="text-muted">And some muted small print.</small>
                  </Link>
                )
              })}
                
            </div>
          </div>
        </div>
        <div className="col-9">
            {children}
        </div>
      </div>
    </main>
  )
}