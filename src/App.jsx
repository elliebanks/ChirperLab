import React, { useState } from 'react';
import Timeline from './components/Timeline';
import { BsChatDots } from "react-icons/bs";

const App = () => {

    const [username, setUsername] = useState('');
    const [msg, setMsg] = useState('');
    const [chirps, setChirps] = useState([
        {
            username: 'JoeSrBossGuy26',
            msg: 'you are a bad son Joe :('
        },
        {
            username: 'JoesMom2000',
            msg: 'you should be studying Joe Jr'
        },
        {
            username: 'rolltidejoeboy1',
            msg: 'leave me alone moM !'
        }
    ]);


    let createChirp = (e) => {
        e.preventDefault();

        let newChirp = {
            username: username,
            msg: msg
        };

        setChirps([...chirps, newChirp]);
    };

    const myChirps = chirps.map((chirp, id) => <Timeline key={id} chirp={chirp} />);


    return (
        < >
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 d-flex float-left">
                        <form className="p-3 mb-2 bg-light text-dark">
                            <h2 className="mt-2">Chirper</h2>
                            <br />
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">@</span>
                                    <input type="text" className="form-control" placeholder="Username" onChange={(e) => setUsername(e.target.value)} /><br />
                                </div>
                            </div>

                            <br />
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon2"><BsChatDots /></span>
                                    <textarea type="text" className="form-control" placeholder="My chirp..." onChange={(e) => setMsg(e.target.value)} /><br />

                                </div>
                            </div>

                            <button type="submit" className="btn btn-info" onClick={e => createChirp(e)} >Chirp!</button>
                        </form>
                        <div className="row">
                            <div className="col-sm d-flex float-right">
                                <div className="">
                                    {myChirps}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;