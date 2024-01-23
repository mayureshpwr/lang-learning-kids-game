import React from 'react';
import "./addquestion.css";
import Navbar from '../navbar/Navbar';
import QuestionForm from './QuestionForm';

const Addquestion = () => {

    return (
        <div className='add-home'>
            
            <div className='add'>
                <div className='nav-con'>
                    <div className='add-container'>
                        <Navbar />
                    </div>
                    <h1>Add your Question</h1>
                </div>
                <div className='add-questions'>
                    
                    <QuestionForm />
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
    )
}

export default Addquestion;