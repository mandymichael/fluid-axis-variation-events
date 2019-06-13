# Fluid Axis Variation Events
A simple function to use varible font axes with JavaScript events.

## Example usage

### Change font weight based on screen width

```
// Set a range for the minimum & maximum font axis values
const minAxisValue = 200;
const maxAxisValue = 900;

// Set a range for the minimum & maximum event values
const minEventValue = 320;
const maxEventValue = 1440;

// Get the current event value
const currentEventValue = window.innerWidth;
var element = document.querySelector("p");

// Initial setting
fluidAxisVariation(minAxisValue, maxAxisValue, minEventValue, maxEventValue, window.innerWidth,"--weight", element);

// Event
window.addEventListener("resize", function(){
    fluidAxisVariation(minAxisValue, maxAxisValue, minEventValue, maxEventValue, window.innerWidth,"--weight", element);
}, false);
```

[Codepen Link](https://codepen.io/mandymichael/pen/oPoaEL)

## More examples
[variablefonts.dev](https://variablefonts.dev)
[Codepen Collection](https://codepen.io/collection/XqRLMb/)