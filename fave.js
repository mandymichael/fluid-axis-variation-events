function fluidAxisVariation(minimumAxisValue, maximumAxisValue, minimumEventValue, maximumEventValue, eventValue, axisCustomPropertyName, element) {

	var minAxisValue = minimumAxisValue;
	var maxAxisValue = maximumAxisValue;
    var minEventValue = minimumEventValue;
	var maxEventValue = maximumEventValue;
	var currentEventValue = eventValue;

	var eventPercent = (currentEventValue - minEventValue) / (maxEventValue - minEventValue);
	var fontAxisScale = eventPercent * (minAxisValue - maxAxisValue) + maxAxisValue;

	var newAxisValue = currentEventValue > maxEventValue
	   ? minAxisValue
       : currentEventValue < minEventValue
   			? maxAxisValue
   			: fontAxisScale;

	element.style.setProperty(axisCustomPropertyName, newAxisValue);
}

module.exports = {fluidAxisVariation}