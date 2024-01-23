import React, { useState } from 'react';
import "./form.css";
import axios from "axios";

const QuestionForm = () => {
    const [formData, setFormData] = useState({
        language: 'English',
        question: '',
        level: 'easy',
        option: ['', '', '', ''],
        correct: 0,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleOptionChange = (index, e) => {
        const newOptions = [...formData.option];
        newOptions[index] = e.target.value;

        setFormData((prevData) => ({
            ...prevData,
            option: newOptions,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to the server)
        try {
            await axios.post("http://localhost:5000/api/addquestion", formData)
                .then((response) => {
                    console.log(response);
                    setFormData({
                        language: 'English',
                        question: '',
                        level: 'easy',
                        option: ['', '', '', ''],
                        correct: 0,
                    })
                }).catch(error => {
                    console.log(error)
                })

        } catch (error) {
            console.log(error)
        }
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit} className='question-form'>
            <div>
                <label>
                    Language:
                </label>
                <select name="language" value={formData.language} onChange={handleChange}>
                    <option value="English">English</option>
                    <option value="Marathi">Marathi</option>
                    <option value="Hindi">Hindi</option>
                </select>
            </div>

            <div className='question-container'>
                <div className='question'>
                    <label>
                        Question:
                    </label>
                    <div>
                        <textarea name="question" value={formData.question} onChange={handleChange} />
                    </div>
                </div>
            </div>


            <div className='level-container'>
                <div className='levels'>
                    <label>
                        Level:
                    </label>
                    <div className='level'>
                        <select name="level" value={formData.level} onChange={handleChange}>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>
                </div>

            </div>

            <div>
                <label>
                    Options:
                </label>
                <div className='options-container'>
                    <div className='options'>
                        {formData.option.map((option, index) => (

                            < input className='question-options'
                                key={index}
                                type="text"
                                value={option}
                                onChange={(e) => handleOptionChange(index, e)}
                            />
                        ))}
                    </div>

                </div>
            </div>

            <div>
                <label>
                    Correct Option:
                </label>
                <div>
                    <select name="correct" value={formData.correct} onChange={handleChange}>
                        {formData.option.map((_, index) => (
                            <option key={index} value={index}>
                                Option {index + 1}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default QuestionForm;
