import React, { useState, useEffect, useRef } from 'react';

const DropdownButton = ({ options, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const dropdownRef = useRef(null);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        onSelect(option);
        setIsOpen(false); 
    };


    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="dropdown">
            <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
                {selectedOption || 'N/A'}
            </button>
            {isOpen && (
                <div className="dropdown-options">
                    <div className="options-container">
                        {options.map((option) => (
                            <div
                                key={option}
                                className="dropdown-option"
                                onClick={() => handleOptionSelect(option)}
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownButton;
