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
    const handleDelete = (option, index) => {
        // Create a new array of all the options except the option we want to delete
        const updatedList = options.filter((_, index) => index !== option);
        setOptions(updatedList);       
    };

    return (
        <>
        <div className="left">
            <ul>
                <li>
                    <input name="addOption" type="text" value={value.addOption} onChange={handleChange} placeholder="Add Option" />
                    <button type="button" onClick={handleAdd}>Add</button>
                </li>
                    
                {options.map((option, index) => (
                    <>
                        <li key={index}>{index + 1}. 
                            <input value={option} disabled />
                            <button onClick={() => handleDelete(index)}><i className="material-icons">close</i></button>
                        </li>
                    </>
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

const Checkbox = () => {

    const [value, setValue] = useState('');
    const [options, setOptions] = useState([]);

    const handleChange = event => {setValue(event.target.value); event.preventDefault()};
    const handleAdd = event => {setOptions([...options, value])}
    const handleDelete = (option, index) => {
        // Create a new array of all the options except the option we want to delete
        const updatedList = options.filter((_, index) => index !== option);
        setOptions(updatedList);       
    };


    return (
        <>
        <div className="left">
            <ul>
                <li>
                    <input name="addOption" type="text" value={value.addOption} onChange={handleChange} placeholder="Add Option" />
                    <button type="button" onClick={handleAdd}>Add</button>
                </li>
                    
                {options.map((option, index) => (
                    <>
                        <li key={index}>
                            <i className="material-icons">check_box_outline_blank</i> 
                            <input value={option} />
                            <button onClick={() => handleDelete(index)}><i className="material-icons">close</i></button>
                        </li>
                    </>
                ))}
            </ul>
        </div>
        
        <div>
            <ul>
                {options.map((option, index) => (
                    <li key={index}>
                        <input type="checkbox" id={index} />
                        <label htmlFor={index}>{option}</label>
                    </li>
                ))}
                
            </ul>
        </div>
        </>
    )
}


export {Dropdown, Checkbox};