import { vehicles } from "./vehicleData.js";
import { checkPath } from "./vehicleData.js";
import { includeUserName } from "./vehicleData.js";




    const grid = document.getElementById("vehicleGrid");

    vehicles.forEach(vehicle => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${vehicle.image}" alt="${vehicle.name}" />
        <div class="card-content">
          <h3>${vehicle.name}</h3>
          <p class="price">${vehicle.price} <span class="fullDetail"><a href = "./vehicledetail.html?vehicleID= ${vehicle.vehicleID} "> View Details</a></span></p>
        </div>
      `;
    
      grid.appendChild(card);
    });


    if(localStorage.getItem("userLoginStatus") !== "true" ) {
      window.location.href = "login.html";
    }

    checkPath();
    includeUserName();
    

