import React, { useState } from 'react';

const AgeSelector = ({ onAgeChange }) => {
    const [age, setAge] = useState('');
    const [isValid, setIsValid] = useState(true);

    const handleAgeChange = (e) => {
        const parsedAge = parseInt(e.target.value, 10);
        if ((parsedAge > 0 && parsedAge < 115 && !isNaN(e.target.value)) || e.target.value === "") {
            setAge(e.target.value);
            onAgeChange(parsedAge);
        }
    };

    return (
        <div className="pair">
            <label htmlFor='age' className='text-label'>Enter your age:  </label>
            <input
                type="text"
                id="age"
                value={age}
                className={isValid ? '' : 'invalid-input'}
                onChange={handleAgeChange}
            />
        </div>
    )
}

export default AgeSelector;