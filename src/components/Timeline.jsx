import React from 'react';
import moment from 'moment';

const Timeline = ({ chirp }) => {
    return (
        <div className="container">
            <div className="d-flex justify-content-end">
                <div className="col-sm-6 ">
                    <div className="p-3 mb-2 w-60 bg-light text-dark">
                        <div className="shadow-sm p-3 mb-2 bg-white rounded">
                            <div className="card-body">
                                <h5 className="card-title">{chirp.username}</h5>
                                <p className="card-subtitle text-muted">{chirp.msg}</p>
                                <br />
                                <p><small>{moment.parseZone().format('MMMM Do YYYY, h:mm:ss a')}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Timeline;
