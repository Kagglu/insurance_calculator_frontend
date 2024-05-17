import React, { useState } from 'react';

const IncomeSelector = ({ onIncomeChange }) => {
    const [income, setIncome] = useState('');
    const [isValid, setIsValid] = useState(true);

    const handleIncomeChange = (e) => {
        const parsedIncome = parseInt(e.target.value, 10);
        if ((parsedIncome > 0 && !isNaN(e.target.value)) || e.target.value === "") {
            setIncome(e.target.value);
            onIncomeChange(e.target.value);
        }
    };

    return (
        <div className="pair">
            <label htmlFor='income' className='text-label'>Enter your income:  </label>
            <input
                type="text"
                id="income"
                value={income}
                className={isValid ? '' : 'invalid-input'}
                onChange={handleIncomeChange}
                />
        </div>
    )
}

export default IncomeSelector;