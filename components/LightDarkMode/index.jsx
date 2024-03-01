import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component{
  state = {isDarkMode: false}

  onToggle = ()=>{
    this.setState((prevState) => ({isDarkMode: !prevState.isDarkMode}))
  }

  

  render(){
    const {isDarkMode} = this.state

    return(
      <div>
    
      {isDarkMode ? 
        <div className='dark'>
          <h1>Hi , Buddy This is Dark Mode</h1>
          <button  onClick={this.onToggle}>Light</button>
        </div> : 
        <div className='light'>
          <h1>Hi , Buddy This is Light Mode</h1>
          <button  onClick={this.onToggle}>Dark</button>
        </div>}
      </div>
   )}
}

export default LightDarkMode