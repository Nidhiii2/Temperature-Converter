function convertTemperature() {
    const temp = document.getElementById('inputTemperature').value;
    const unit = document.getElementById('inputUnit').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(temp) || temp === '') {
        resultDiv.textContent = 'Please enter a valid number!';
        return;
    }

    const temperature = parseFloat(temp);
    let convertedTemp1 = '';
    let convertedTemp2 = '';
    let unit1 = '';
    let unit2 = '';

    switch(unit) {
        case 'Celsius':
            convertedTemp1 = ((temperature * 9/5) + 32).toFixed(2);
            convertedTemp2 = (temperature + 273.15).toFixed(2);
            unit1 = 'Fahrenheit';
            unit2 = 'Kelvin';
            break;
        case 'Fahrenheit':
            convertedTemp1 = ((temperature - 32) * 5/9).toFixed(2);
            convertedTemp2 = (((temperature - 32) * 5/9) + 273.15).toFixed(2);
            unit1 = 'Celsius';
            unit2 = 'Kelvin';
            break;
        case 'Kelvin':
            convertedTemp1 = (temperature - 273.15).toFixed(2);
            convertedTemp2 = (((temperature - 273.15) * 9/5) + 32).toFixed(2);
            unit1 = 'Celsius';
            unit2 = 'Fahrenheit';
            break;
    }

    resultDiv.innerHTML = `
        <p>Converted Temperatures:</p>
        <p>${convertedTemp1} ${unit1}</p>
        <p>${convertedTemp2} ${unit2}</p>
    `;
}