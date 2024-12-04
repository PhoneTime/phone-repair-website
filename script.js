function showPrices() {
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const pricesDiv = document.getElementById('repair-prices');

    if (model) {
        pricesDiv.innerHTML = `
            <h3>Repair Prices for ${brand} ${model}:</h3>
            <ul>
                <li>Screen Replacement: $299</li>
                <li>Battery Replacement: $129</li>
                <li>Back Cover Repair: $349</li>
            </ul>
        `;
    } else {
        pricesDiv.innerHTML = '<p>Please enter a phone model to view prices.</p>';
    }
}

function bookAppointment() {
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const confirmationDiv = document.getElementById('appointment-confirmation');

    if (date && time) {
        confirmationDiv.innerHTML = `<p>Your appointment is confirmed for ${date} at ${time}.</p>`;
    } else {
        confirmationDiv.innerHTML = '<p>Please select a date and time.</p>';
    }
}
