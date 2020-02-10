import React, {useState} from 'react';


// Test input
const Input = () => {

    const [value, setValue] = useState('');
    const handleChange = event => setValue(event.target.value)

    return (
        <input value={value} onChange={handleChange} />
    )
}

// Dropdown menu
// Each time you add a new option, a new list item should appear with that value
// The value of each option, should populate the dropdown options

const Dropdown = () => {

    const [value, setValue] = useState('');
    const [options, setOptions] = useState([]);

    const handleChange = event => {setValue(event.target.value);}
    const handleAdd = event => {setOptions([...options, value]);} 

    return (
        <>

        Add option to dropdown menu <br />
       
        <ul>
            <li>
                <input id="option" type="text" value={value} onChange={handleChange} placeholder="Add Option" /><button type="button" onClick={handleAdd}>Add</button></li>
                
                {options.map((option, index) => (
                    <><li key={index}>{index + 1}. <input defaultValue={value} disabled /></li></>
                ))}
        </ul>

        <br /><br />dropdown <br/>
        <select value={value} onChange={handleChange}>
            {options.map((option) => (
                <option>{option}</option>
            ))}
        </select>


        {console.log("value: ", value)}
        </>
    )
}


export {Input, Dropdown};