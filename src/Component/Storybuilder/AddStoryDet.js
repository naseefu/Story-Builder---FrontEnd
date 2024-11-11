import React, { useEffect, useState } from 'react'
import './storybuilder.css'
import ApiService from '../../Service/ApiService'
import { useUser } from '../Context/UserContext'

const AddStoryDet = () => {

  const [title,setTitle] = useState('')
  const [genre,setGenre]  = useState('')
  const [target,setTarget] = useState('')
  const [tone,setTone] = useState('')
  const [character,setCharacter] = useState('')
  const [setting,setSetting] = useState('')
  const [theme,setTheme] = useState('')

  const {user} = useUser()

  const [error,setError] = useState('')
  const [success,setSuccess] = useState('')

  const addStoryDetails = async()=>{
    try{

      const response = await ApiService.addStoryDetails({title,genre,target,tone,character,setting,theme},user&&user.id)
      console.log(response)
      setSuccess(response.message)

    }
    catch(err){
      setError(err.response?.data?.message || "An error occured")
    }
  }

  useEffect(()=>{

    setTimeout(()=>{

      if(error||success){
        setError('')
        setSuccess('')
      }

    },4000)

  },[error,success])

  return (
    <div className='storydett' style={{maxHeight:'70vh',overflow:'auto'}}>
      <div >
        <h1>New Story</h1>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'2rem',alignItems:'start'}}>
      <div className='storydett1'>
        <label>Story Title</label>
        <input placeholder='Enter Story title' value={title} onChange={(e)=>setTitle(e.target.value)}></input>
      </div>
      <div className='storydett1'>
        <label>Story Genre</label>
        <input placeholder='Enter Story Genre' value={genre} onChange={(e)=>setGenre(e.target.value)}></input>
      </div>
      <div className='storydett1'>
        <label>Target Audience</label>
        <select value={target} onChange={(e)=>setTarget(e.target.value)} >
          <option value="" disabled>Select one option</option>
          <option value="Children">Children</option>
          <option value="Teenagers">Teenagers</option>
          <option value="Adults">Adults</option>
          <option value="Older Adults">Older Adults</option>
        </select>
      </div>
      <div className='storydett1'>
        <label>Writing Tone</label>
        <input placeholder='Humorous, serious, dark, or light-hearted' value={tone} onChange={(e)=>setTone(e.target.value)}></input>
      </div>
      <div className='storydett1'>
        <label>Main Characters <span>(optional)</span></label>
        <textarea style={{fontFamily:"sfpro, sans-serif",lineHeight:"20px"}} placeholder='character names, roles, or descriptions' value={character} onChange={(e)=>setCharacter(e.target.value)}/>
      </div>
      <div className='storydett1'>
        <label>Setting or World</label>
        <input value={setting} placeholder='Information on the story’s location or world background' onChange={(e)=>setSetting(e.target.value)}/>
      </div>
      <div className='storydett1'>
        <label>Plot Inspiration or Theme</label>
        <input value={theme} onChange={(e)=>setTheme(e.target.value)} placeholder='A theme or central idea for the story'/>
      </div>
      </div>
      {error&&<p style={{color:'red',fontSize:'13px'}}>{error}</p>}
      {success&&<p style={{color:'green',fontSize:'13px'}}>{success}</p>}
      <div>
        <button onClick={addStoryDetails}>Add Story</button>
      </div>
    </div>
  )
}


export default AddStoryDet
