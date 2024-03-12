import React from 'react'
import './BranchSelect.css'

const BranchSelect = ({ value, onChange }) => {
  return (
    <div className='branch-select-container'>
        <label className="branch-select-label" htmlFor='branchSelect'>Branch:</label>
        <div className='custom-select-wrapper'>
            <select className='custom-select' id='branchSelect' value={value} onChange={onChange}>
                <option value="J19">J19</option>
                <option value="J21">J21</option>
            </select>
        </div>
    </div>
  );
};

export default BranchSelect;
