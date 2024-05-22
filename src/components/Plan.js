import React, { useEffect } from 'react';

const Plan = ({ plan, aptc }) => {
    const plan_id = plan.id;

    useEffect(() => {
        const metal_color = () => {
            const coverageLevel = document.getElementById('coverage-level-' + plan_id);
            coverageLevel.className = '';
            if (plan.metal_level === "Bronze") {
                if (coverageLevel) {
                    coverageLevel.classList.add('bronze');
                }
            } else if (plan.metal_level === "Silver") {
                if (coverageLevel) {
                    coverageLevel.classList.add('silver');
                }
            } else if (plan.metal_level === "Gold") {
                if (coverageLevel) {
                    coverageLevel.classList.add('gold');
                }
            } else if (plan.metal_level === "Platinum") {
                if (coverageLevel) {
                    coverageLevel.classList.add('platinum');
                }
            } else if (plan.metal_level === "Catastrophic") {
                if (coverageLevel) {
                    coverageLevel.classList.add('catastrophic');
                }
            }
        }
        metal_color();
    }, [plan.metal_level, plan_id]);

    return (
        <div className='plan'>
            <header className='header'>
                <a href={plan.brochure_url} target="_blank" rel="noreferrer">{plan.name}</a>
            </header>
            <div className='plan-details'>
                <table>
                    <tbody>
                        <tr>
                            <td>Estimated monthly premium: </td>
                            <td><b>${ aptc > 0 ? plan.premium_w_credit : plan.premium}</b></td>
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
                    </tbody>
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