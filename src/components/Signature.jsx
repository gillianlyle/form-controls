import React from 'react';


const Signature = () => {


    if(window.addEventListener) {
        window.addEventListener('load', function () {
        let canvas, context, tool; let ongoingTouches = [];
        
        const init = () => {
            canvas = document.getElementById('signature'); // Find the canvas
            context = canvas.getContext('2d'); // Create drawing object
            tool = new tool_pencil(); // Pencil tool
            canvas.addEventListener('mousedown', ev_canvas, false); //event listener for mousedown
            canvas.addEventListener('mousemove', ev_canvas, false); //event listener for mousemove
            canvas.addEventListener('mouseup',   ev_canvas, false); //event listener for mouseup  
          }
        
        

        // This painting tool works like a drawing pencil which tracks the mouse 
        // movements.
        function tool_pencil () {
            let tool = this;
            this.started = false;
        
            // This is called when you start holding down the mouse button.
            // This starts the pencil drawing.
            this.mousedown = function (event) {
                context.beginPath();
                context.moveTo(event._x, event._y);
                tool.started = true;
            };
        
            // This function is called every time you move the mouse. Obviously, it only 
            // draws if the tool.started state is set to true (when you are holding down 
            // the mouse button).
            this.mousemove = function (event) {
            if (tool.started) {
                context.lineTo(event._x, event._y);
                context.stroke();
            }
            };
        
            // Called when mouse button is released
            this.mouseup = function (event) {
                if (tool.started) {
                    tool.mousemove(event);
                    tool.started = false;
                }
            };
        }
        
        // The general-purpose event handler. This function just determines the mouse 
        // position relative to the canvas element.
        const ev_canvas = event => {
            if (event.layerX || event.layerX == 0) { // Firefox
                event._x = event.layerX;
                event._y = event.layerY;
            } else if (event.offsetX || event.offsetX == 0) { // Opera
                event._x = event.offsetX;
                event._y = event.offsetY;
            }
        
            // Call the event handler of the tool.
            let func = tool[event.type];
            if (func) {
            func(event);
            }
        }
        
        init();
        
        }, false); 
    }
    

    const clearCanvas = () => {
        let canvas = document.getElementById('signature'), // find canvas
        context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height); // clear everuthing in canvas
    }

    
    return (
        <>
            <canvas id="signature" width="490" height="220"></canvas>
            <button type="button" onClick={clearCanvas}>Clear</button>
        </>
    )
}

export default Signature