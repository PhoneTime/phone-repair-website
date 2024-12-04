const models = {
    apple: {
        iphone: [
            "iPhone 15 Pro Max",
            "iPhone 15 Pro",
            "iPhone 15 Plus",
            "iPhone 15",
            "iPhone 14 Pro Max",
            "iPhone 14 Pro",
            "iPhone 14 Plus",
            "iPhone 14",
            // Add other models here...
            "iPhone SE"
        ],
        ipad: ["iPad Pro", "iPad Air", "iPad Mini", "iPad"]
    },
    samsung: ["Galaxy S23", "Galaxy S22", "Galaxy Note 20"],
    google: ["Pixel 7", "Pixel 6", "Pixel 5"],
    oppo: ["Find X5", "Reno8 Pro", "A57"]
};

const colors = {
    "iPhone 15 Pro Max": ["Black", "Silver", "Blue", "Titanium"],
    "iPhone 14 Pro Max": ["Gold", "Purple", "Silver", "Black"],
    "Galaxy S23": ["Green", "Lavender", "White", "Phantom Black"],
    // Add colors for other models...
};

const repairPrices = {
    front_screen: 299,
    battery: 129,
    back_glass: 249,
    charging_port: 99,
    rear_camera: 199,
    camera_lens: 99,
    front_camera: 129,
    ear_speaker: 89,
    loud_speaker: 109
};

function updateCategories() {
    const brand = document.getElementById("brand").value;
    const categorySelect = document.getElementById("category");
    const modelSelect = document.getElementById("model");

    categorySelect.innerHTML = '<option value="">-- Select Category --</option>';
    modelSelect.innerHTML = '<option value="">-- Select Model --</option>';

    if (brand === "apple") {
        categorySelect.innerHTML += `<option value="iphone">iPhone</option>`;
        categorySelect.innerHTML += `<option value="ipad">iPad</option>`;
    }
}

function updateModels() {
    const brand = document.getElementById("brand").value;
    const category = document.getElementById("category").value;
    const modelSelect = document.getElementById("model");

    modelSelect.innerHTML = '<option value="">-- Select Model --</option>';

    if (models[brand] && models[brand][category]) {
        models[brand][category].forEach((model) => {
            const option = document.createElement("option");
            option.value = model;
            option.textContent = model;
            modelSelect.appendChild(option);
        });
    }
}

function updateColors() {
    const model = document.getElementById("model").value;
    const colorSelect = document.getElementById("color");

    colorSelect.innerHTML = '<option value="">-- Select Color --</option>';

    if (colors[model]) {
        colors[model].forEach((color) => {
            const option = document.createElement("option");
            option.value = color;
            option.textContent = color;
            colorSelect.appendChild(option);
        });
    }
}

function showRepairPrice() {
    const model = document.getElementById("model").value;
    const color = document.getElementById("color").value;
    const part = document.getElementById("part").value;
    const priceDiv = document.getElementById("repair-price");
    const bookingButtonDiv = document.getElementById("booking-button");

    if (!model || !color || !part) {
        priceDiv.textContent = "Please select all options.";
        bookingButtonDiv.innerHTML = "";
        return;
    }

    const price = repairPrices[part];
    priceDiv.textContent = `Repair Price for ${model} (${color} - ${part.replace(/_/g, " ")}): $${price}`;
    bookingButtonDiv.innerHTML = `<button onclick="showBookingForm('${model}', '${color}', '${part}')">Book Now</button>`;
}

function showBookingForm(model, color, part) {
    document.getElementById("booking").style.display = "block";
    document.getElementById("customer-device").value = model;
    document.getElementById("customer-color").value = color;
    document.getElementById("customer-part").value = part;
    window.scrollTo(0, document.getElementById("booking").offsetTop);
}

function submitBooking(event) {
    event.preventDefault();

    const name = document.getElementById("customer-name").value;
    const phone = document.getElementById("customer-phone").value;
    const address = document.getElementById("customer-address").value;
    const device = document.getElementById("customer-device").value;
    const color = document.getElementById("customer-color").value;
    const part = document.getElementById("customer-part").value;

    const emailBody = `
        Name: ${name}
        Phone: ${phone}
        Address: ${address}
        Device: ${device} (${color})
        Repair Part: ${part}
    `;

    window.open(`mailto:phone.time.au@gmail.com?subject=Repair Booking&body=${encodeURIComponent(emailBody)}`);
    alert("Your booking request has been submitted!");
}
