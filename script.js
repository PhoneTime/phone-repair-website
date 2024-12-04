// Models for each brand
const models = {
    apple: ["iPhone 14", "iPhone 13 Pro", "iPhone 12"],
    samsung: ["Galaxy S23", "Galaxy Note 20", "Galaxy A72"],
    huawei: ["P50 Pro", "Mate 40", "Nova 9"]
};

// Prices for parts
const repairPrices = {
    screen: { apple: 299, samsung: 249, huawei: 199 },
    battery: { apple: 129, samsung: 109, huawei: 89 },
    back: { apple: 349, samsung: 299, huawei: 199 }
};

// Update models dropdown based on selected brand
function updateModels() {
    const brand = document.getElementById("brand").value;
    const modelSelect = document.getElementById("model");

    // Clear previous options
    modelSelect.innerHTML = '<option value="">-- Select Model --</option>';

    if (brand && models[brand]) {
        models[brand].forEach((model) => {
            const option = document.createElement("option");
            option.value = model;
            option.textContent = model;
            modelSelect.appendChild(option);
        });
    }
}

// Show repair price
function showRepairPrice() {
    const brand = document.getElementById("brand").value;
    const model = document.getElementById("model").value;
    const part = document.getElementById("part").value;
    const priceDiv = document.getElementById("repair-price");

    if (!brand || !model || !part) {
        priceDiv.textContent = "Please select all options.";
        return;
    }

    const price = repairPrices[part][brand];
    priceDiv.textContent = `Repair Price for ${model} (${part.replace(/^\w/, c => c.toUpperCase())}): $${price}`;
}
