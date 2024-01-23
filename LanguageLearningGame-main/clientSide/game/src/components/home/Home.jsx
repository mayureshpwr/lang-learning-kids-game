import React from 'react';
import "./Home.css";
import Navbar from '../navbar/Navbar';
import Language from './langaugeselection/Language';
import score from './image/score.png';

const Home = () => {
    const language = ["English", "Marathi", "Hindi"];

    return (
        <div className='home'>
            <div className='home-container'>
                <div className='home-nav-container'>
                    <Navbar />
                </div>
                <img
                    src={score}
                    alt='score'
                    width='50%'
                    draggable='false'
                    style={{ marginBottom: '-150px', marginTop: '-120px' }} 
                />

                <div className='option-container'>
                    <div className='language-container'>
                        <h2>Select The Language You Want to Learn</h2>
                        <Language lan={language} />
                    </div>
                </div>
            </div>
            <footer
                            style={{
                                textAlign: "center",
                                position: "absolute",
                                bottom: "10px",
                                left: "50%",
                                transform: "translateX(-50%)",
                                color: "black",
                                fontSize: "17px",
                            }}
                        >
                            © 2024 Mayuresh Pawar. All rights reserved.
                        </footer>
        </div>
    )
}

export default Home;
