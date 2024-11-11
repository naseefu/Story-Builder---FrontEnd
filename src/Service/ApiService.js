import axios from "axios";

export default class ApiService{

  static BASE_URL = "http://localhost:8080"

  static getHeader(){
    const token = localStorage.getItem('token');
    return{
      Authorization:`Bearer ${token}`,
      "Content-Type":"application/json"
    };
  }

  static async getSuggestions(story){
    const response = await axios.post(`${this.BASE_URL}/story/suggest`,story,{
      headers:this.getHeader()
    })
    return response.data
  }

  static async registerUser(user,confirmpass){

    const response = await axios.post(`${this.BASE_URL}/auth/register/${confirmpass}`,user)
    return response.data

  }

  static async LoginUser(user){

    const response = await axios.post(`${this.BASE_URL}/auth/login`,user)
    return response.data

  }

  static async addStoryDetails(storyDetails,userId){
    const response = await axios.post(`${this.BASE_URL}/story/add-story/${userId}`,storyDetails,{
      headers:this.getHeader()
    })
    return response.data
  }

  static async getAllStories(userId){
    const response = await axios.get(`${this.BASE_URL}/story/get-story/${userId}`,{
      headers:this.getHeader()
    })
    return response.data
  }

  static async getEachStory(userId,storyId){
    const response = await axios.get(`${this.BASE_URL}/story/get-each-story/${userId}/${storyId}`,{
      headers:this.getHeader()
    })
    return response.data
  }

  static async saveEachStory(story){
    const response = await axios.post(`${this.BASE_URL}/story/save-story`,story,{
      headers:this.getHeader()
    })
    return response.data
  }

}
