import React, { useEffect, useState } from 'react'
import './register.css'
import logo from '../../Images/plotcraft1.png'
import Bitmojees from '../bitmoji/Bitmojees'
import { useNavigate } from 'react-router-dom'
import ApiService from '../../Service/ApiService'
import 'font-awesome/css/font-awesome.min.css';

const Register = () => {

  const navigate = useNavigate()

  const [isLoading,setLoading] = useState(false)

  const [indes,setIndes] = useState()
  const [firstname,setFirstname] = useState()
  const [lastname,setLastname] = useState()
  const [email,setEmail] = useState()
  const [phonenumber,setPhonenumber] = useState()
  const [dob,setDob] = useState()
  const [avatar,setAvatar] = useState()
  const [password,setPassword] = useState()
  const [confirmpassword,setConfirmpassword] = useState()
  const [accept,setAgree] = useState(false)
  const [error,setError] = useState() 
  const [success,setSuccess] = useState()

   

  const printUrl = (bit,index)=>{
    setIndes(index)
    setAvatar(bit)
  }

  const handleRegister=async()=>{
    setLoading(true)
    try{

      const response = await ApiService.registerUser({firstname,lastname,email,dob,password,phonenumber,accept,avatar},confirmpassword)
      setSuccess(response.message)
      navigate('/login')
      setLoading(false)

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
        {/* <video loop muted autoPlay playsInline src='https://cdn.pixabay.com/video/2024/03/08/203449-921267347_large.mp4'/> */}
        <video playsInline src='https://videos.pexels.com/video-files/4864929/4864929-sd_506_960_25fps.mp4' loop autoPlay muted/>
        {/* <video src='https://assets.mixkit.co/videos/611/611-720.mp4' loop muted autoPlay style={{transform: 'translate(-50%, -50%) rotate(270deg)',position:'absolute',top:"50%",left:"50%",minHeight:"85%",minWidth:'100vh',objectFit:"cover"}}/> */}
      </div>
      <div className='reg-details' style={{padding:'50px',display:'flex',flexDirection:"column",gap:'2rem'}}>
        <div className='register-header' style={{display:'flex',gap:'0.8rem',fontWeight:'bold',alignItems:'center',fontSize:'16px'}}>
          <img src={logo} alt='Plotcraft Logo'/>
          <p>PlotCraft</p>
        </div>
        <div className='register-details'>
          <div>
            <h1>Create Account</h1>
          </div>
          <div className='detail-div'>
          <div className='detail'>
            <label>First Name *</label>
            <input value={firstname} onChange={(e)=>setFirstname(e.target.value)} type='text' placeholder='Enter First name'/>
          </div>
          <div className='detail'>
            <label>Last Name *</label>
            <input value={lastname}  onChange={(e)=>setLastname(e.target.value)} type='text' placeholder='Enter Last name'/>
          </div>
          <div className='detail'>
            <label>Email *</label>
            <input value={email}  onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Enter Email address'/>
          </div >
          <div className='detail'>
            <label>Phone Number *</label>
            <input value={phonenumber}  onChange={(e)=>setPhonenumber(e.target.value)} type='number' placeholder='Enter Phone number'/>
          </div>
          <div className='detail'>
            <label>Date of Birth *</label>
            <input value={dob} onChange={(e)=>setDob(e.target.value)} type='date' placeholder='Date of birth'/>
          </div>
          <div className='detail' style={{width:"35vw"}}>
            <label>Choose an avatar *</label>
            <Bitmojees printUrl={printUrl} indes={indes}/>
          </div>
          <div className='detail'>
            <label>Password *</label>
            <input value={password}  onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Enter Password'/>
          </div>
          <div className='detail'>
            <label>Confirm Password *</label>
            <input value={confirmpassword}  onChange={(e)=>setConfirmpassword(e.target.value)} type='password' placeholder='Enter Password again'/>
          </div>
          <div style={{display:'flex',gap:'0.6rem',alignItems:'center'}}>
            <input type='checkbox' value={accept}  onClick={()=>setAgree(!accept)}/>
            <label style={{fontSize:"13px"}}>Agree our Terms of Services</label>
          </div>
          {error &&<p style={{color:'red',fontSize:'13px',margin:'0'}}>{error}</p>}
          {success&&<p style={{color:'green',fontSize:"13px",margin:'0'}}>{success}</p>}
          <div>
            <button onClick={handleRegister}>Create Account</button>
          </div>
          <div>
            <p style={{fontSize:"13px"}}>Already have an account? <span style={{color:'blue',borderBottom:"1px solid blue",paddingBottom:"2px",cursor:"pointer"}} onClick={()=>navigate('/login')}>Login</span></p>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Register
