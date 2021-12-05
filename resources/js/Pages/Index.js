import React, {useState} from 'react'
import Layout from './Layout'
import { Head } from '@inertiajs/inertia-react'
import axios from 'axios'

const Left = ({message, time}) =>{
  time = time.split('T')
  const clock = time[1].split(':')
  return (
    <div className="row ms-3 mt-1 me-3">
      <div className="col-md-8 card left">
        <p>{message}</p>
      </div>
      <div className="col-md-3">
        <p className="small">{time[0]} {clock[0]}:{clock[1]}</p>
      </div>
    </div>
  )
}
const Right = ({message, time}) =>{
  time = time.split('T')
  const clock = time[1].split(':')
  return (
    <div className="row me-3 mt-1 ms-3">
      <div className="col-md-3 second">
        <p className="small">{time[0]} {clock[0]}:{clock[1]}</p>
      </div>
      <div className="col-md-8 card right first">
        <p>{message}</p>
      </div>
    </div>
  )
}


export default function Index({user, room, auth}) {
  let navHeight = "120"
  let sideHeight = window.innerHeight - navHeight

  const [message, setMessage] = useState('')

  const [messages, setMessages] = useState([])

  
  const send = () =>{
    axios.post(`/send/${room.id}`,{body:message})
      .then(data => setMessages(data.data.data))
  }

  
  if(user!== undefined){
    if(messages.length === 0){
      axios.get(`/messages/${room.id}`)
        .then(data => setMessages(data.data.data.messages))
    }
  
    return (
      <Layout auth={auth}>
        <Head title={user.name} />
        <nav className="navbar navbar-light bg-light" style={{height:navHeight}}>
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">{user.name}</span>
          </div>
        </nav>
        <div className="card" style={{
                height:sideHeight,
                maxHeight:sideHeight,
                overflow:"auto"
          }}>
          <div className="list-group">
            {messages.map((data, index)=>{
              if(data.from===user.id){
                return(
                  <Left message={data.body} time={data.created_at} key={index} />
                )
              }else{
                return(
                  <Right message={data.body} time={data.created_at} key={index} />
                )
              }
            })}
          </div>
        </div>
        <div className="d-flex mx-2 mt-2 mb-2">
          <input 
            className="form-control me-2" 
            type="text" 
            placeholder="Tulis Pesan Anda" 
            aria-label="Search" 
            onChange={(e)=>setMessage(e.target.value)}/>
          <button 
            className="btn btn-outline-success" 
            type="button" 
            onClick={()=>send()} 
            >Kirim</button>
        </div>
      </Layout>
    )
  }
  else
  {
    return (
      <Layout auth={auth}>
        <Head title="Welcome" />
        <h1>Selamat Datang Di Aplikasi Chat</h1>
      </Layout>
    )
  }
}
