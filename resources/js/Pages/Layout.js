import React, { useEffect, useState } from 'react'
import { Link, usePage } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'

export default function Layout({ children, auth }) {
    const {csrf} = usePage().props
    const [users, setUsers] = useState([])
    let navHeight = "120"
    let sideHeight = window.innerHeight - navHeight
    useEffect(() => {
      axios.get('/user')
        .then(data => setUsers(data.data.data))
      return () => {
        setUsers([])
      }
    }, [])
    Echo.channel('Notification')
      .listen('.message', (e) => {
        if(e.room.user1_id === auth.id || e.room.user2_id){
          axios.get('/user')
          .then(data => setUsers(data.data.data))
        }
      });
  return (
    <main>
      <div className="row">
        <div className="col-3  bg-light">
          <nav className="navbar navbar-light bg-light" style={{height:navHeight}}>
            <div className="container-fluid">
              <Link href="/" className="navbar-brand mb-0 h1">Chat</Link>
              <button className="btn btn-danger" onClick={()=>{
                Inertia.post('/logout',{csrf})
                window.location.href = "/login"
                }}>Logout</button>
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
                if(data.id !== auth.id){
                  return(
                    <Link href={"/chat/"+data.email} className="list-group-item list-group-item-action" key={index}>
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{data.name}</h5>
                        <small className="text-muted">3 days ago</small>
                      </div>
                      <small className="text-muted">And some muted small print.</small>
                    </Link>
                  )
                }
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