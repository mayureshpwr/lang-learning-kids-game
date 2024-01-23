import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Language(props) {
    const navigate = useNavigate();
    const [selectedLanguage, setSelectedLanguage] = useState("");
    const email = props.useEmail;
    const handleButtonClick = (lang) => {
        setSelectedLanguage(lang);

        // Delay the navigation to "/test" by 10 seconds
        setTimeout(() => {
            navigate("/test", { state: { selectedLanguage: lang, email: email } });
        }, 1000); // 10 seconds in milliseconds
    };

    return (
        <div>
            {props.lan.map((lang, index) => (
                <button
                    key={index}
                    type="button"
                    onClick={() => handleButtonClick(lang)}
                >
                    {lang}
                </button>
            ))}
            <p>
                Selected Language:
                <h2>{selectedLanguage}</h2>
            </p>
        </div>
    );
}

export default Language;
