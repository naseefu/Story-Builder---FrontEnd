import React, { useEffect, useState } from 'react'
import './storybuilder.css'
import Header from '../Commons/Header'
import { Dot, Menu, Plus, X } from 'lucide-react'
import ApiService from '../../Service/ApiService'
import WriteStory from './WriteStory'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import WelcomeStory from './WelcomeStory'
import { useUser } from '../Context/UserContext'

const Storybuilder = () => {

  const location = useLocation()

  const [ai,setAi] = useState(false)

  const {user} = useUser()

  const [storyname,setStoryname] = useState()
  
  useEffect(()=>{

    const fetchAllStories=async()=>{

      try{
        const response = await ApiService.getAllStories(user&&user.id)
        setStoryname(response.storyDTOs)
      }
      catch(err){
        console.log(err.response?.data?.message || "An error occured")
      }

    }
    fetchAllStories()

  },[user&&user.id])

  const [openmenu,setopenmenu] = useState(false)
  const navigate = useNavigate()

  return (
    <div className='story' style={{position:"relative",backgroundColor:'white'}}>
        <div style={{height:"fit-content",backgroundColor:'white',paddingBottom:'20px'}}>
          <Header story={true}/>
        </div>
    <div className='story-main' style={{maxHeight:'100%',backgroundColor:'rgb(239, 239, 239)'}}>
      
      <div className='story1' style={{width:'12vw',minHeight:'100%',paddingRight:"10px",paddingLeft:'10px',backgroundColor:'white'}}>
        <div className='story11'>
          <p className='xmenu' style={{display:'flex',alignItems:'center',gap:'0.3rem',maxWidth:'8vw',minWidth:"8vw",fontSize:"13px",paddingLeft:'10px',backgroundColor:'rgba(0,0,0,0.6)',cursor:'pointer',color:'white'}} onClick={()=>navigate('/story-builder/welcome')}><Menu height={20} className='menu'/> Menu</p>
        </div>
        <div className='story11'>
          <p className='plus' onClick={()=>navigate('/story-builder/fill-story-details')} style={{display:'flex',alignItems:'center',gap:'0.3rem',fontSize:"13px",width:"9vw"}}><Plus height={20} className='plus1'/>
          {<span style={{paddingRight:"10px"}}>New Story</span>}</p>
        </div>
        <div style={{marginTop:'25px'}}>
        {storyname && <div style={{display:'flex',flexDirection:'column',gap:"0.4rem"}}>
          {storyname.map((s,index)=>(
            <div key={index} className='storynames'>
              <NavLink className='noactive-story' activeclassname="active" style={{cursor:"pointer",display:'flex',color:'black',alignItems:'center',justifyContent:'space-between',width:'9vw',textDecoration:'none',fontSize:"13px"}} to={`/story-builder/story/${s.id}`}>
                <p>{s.title.slice(0,15)}{s.title.length>15&&".."}</p><span style={{display:'flex'}}><div className='dot'></div><div className='dot'></div><div className='dot'></div></span></NavLink>
            </div>
          ))}
        </div>}</div>
      </div>
      <div className='story2' style={{width:"100%"}}>
        <Outlet/>
      </div>
    </div>
    </div>
  )
}

export default Storybuilder
