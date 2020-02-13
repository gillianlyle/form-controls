import React, {useState} from 'react'

const Checkbox = () => {

    // initialise state
    const [label, setLabel] = useState('')
    const [options, setOptions] = useState([{content: '', placeholder: `Add option`}]);

    const handleChange = (event) => setLabel(event.target.value)

    // Pass in the input’s event and the index of the option. 
    const handleKeyDown = (event, index) => {
        // Detecting if the return key is pressed, if it is, call createOptionAtIndex.
        if (event.key === 'Enter') {
        createOptionAtIndex(event, index);
        }
        // Detecting if the backspace key is pressed, if it is, call removeOptionAtIndex.
        if (event.key === 'Backspace' && options[index].content === '') {
        event.preventDefault();
        return removeOptionAtIndex(index);
        
        }
    }

    const createOptionAtIndex = (event, index) => {
        const newOptions = [...options]; // Create a copy of array
        newOptions.splice(index + 2, 0, {placeholder: `Add option`}); // insert new empty option after the currently selected option
        setOptions(newOptions); // update the original options array
        setTimeout(() => {document.getElementById(index + 1).focus()}, 0); // wait (0 milliseconds) after state updates then set focus to the new input
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

            <input value={label} onChange={handleChange} placeholder="Question"/>

            <ul>
                {options.map((option, index) => (
                    <>
                        <li><i className="material-icons">check_box_outline_blank</i> 
                        <input
                            id={index}
                            type="checked"
                            value={option.content}
                            onKeyDown={event => handleKeyDown(event, index)}
                            onChange={event => updateOptionAtIndex(event, index)}
                            placeholder={option.placeholder}        
                        />
                        
                        <button type="button" onClick={() => removeOptionAtIndex(index)}><i className="material-icons">close</i></button>
                       </li>
                    </>
                ))}
            </ul>
        </form>
        <div className="preview">
        <p>Preview</p>
        <br/>
            <label htmlFor="options">{label && label + ": "}</label>

            <ul id="chooseOptions">
                {options.map((option, index) => (
                     <li>
                        <input type="checkbox" id={"option-" +index + 1} name="checkboxOptions" />
                        <label for={"cb-option-" + index + 1}>{option.content}</label>
                     </li>
                ))}
            </ul>
        </div>

        </>
    )   
}

export default Checkbox;