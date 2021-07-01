import React from 'react';
import moment from 'moment';

const Timeline = ({ chirp }) => {
    return (
        <div className="container">
                    <div className="bg-light text-dark" style={{height: 200, width: 300}}>
                        <div className="shadow-sm p-3 mb-2 bg-white rounded">
                            <div className="card-body">
                                <h5 className="card-title text-left">{chirp.username}</h5>
                                <p className="card-subtitle text-muted text-left">{chirp.msg}</p>
                                <br />
                                <p><small>{moment.parseZone().format('MMMM Do YYYY, h:mm:ss a')}</small></p>
                            </div>
                        </div>
                    </div>
                
            </div>
        
    );
};


export default Timeline;
