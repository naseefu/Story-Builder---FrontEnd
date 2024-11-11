import React from 'react'
import './navbar.css'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../Context/UserContext'
const Header = ({story}) => {
  const navigate = useNavigate()
  const {user} = useUser() || {}
  const {logout} = useUser()
  console.log(user)

  return (
    <div style={{paddingTop:"15px"}}>
    <div className='navbar' style={{backgroundColor:story&&'black',color:story&&'white'}}>
      <div className='nav1'>
        <p>PlotCraft</p>
      </div>
      <div className='nav2'>
        <p onClick={()=>navigate('/')}>Home</p>
        <p onClick={()=>navigate('/story-builder')}>Story Builder</p>
        <p>Explore Stories</p>
        <p>About</p>
        <div className='p4' style={{position:'relative'}}>
          {user?<div style={{display:'flex',alignItems:'center',gap:'4rem'}}><><p onClick={()=>logout()}>Logout</p></>
          <p style={{display:"flex",alignItems:'center',gap:'0.4rem',backgroundColor:story?'white':'black',color:story?'black':'white',padding:"3px 10px",borderRadius:"10px"}}><span><img src={user.avatar} style={{borderRadius:"20px",marginTop:"3px"}} height='30px'/></span>{user.firstname}</p>
           </div>:<><p  className='signtn'>Register / Log in</p>
          <div className='hover-div' 
          style={{position:'absolute',backgroundColor:"rgba(100,100,100,0.4)",textAlign:'start',
          color:'black',borderRadius:"10px",top:'90%',left:"-05%",
          width:"fit-content",padding:"20px 60px 20px 0px"}}>
            <ul>
            <li><p onClick={()=>navigate('/register')}>Register</p></li>
            <li><p onClick={()=>navigate('/login')}>Sign in</p></li></ul>
          </div></>}
        </div>
      </div>
    </div></div>
  )
}

export default Header
