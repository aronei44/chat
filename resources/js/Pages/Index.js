import React, {useState, useEffect} from 'react'
import Layout from './Layout'
import { Head, Link } from '@inertiajs/inertia-react'
import axios from 'axios'

const Left = ({message, time}) =>{

  return (
    <div className="row ms-3 mt-1 me-3 scroll">
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
    <div className="row me-3 mt-1 ms-3 scroll">
      <div className="col-md-3 second">
        <p className="small">{time}</p>
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

  const [search, setSearch] = useState('')

  const [users, setUsers] = useState([])

  const searchUser = () =>{
    axios.post('/search', {name:search})
    .then(data=>setUsers(data.data.data))
  }

  const send = () =>{
    axios.post(`/send/${room.id}`,{body:message})
      .then(data => setMessages(data.data.data))
  }

  Echo.channel('Notification')
		.listen('.message', (e) => {
			if(e.room.id === room.id){
                axios.get(`/messages/${room.id}`)
                .then(data => {
                    setMessages(data.data.data)
                    console.log(e)
                })
            }
		});

  if(user!== undefined){
    useEffect(() => {
      axios.get(`/messages/${room.id}`)
        .then(data => setMessages(data.data.data))
      return () => {
        setMessages([])
      }
    }, [])
    setTimeout(()=>{
      let elem = document.querySelectorAll('.scroll')
      let len  = elem.length-1
      if(len>0){
        elem[len].scrollIntoView()
      }
    },1)

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
          <div className="list-group" id='scroll'>
            {messages.map((data, index)=>{
              if(data.from===user.id){
                return(
                  <Left message={data.body} time={data.time} key={index} />
                )
              }else{
                return(
                  <Right message={data.body} time={data.time} key={index} />
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
            value={message}
            onChange={(e)=>setMessage(e.target.value)}/>
          <button
            className="btn btn-outline-success"
            type="button"
            onClick={()=>{
              send()
              setMessage('')
            }}
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
        <div className="container">
          <h1 className="text-center mt-5 mb-5">Selamat Datang Di Aplikasi Chat</h1>
          <div className="bg-light container" style={{padding:'20px',borderRadius:"20px"}}>
            <div className="d-flex mx-2">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Mulai Cari Teman Chat Anda (username only)"
                aria-label="Search"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                />
              <button
                className="btn btn-success"
                type="button"
                onClick={()=>searchUser()}
                >Cari</button>
            </div>
            {users.length>0 ?

              <div className="list-group mt-3 mb-3" style={{height:sideHeight-200,overflow:'auto'}}>
                {users.map((user,index)=>{
                  return(
                    <Link href={"/chat/"+user.email} className="list-group-item list-group-item-action mx-auto" style={{width:"80%"}}>{user.name} - {user.email}</Link>
                  )
                })}
              </div>
          :''}

          </div>

        </div>
      </Layout>
    )
  }
}
