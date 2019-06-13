function fluidAxisVariation(minimumAxisValue, maximumAxisValue, minimumEventValue, maximumEventValue, eventValue, axisCustomPropertyName, element) {

	const minAxisValue = minimumAxisValue;
	const maxAxisValue = maximumAxisValue;
    const minEventValue = minimumEventValue;
	const maxEventValue = maximumEventValue;
	const currentEventValue = eventValue;

	const eventPercent = (currentEventValue - minEventValue) / (maxEventValue - minEventValue);
	const fontAxisScale = eventPercent * (minAxisValue - maxAxisValue) + maxAxisValue;

	const newAxisValue = currentEventValue > maxEventValue
	   ? minAxisValue
       : currentEventValue < minEventValue
   			? maxAxisValue
   			: fontAxisScale;

	element.style.setProperty(axisCustomPropertyName, newAxisValue);
}