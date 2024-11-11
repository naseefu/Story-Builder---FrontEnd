import React, { useState } from 'react'
import './home.css'
import Header from '../Commons/Header'
import book1 from '../../Images/book1.png'
import book2 from '../../Images/book2.png'
import book3 from '../../Images/book3.png'
import book4 from '../../Images/book4.png'
import book from '../../Images/hand.png'
import Footer from '../Commons/Footer'

const Home = () => {

  const [i,setI] = useState(1)
  
  return (
    <div className='home-main'>
      
      <div className='home1' style={{}}>
        <Header/>
        <div className='home1-content'>
          <h1>Forge Your <span className='stories'>Stories</span>,<br></br> <span>Shape</span> Your Worlds</h1>
          <p>Unleash your creativity with AI-powered story-building tools</p>
          <button className='btn'>Explore Stories</button>
        </div>
        <div className='hand-img'>
          <img src={book} alt='hand'/>
        </div>
      </div>
      <div className='home2'>
        <div className='home21'>
          <h1>Welcome to PlotCraft: Where Your Imagination Comes to Life</h1>
          <p>Craft immersive stories, build unique characters, and explore endless plots all with the power of AI</p>
        </div>
        <div className='home22'>
          <p style={{color:'grey'}}>
          At PlotCraft, we believe that everyone has a story to tell. Whether you’re an aspiring author,
          a seasoned writer, or just someone who loves to dive into new worlds, 
          our platform gives you the tools to bring your ideas to life. 
          From AI-powered plot suggestions to a variety of genre templates, 
          PlotCraft is built to help you unlock your creative potential with ease and inspiration.
          Dive into our intuitive story-builder and watch as your vision takes shape, one scene at a time. 
          Join a community of storytellers, share your work, and see where your creativity can take you.</p>
          <video src='https://videos.pexels.com/video-files/4769551/4769551-sd_960_506_25fps.mp4' loop autoPlay muted playsInline/>
        </div>
      </div>
      <div className='home3'>
        <div className='book1'>
          <div>
            <h1>AI-Powered Plot Suggestions</h1>
            <p>Get fresh ideas with AI-generated plot twists, character arcs, and dialogue tailored to your story</p>
            <button>Learn More</button>
          </div>
          <div>
            <img src={book4} alt='book'/>
          </div>
        </div>
        <div className='book1'>
          <div>
            <h1>Customizable Genre Templates</h1>
            <p>Choose from genre-specific templates to jump-start your story with structure and key elements</p>
            <button>Learn More</button>
          </div>
          <div>
            <img src={book1} alt='book'/>
          </div>
        </div>
        <div className='book1'>
          <div>
            <h1>Collaborative Writing Mode</h1>
            <p>invite others to co-write in real-time, making storytelling a shared, creative experience</p>
            <button>Learn More</button>
          </div>
          <div>
            <img src={book3} alt='book'/>
          </div>
        </div>
        <div className='book1'>
          <div>
            <h1>Interactive Story Mapping</h1>
            <p>Visualize and organize your story with a map that connects scenes, character arcs, and plotlines</p>
            <button>Learn More</button>
          </div>
          <div>
            <img src={book2} alt='book'/>
          </div>
        </div>
      </div>
      <div className='home4'>
        <div className='home41' style={{backgroundImage:`url('https://cdn.pixabay.com/photo/2020/08/10/01/28/castle-5476737_1280.jpg')`}}>
          <h1>Galactic Odyssey</h1>
          <p>Set your story among stars with futuristic tech, alien species, 
            and intergalactic conflict. This template offers prompts for world-building,
            tech descriptions, and epic space battles.
            Romance</p>
            <div className='home41btn'>
              <button>Start Writing</button>
            </div>
        </div>
        <div className='home41' style={{backgroundImage:`url('https://cdn.pixabay.com/photo/2020/08/10/01/28/castle-5476737_1280.jpg')`,display:'grid'}}>
          <div></div>
          <div><h1>Realm of the Lost Kingdom</h1>
          <p>Embark on a journey of magic, mythical creatures,
             and ancient quests. This template includes heroic archetypes,
              world-building prompts, and fantasy-driven plot structures</p></div>
              <div className='home41btn'>
              <button>Start Writing</button>
            </div>
        </div>
        <div className='home41' style={{backgroundImage:`url('https://images.pexels.com/photos/1853951/pexels-photo-1853951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`}}>
          <div style={{width:"80%"}}><h1>The Locked Room Enigma</h1>
          <p>Dive into suspense and intrigue with a template that includes clues, red herrings, 
            and a suspect list to guide you in crafting a thrilling whodunit.</p></div>
              <div className='home41btn'>
              <button>Start Writing</button>
            </div>
        </div>
      </div>
      <div className='home4-dot'>
        <div style={{backgroundColor:i===1&&'black'}} className='dot'></div>
        <div style={{backgroundColor:i===2&&'black'}} className='dot'></div>
        <div style={{backgroundColor:i===3&&'black'}} className='dot'></div>
      </div>
      <div className='home5'>
        <h1 style={{fontSize:"5vw",marginBottom:"50px",fontFamily:"sfpro"}}>Why Sign Up for PlotCraft?</h1>
        <div className='home5-cards'>
          <div className='card'>
            <h1>Unleash Your Creativity</h1>
            <p>With tools designed to inspire, like AI-powered plot suggestions and customizable templates, 
            NarrativeForge helps you explore new storytelling possibilities and unleash your imagination</p>
          </div>
          <div className='card'>
            <h1>Enhance Your Writing Skills</h1>
            <p>Improve your craft through structured guidance and community feedback. 
              Use our features to learn from others and develop your unique voice as a writer.</p>
          </div>
          <div className='card'>
            <h1>Join a Community of Storytellers</h1>
            <p>Connect with fellow writers, share your work, and participate in collaborative projects.
               Join a supportive community that encourages creativity and growth</p>
          </div>
          <div className='card'>
            <h1>Access Exclusive Features</h1>
            <p>Enjoy premium features like interactive story mapping and advanced collaboration tools.
               Unlock the full potential of your storytelling with our comprehensive resources</p>
          </div>
          <div className='card'>
            <h1>Stay Organized and Focused</h1>
            <p>Keep track of your ideas, plot lines, and character developments in one place.
               Our organizational tools help you maintain focus and streamline your writing process</p>
          </div>
          <div className='card'>
            <h1>Gain Inspiration and Resources</h1>
            <p>Regularly updated resources, writing prompts, and storytelling challenges provide ongoing inspiration. 
              Never run out of ideas for your next story!
            </p>
          </div>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
