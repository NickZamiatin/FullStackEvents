import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Event from '../Event'



export default class Events extends Component {

  state = {
    isLoading: false,
    events:[]
  }

  componentDidMount(){
    const API ='http://localhost:3000/api/v1/events'
    fetch(API)
      .then(res => res.json())
      .then(events =>{
       this.setState({
         events
       })
      })
  }

  render() {
    return (
      <div>
        {this.state.isLoading ?
         <h2>Loading ...</h2> :
         <div className='row'>
          {this.state.events.map(event => (
          <Event  event= {event}  />
          
        ))}
        </div>
        }
      </div>
    )
  }
}
