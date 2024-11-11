import React, { useEffect, useState } from 'react'
import './storybuilder.css'
import ApiService from '../../Service/ApiService'
import { useParams } from 'react-router-dom'
import { useUser } from '../Context/UserContext'
import { Check, X } from 'lucide-react'
import Loading from './Loading'

const WriteStory = () => {

  const [ai,setAi] = useState(false)
  const [story,setStory] = useState('')
  const [result,setResult] = useState('')

  const {id} = useParams()
  const {user} = useUser()

  const [storyDTO,setstoryDTO] = useState()

  const [saveMsg,setSaveMsg] = useState(false)


  const handleAiSuggestion=async()=>{
    setAi(true)
    try{
      setResult('')
      const response = await ApiService.getSuggestions({story})
      setResult(response.storystring)
    }
    catch(err){
      setAi(false)
      console.log(err)
    }
  }

  useEffect(()=>{

    const fetchStoryDetails = async()=>{

      try{

        const response = await ApiService.getEachStory(user&&user.id,id)
        setstoryDTO(response.storyDTO)
        setStory(response.storyDTO.story)

      }
      catch(err){
        console.log(err)
      }

    }
    fetchStoryDetails();

  },[id,user&&user])

  const saveStory = async()=>{

    try{

      const response = await ApiService.saveEachStory({id,story})
      setSaveMsg(true)

    }
    catch(err){

      console.log(err)

    }

  }

  useEffect(()=>{

    setTimeout(()=>{

      if(saveMsg){
        setSaveMsg(false)
      }

    },3000)

  },[saveMsg])

  const handleClose=()=>{
    setAi(false)
    setResult("")
  }

  return (
    <div className='story-write' style={{height:"80vh",overflow:'auto',borderTopLeftRadius:'20px'}}>
      {storyDTO && <div>
        <div style={{position:'relative',display:'flex',alignItems:'center',paddingRight:"20px",flexDirection:'row',height:'fit-content'}}>
          <div style={{width:ai?"70%":"100%"}}><div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'1rem'}}>
            <h1 style={{textAlign:'center'}}>{storyDTO.title}</h1>
            {saveMsg && <p style={{display:'flex',alignItems:'center',gap:'0.2rem',backgroundColor:'rgba(255,255,255,0.1)',borderRadius:'10px',color:'green',padding:"5px"}}>saved <span style={{marginTop:'3px'}}><Check height={15} /></span></p>}
          </div>
          <textarea value={story} onChange={(e)=>setStory(e.target.value)} className='story-input' style={{color:'black'}} placeholder='Start typing here...'> 
            {story && story} 
          </textarea>
          </div>
          <div>
          {ai&&<div className='airesultss' style={{width:"25vw",position:'relative',minHeight:"70vh",maxHeight:'70vh',marginTop:"-105px",backgroundColor:'rgba(255,255,255,0.7)',color:'black'}}>
          <p className='x-mark' style={{color:'white',position:'absolute',top:'0%',right:'5%',borderRadius:"20px"}} onClick={handleClose}><X height={18}/></p>
          {result?<div><textarea value={result} onChange={(e)=>setResult(e.target.value)} style={{width:"25vw",color:'black',height:"65vh",margin:"auto"}} className='aisuggest' ></textarea>
          <button style={{margin:'15px 0 0 0',backgroundColor:'rgba(4,205,0,0.6)',color:'white'}} onClick={()=>setStory(story+" "+result)}>Add AI Suggestion</button>
          <button style={{margin:'15px 0 0 10px',backgroundColor:'black',color:'white'}} onClick={handleAiSuggestion}>Suggest Another</button></div>:<div className='aisuggest'><Loading/></div>}</div>}
          </div>
          </div>
          <div className='story-btns'>
            <button className='save-btn' onClick={saveStory}>Save</button>
            <button className='suggest-btn' onClick={handleAiSuggestion}>Get AI Suggestion</button>
        </div></div>}
        </div>
  )
}

export default WriteStory
