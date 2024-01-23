import React, { useEffect, useState } from 'react';
import "./Score.css";
import Navbar from '../navbar/Navbar';
import axios from "axios";

const Score = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const fetchScoreData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/score/");
                setPlayers(response.data.players);
            } catch (error) {
                console.error("Error fetching score data:", error);
            }
        };

        fetchScoreData();
    }, []);

    return (
        <div className='score-home'>
            <div className='score'>
                <div className='nav-con'>
                    <div className='score-container'>
                        <Navbar />
                    </div>
                </div>
                <div className='score-board'>
                    <h2>Leader Board</h2>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Rank</th>
                                    <th>Email</th>
                                    <th>Score</th>
                                </tr>
                            </thead>
                            <tbody className='table-rows'>
                                {players.map((player, index) => (
                                    <tr key={player._id}>
                                        <td>{index + 1}</td>
                                        <td>{player.email}</td>
                                        <td>{player.score}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
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
}

export default Score;
