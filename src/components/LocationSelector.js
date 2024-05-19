import React, { useState } from 'react';
import DropdownButton from './DropdownButton';
import axios from 'axios';

const LocationSelector = ({ onStateChange, onZipcodeChange, onCountyFipsChange }) => {
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [invalidState, setInvalidState] = useState(false);
    const [counties, setCounties] = useState([]);

    const fetchCountyFips = async (zip) => {
        try {
            const response = await axios.get('https://api.kagglu.com/countyfips', {
              params: { zipcode: zip }
            });
            console.log(response.data.counties);
            if (response.data.counties.length > 1) {
                setCounties(response.data.counties);

            } else {
                onCountyFipsChange(response.data.counties[0].fips);
            }
        } catch (error) {
            console.error("Error getting county fips:", error);
        } 
      };

    const handleStateChange = (e) => {
        if (disallowed_states.includes(e)) {
            document.getElementById('state-div').classList.add('invalid-input');
            setInvalidState(true);
        } else {
            document.getElementById('state-div').classList.remove('invalid-input');
            setInvalidState(false);
        }
        setState(e);
        onStateChange(e);
        setZipcode('');
        setCounties([]);
    };

    const handleZipcodeChange = (e) => {
        setZipcode(e.target.value);
        if (e.target.value.length == 5) {
            onZipcodeChange(e.target.value);
            fetchCountyFips(e.target.value);
        }
        setCounties([]);
    }

    const handleCountyChange = (e) => {
        for (let i = 0; i < counties.length; i++) {
            if (counties[i].name === e) {
                onCountyFipsChange(counties[i].fips);
                break;
            }
        }
    }

    const states = ['AL', 'AK', 'AZ', 'AR', 'AS', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL',
                    'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME',
                    'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
                    'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI',
                    'SC', 'SD', 'TN', 'TX', 'TT', 'UT', 'VT', 'VA', 'VI', 'WA', 'WV',
                    'WI', 'WY'];

    const disallowed_states = ['CA', 'CO', 'CT', 'DC', 'ID', 'KY', 'ME', 'MD', 'MA',
                    'MN', 'NV', 'NJ', 'NM', 'NY', 'PA', 'RI', 'VT', 'VA', 'WA'];

    return (
        <div>
            <div id="state-div" className="pair">
                <label htmlFor='state' className='text-label'>Select your state:   </label>
                <DropdownButton options={states} onSelect={handleStateChange} defaultText={'N/A'}/>
                {invalidState && <span style={{ marginLeft: '10px' }}>Unsupported state.</span>}
            </div>

            {state &&
            <div className="pair">
                <label htmlFor='zipcode' className='text-label'>Enter your zipcode:   </label>
                <input
                    type="text"
                    id="zipcode"
                    value={zipcode}
                    onChange={handleZipcodeChange}
                />
            </div>
            }

            {zipcode.length == 5 && counties.length > 1 &&
            <div className="pair">
                <label htmlFor='county' className='text-label'>Select your county: </label>
                <DropdownButton options={counties.map((county) => county.name)} onSelect={handleCountyChange} defaultText={'No county selected'}/>
            </div>
            }
      </div>
    )
}

export default LocationSelector;