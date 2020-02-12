import React, {useState} from 'react';

const Dropdown = () => {

    // initialise state
    const [options, setOptions] = useState([{content: 'Option 1'}]);

    // Pass in the input’s event and the index of the option. 
    const handleKeyDown = (event, index) => {
        // Detecting if the return key is pressed, if it is, we call createOptionAtIndex.
        if (event.key === 'Enter') {
        createOptionAtIndex(event, index);
        }
        // Detecting if the backscpace key is pressed, if it is, we call removeOptionAtIndex.
        if (event.key === 'Backspace' && options[index].content === '') {
        event.preventDefault();
        return removeOptionAtIndex(index);
        }
    }

    const createOptionAtIndex = (event, index) => {
        const newOptions = [...options]; // Create a copy of array
        newOptions.splice(index + 2, 0, {content: `Option ${index + 2}`}); // insert new empty option after the currently selected option
        setOptions(newOptions); // update the original options array
        setTimeout(() => {document.forms[0].elements[index + 1].focus()}, 0); // wait (0 milliseconds) after state updates then set focus to the new input

    }

    const updateOptionAtIndex = (event, index) => {
        const newOptions = [...options]; // Create a copy of array
        newOptions[index].content = event.target.value; // change the value of the content key with the value inside the event object
        setOptions(newOptions); // update the original options array
    }

    const removeOptionAtIndex = (index) => {
        if (index === 0 && options.length === 1) return ; // Keep remaining input visible
        setOptions(options => options.slice(0, index).concat(options.slice(index + 1, options.length)));
    }

    return (
        <>
        <form className="left">
            <ul>
                {options.map((option, index) => (
                    <>
                        <li>{index + 1}. 
                        <input
                            type="text"
                            value={option.content}
                            onKeyDown={event => handleKeyDown(event, index)}
                            onChange={event => updateOptionAtIndex(event, index)}
                            placeholder="Add Option"            
                        />
                        
                        <button type="button" onClick={() => removeOptionAtIndex(index)}><i className="material-icons">close</i></button>
                    
                        <br />
                       </li>
                    </>
                ))}
            </ul>
        </form>
        <div className="preview">
        <p>Preview</p>
        <br/>
            <input type="text" list="options" placeholder="Select option" />
            <datalist id="options">
                {options.map((option) => (
                    <option value={option.content} />
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
    const handleAdd = event => setOptions([...options, value])
    const handleDelete = (option, index) => {
        // Create a new array of all the options except the option we want to delete
        const updatedList = options.filter((_, index) => index !== option);
        setOptions(updatedList);       
    };

    return (
        <>
        <div className="left">
            <ul>
                {options.map((option, index) => (
                    <>
                        <li key={index}>
                            <i className="material-icons">check_box_outline_blank</i> 
                            <input value={option} />
                            <button type="button" onClick={() => handleDelete(index)}><i className="material-icons">close</i></button>
                        </li>
                    </>
                ))}

                 <li>
                    <i className="material-icons">check_box_outline_blank</i><input name="addOption" type="text" value={value.addOption} onChange={handleChange} placeholder="Add Option" />
                    <button type="button" onClick={handleAdd}>Add</button>
                </li>
            </ul>
        </div>
        
        <div>
            <ul>
                {options.map((option, index) => (
                    <li key={index}>
                        <input type="checkbox" id={option} />
                        <label htmlFor={option}>{option}</label>
                    </li>
                ))}
                
            </ul>
        </div>
        </>
    )
}

const MultipleChoice = () => {

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
                {options.map((option, index) => (
                    <li key={index}>
                        <i className="material-icons">radio_button_unchecked</i> 
                        <input value={option} />
                        <button onClick={() => handleDelete(index)}><i className="material-icons">close</i></button>
                    </li>
                ))}
                <li>
                    <i className="material-icons">radio_button_unchecked</i>
                    <input name="addOption" type="text" value={value.addOption} onChange={handleChange} placeholder="Add Option" />
                    <button type="button" onClick={handleAdd}>Add</button>
                </li>
            </ul>
        </div>
        
        <div>
            <ul>
                {options.map((option, index) => (
                    <li key={index}>
                        <input type="radio" id={option} />
                        <label htmlFor={option}>{option}</label>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}


const Signature = () => {

    

    return (
        <>
            <canvas id="canvasInAPerfectWorld" width="490" height="220"></canvas>
        </>
    )
}




export {Dropdown, Checkbox, MultipleChoice, Signature}; 