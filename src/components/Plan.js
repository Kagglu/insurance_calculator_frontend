import React, { useState, useEffect } from 'react';

const Plan = ({ plan }) => {
    const plan_id = plan.id;

    useEffect(() => {
        const metal_color = () => {
            if (plan.metal_level === "Bronze") {
                const coverageLevel = document.getElementById('coverage-level-' + plan_id);
                if (coverageLevel) {
                    coverageLevel.classList.add('bronze');
                }
            }
        }
        metal_color();
    }, [plan.metal_level]);

    return (
        <div className='plan'>
            <header className='header'>
                <a href={plan.brochure_url} target="_blank" rel="noreferrer">{plan.name}</a>
            </header>
            <div className='plan-details'>
                <table>
                    <tr>
                        <td>Estimated monthly premium:</td>
                        <td><b>${plan.premium}</b></td>
                    </tr>
                    <tr>
                        <td>Annual deductible: </td>
                        <td><b>${plan.deductibles[0].amount}</b></td>
                    </tr>
                    <tr>
                        <td>Out-of-Pocket Limit: </td>
                        <td><b>${plan.moops[0].amount}</b></td>
                    </tr>
                    <tr>
                        <td>Type: </td>
                        <td><b>{plan.type}</b></td>
                    </tr>
                    <tr>
                        <td>Coverage Level: </td>
                        <td><div id={'coverage-level-' + plan_id}>{plan.metal_level}</div></td>
                    </tr>
                </table>
                <div>
                    <button className='button expand-button'>
                        Expand details ↓
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Plan;