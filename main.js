function calculateRental() {
    const vehicleType = document.getElementById('vehicleType').value;
    const rentalTime = document.getElementById('rentalTime').value;

    let rate;
    if (vehicleType === "car") {
        rate = 20;  // Set car rate per hour
    } else if (vehicleType === "bike") {
        rate = 10;  // Set bike rate per hour
    }

    const totalPrice = rate * rentalTime;
    document.getElementById('priceDisplay').innerText = `Total Price: $${totalPrice}`;
}
// Sample data for vehicle models and prices
const vehicles = {
    car: [
        { model: "Toyota Corolla", price: 50, image:"images/toyota.jpeg" },
        { model: "Honda Civic", price: 60 , image:"images/honda civic.jpeg"},
        { model: "Ford Mustang", price: 10, image:"images/ford mustang.jpeg"},
        { model: "Chevrolet Camaro", price: 120,image:"images/chevrolet camaro.jpeg" },
        { model: "BMW 3 Series", price: 150,image:"images/bmw 3.jpeg" }
    ],
    bike: [
        { model: "Yamaha YZF", price: 30,image:"images/yamaha yzf.jpeg" },
        { model: "Honda CBR", price: 35 ,image:"images/honda cbr.jpeg"},
        { model: "Kawasaki Ninja", price: 40,image:"images/kawasaki ninja.jpeg" },
        { model: "Suzuki GSX", price: 32,image:"images/suzuki gsx.jpeg" },
        { model: "Ducati Monster", price: 50,image:"images/ducati monster.jpeg" }
    ]
};

// Track selected vehicle
let selectedVehicle = null;

// Function to display vehicle models based on selection
function showVehicleModels() {
    const vehicleType = document.getElementById("vehicleType").value;
    const vehicleModelsDiv = document.getElementById("vehicleModels");

    vehicleModelsDiv.innerHTML = ""; // Clear previous models

    if (vehicleType && vehicles[vehicleType]) {
        vehicles[vehicleType].forEach(vehicle => {
            const vehicleDiv = document.createElement("div");
            vehicleDiv.classList.add("vehicle-item");

            vehicleDiv.innerHTML = `
                <img src="${vehicle.image}" alt="${vehicle.model}" class="vehicle-image">
                <p>${vehicle.model} - $${vehicle.price}/day</p>
                <input type="number" min="1" id="rentalDays-${vehicle.model}" placeholder="Days" style="width: 50px;"/>
                <button onclick="addVehicleToCart('${vehicle.model}', ${vehicle.price})">Add to Cart</button>
            `;

            vehicleModelsDiv.appendChild(vehicleDiv);
        });
    }
}

// Function to add a vehicle to cart with days specified
function addVehicleToCart(model, price) {
    const daysInput = document.getElementById(`rentalDays-${model}`);
    const days = parseInt(daysInput.value);

    if (!days || days <= 0) {
        alert("Please enter a valid number of days.");
        return;
    }

    const rentalDetails = { model, price, days };
    localStorage.setItem('cartItem', JSON.stringify(rentalDetails)); // Store in cart
    window.location.href = "cart.html"; // Redirect to cart page
}


