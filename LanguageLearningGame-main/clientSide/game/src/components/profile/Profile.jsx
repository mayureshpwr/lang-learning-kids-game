import React, { useEffect, useState } from 'react';
import "./Profile.css";
import Navbar from '../navbar/Navbar';
import scoreImg from "./images/score.png";
import axios from "axios";
import { useContext } from 'react';
import { store } from "../../App";
const Profile = () => {
    const [score, setScore] = useState(0);
    const [logEmail] = useContext(store); // Removed setLogEmail as it is not used
    const emailID = logEmail;

    useEffect(() => {
        const getScore = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/score/');
                const players = response.data.players;

                if (Array.isArray(players)) {
                    const playerdoc = players.find(player => player.email === emailID);

                    if (playerdoc) {
                        setScore(playerdoc.score);
                    } else {
                        console.log('Player not found');
                    }
                } else {
                    console.log("Invalid response format: 'players' is not an array");
                }
            } catch (error) {
                console.log(error);
            }
        };

        getScore();
    }, [emailID]);

    return (
        <div className='profile-home'>
            <div className='profile'>
                <div className='nav-con'>
                    <div className='profile-container'>
                        <Navbar />
                    </div>
                </div>
                <img src={scoreImg} alt='score' width='80%' draggable='false' />
                <div className='score-disply'>
                    <div className='score-circle'>
                        <div className='score-heading'>
                            <h1>Your total score is</h1>
                        </div>

                        <div className='score-number'>
                            <div className='circle'>
                                <h2>{score}</h2>
                            </div>
                            <h3>
                                Congratulations! {logEmail ? 'email ' : 'not set'}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <footer
                            style={{
                                textAlign: "center",
                                position: "absolute",
                                bottom: "20px",
                                left: "50%",
                                transform: "translateX(-50%)",
                                color: "black",
                                fontSize: "17px",
                            }}
                        >
                            © 2024 Mayuresh Pawar. All rights reserved.
                        </footer>
        </div>
    );
};

export default Profile;
