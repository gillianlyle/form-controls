import React, {useState} from 'react';

// Dropdown menu
// Each time you add a new option, a new list item should appear with that value
// The value of each option, should populate the dropdown options
// Allow user to delete an option

const Dropdown = () => {

    const [value, setValue] = useState('');
    const [options, setOptions] = useState([]);

    const handleChange = event => setValue(event.target.value);
    const handleAdd = event => setOptions([...options, value]);
    const handleDelete = (index, option) => setOptions(options.filter(option => option !== index));


    return (
        <>
        <div className="left">
            <ul>
                <li>
                    <input name="addOption" type="text" value={value.addOption} onChange={handleChange} placeholder="Add Option" />
                    <button type="button" onClick={handleAdd}>Add</button>
                </li>
                    
                {options.map((option, index) => (
                    <><li key={index}>{index + 1}. <input defaultValue={value} disabled /><button onClick={() => handleDelete(option)}>x</button></li></>
                ))}
            </ul>
        </div>
        
        <div>
            <input type="text" list="options" placeholder="Select option" />
            <datalist id="options">
                {options.map((option) => (
                    <option value={option} />
                ))}
            </datalist>
        </div>
        </>
    )
}


export {Dropdown};