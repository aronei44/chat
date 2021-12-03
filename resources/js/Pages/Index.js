import React from 'react'
import Layout from './Layout'
import { Head } from '@inertiajs/inertia-react'

const Left = ({message, time}) =>{
  return (
    <div className="row ms-3 mt-1 me-3">
      <div className="col-md-8 card left">
        <p>{message}</p>
      </div>
      <div className="col-md-3">
        <p className="small">{time}</p>
      </div>
    </div>
  )
}
const Right = ({message, time}) =>{
  return (
    <div className="row me-3 mt-1 ms-3">
      <div className="col-md-3 second">
        <p className="small">{time}</p>
      </div>
      <div className="col-md-8 card right first">
        <p>{message}</p>
      </div>
    </div>
  )
}


export default function Index({user}) {
  // console.log(user)
  let navHeight = "120"
  let sideHeight = window.innerHeight - navHeight
  return (
    <Layout>
      <nav className="navbar navbar-light bg-light" style={{height:navHeight}}>
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">{user === undefined ? '': user.name}</span>
        </div>
      </nav>
      <div className="card" style={{
              height:sideHeight,
              maxHeight:sideHeight,
              overflow:"auto"
        }}>
        <div className="list-group">
            <Left message="ini tes" time="17-12-2021 07:51" />
            <Right message="ini tes juga"  time="17-12-2021 07:52"/>
        </div>
      </div>
      <div className="d-flex mx-2 mt-2 mb-2">
        <input className="form-control me-2" type="search" placeholder="Tulis Pesan Anda" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Kirim</button>
      </div>
    </Layout>
  )
}
