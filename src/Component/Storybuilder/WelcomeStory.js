import React from 'react'
import { useUser } from '../Context/UserContext'
import s1 from '../../Images/s1.png'
import s2 from '../../Images/s2.png'
import s3 from '../../Images/s3.png'

const WelcomeStory = () => {
  const {user} = useUser()
  return (
      <div className='story-write'>
        <div style={{position:'relative',display:'flex',alignItems:'center',paddingRight:"20px"}}>
          <div className='wc-title'>
            <h1 style={{margin:"0",marginTop:"60px"}}>Hey {user?`${user.firstname}`:''}, Welcome to PlotCraft</h1>
          </div>
          
        </div>
        <div className='wc-contents' style={{width:'100%',margin:'40px auto',display:'flex',flexDirection:'column',alignItems:'start',gap:'2rem'}}>
            <h1>Start Your Story</h1>
            <p>In this step, users can fill out the necessary details for their story, such as the title, description, and initial content. 
              This is the beginning of the creative process where users start to structure their story</p>
            <img src={s3} height={500} style={{borderRadius:"0 10px 10px 0"}} alt='story'/></div>
        <div className='wc-contents' style={{width:'100%',margin:'40px auto',display:'flex',flexDirection:'column',alignItems:'end',gap:'2rem'}}>
            <h1>Your Story in Progress</h1>
            <p>This is the user's current story page, where they can see the content they've written so far. 
              It allows users to review and edit the story, ensuring everything is in place before they proceed to the next step</p>
            <img src={s2} height={500}  style={{borderRadius:"10px 0 0 10px"}} alt='story'/></div>
          <div className='wc-contents' style={{width:'100%',margin:'40px auto',display:'flex',flexDirection:'column',alignItems:'start',gap:'2rem'}}>
            <h1>AI Enhancements</h1>
            <p>Here, the AI provides suggestions to enhance or continue the user's story. Based on the initial content, 
              the AI generates ideas or improvements to help guide users in creating a more engaging and cohesive narrative.</p>
            <img src={s1} height={500} style={{borderRadius:"0 10px 10px 0"}} alt='story'/>
          </div>
      </div>
  )
}

export default WelcomeStory
