import React, { useEffect, useState } from 'react'
import './register.css'
import logo from '../../Images/plotcraft1.png'
import Bitmojees from '../bitmoji/Bitmojees'
import { useNavigate } from 'react-router-dom'
import ApiService from '../../Service/ApiService'
import 'font-awesome/css/font-awesome.min.css';
import { useUser } from '../Context/UserContext'

const Signin = () => {
  const navigate = useNavigate()

  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [isLoading,setLoading] = useState()
  const [error,setError] = useState()
  const [success,setSuccess] = useState()

  const { login } = useUser()

  const handleLogin=async()=>{
    setLoading(true)
    try{
      const response = await ApiService.LoginUser({email,password})
      localStorage.setItem('token',response.token)
      localStorage.setItem('user',response.userDTO)
      login(response.userDTO)
      console.log(response)
      setSuccess(response.message)
      setLoading(false)
      navigate('/story-builder/welcome')
    }
    catch(err){
      setError(err.response?.data?.message || "An error occured")
      setLoading(false)
    }
  }

  useEffect(()=>{

    setTimeout(()=>{
      if(error||success){
        setError(null)
        setSuccess(null)
    }
    },4000)

  },[error,success])

  return (
    <div className='register'>
      <div className='reg-video'>
        <video loop muted autoPlay playsInline src='https://videos.pexels.com/video-files/4860944/4860944-uhd_1440_2732_25fps.mp4'/>
        {/* <video loop muted autoPlay playsInline src='https://videos.pexels.com/video-files/4650486/4650486-sd_506_960_30fps.mp4'/> */}
      </div>
      <div className='reg-details' style={{padding:'50px',display:'flex',flexDirection:"column",gap:'8rem'}}>
        <div className='register-header' style={{display:'flex',gap:'0.8rem',fontWeight:'bold',alignItems:'center',fontSize:'16px'}}>
          <img src={logo} alt='Plotcraft Logo'/>
          {/* <h1 style={{fontWeight:"bolder"}}>P.</h1> */}
          <p>PlotCraft</p>
        </div>
        <div className='register-details'>
          <div>
            <h1>Welcome Back!</h1>
          </div>
          <div className='detail-div'>
          <div className='detail'>
            <label>Email *</label>
            <input value={email}  onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Enter Email address'/>
          </div >
          <div className='detail'>
            <label>Password *</label>
            <input value={password}  onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Enter Password'/>
          </div>
          {error &&<p style={{color:'red',fontSize:'13px',margin:'0'}}>{error}</p>}
          {success&&<p style={{color:'green',fontSize:"13px",margin:'0'}}>{success}</p>}
          <div>
            {isLoading ? 
            <button className="buttonload">
              <i className="fa fa-spinner fa-spin"></i>
            </button>
            :
            <button onClick={handleLogin}>Continue</button>}
          </div>
          <div>
            <p style={{fontSize:"13px"}}>Don't have an account? <span style={{color:'blue',borderBottom:"1px solid blue",paddingBottom:"2px",cursor:"pointer"}} onClick={()=>navigate('/register')}>Register</span></p>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Signin
