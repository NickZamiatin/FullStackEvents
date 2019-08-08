import React from 'react';
import {Link} from 'react-router-dom';

 
const Event = ({event}) => {
  return (
    <div>
     <div className="card text-white bg-primary mb-3" style={{'maxWidth':'20rem'}}>
            <h4 className="card-header">{event.location}</h4>
            <div className="card-body">
              <h2 className="card-title">{event.title}</h2>
              <p className="card-text">{event.description}</p>          
              <Link to={`events/${event.id}`} type="button" class="btn btn-secondary">Learn more </Link>
              </div>
            </div>        
    </div>
  );
}
 
export default Event;