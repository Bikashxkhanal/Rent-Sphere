const vehicles = [
  {
    vehicleID: 1001,
    name: "Royal Enfield Classic 350",
    price: "Rs. 2500/day",
    discount: "25%OFF",
    image: "./Assests/bike-909690_640.jpg",
    actualPrice: "Rs.3890",
    ownerShip: "ABC Rental Company",
    vehicleType: "Organizational Vehicle",
    totalvehicle: 10,

  },
  {
    vehicleID: 1002,
    name: "Electric Bike",
    price: "Rs. 1300/day",
    discount: "45%OFF",
    image: "./Assests/bicycle-5336239_640.jpg",
     actualPrice: "Rs. 2200",
    ownerShip: "XYZ Rental Company",
    vehicleType: "Organizational Vehicle",
    totalvehicle: 20,
  },
  {
    vehicleID: 1003,
    name: "Racing Bike",
    price: "Rs. 1000/day",
    discount: "15%OFF",
    image: "./Assests/bike-909834_640.png",
    actualPrice: "Rs.1400",
    ownerShip: " MountainingBike Rental Company",
     vehicleType: "Organizational Vehicle",
    totalvehicle: 5,

  },
  {
    vehicleID: 1004,
    name: "Simson motorcycle",
    price: "Rs. 3200/day",
    discount: "20%OFF",
    image: "./Assests/simson-motorcycle-7006936_640.jpg",
     actualPrice: "Rs.4000",
    ownerShip: "Sanjiv Wagle",
     vehicleType: "Private Vehicle",
    totalvehicle: 1,
  },
  {
    vehicleID: 1005,
    name: "Vespa",
    price: "Rs. 1700/day",
    discount: "50%OFF",
    image: "./Assests/vespa-5723846_640.jpg",
     actualPrice: "Rs.3400",
    ownerShip: " MountainingBike Rental Company",
     vehicleType: "Organizational Vehicle",
    totalvehicle: 12,
  },
  {
    vehicleID: 1006,
    name: "Wrangler Rubicon",
    price: "Rs. 9000/day",
    discount: "40%OFF",
    image: "./Assests/rubicon-2432058_640.jpg",
     actualPrice: "Rs.15000",
    ownerShip: " ABC Rental Company",
     vehicleType: "Organizational Vehicle",
    totalvehicle: 2,
  },
  {
    vehicleID: 1007,
    name: "Yamaha Bolt (XV950)",
    price: "Rs. 4700/day",
    discount: "50%OFF",
    image: "./Assests/yamaha.png",
     actualPrice: "Rs.9400",
    ownerShip: " Pathivara Rental Company",
     vehicleType: "Organizational Vehicle",
    totalvehicle: 4,
  },
  {
    vehicleID: 1008,
    name: " Harley-Davidson ",
    price: "Rs. 4050/day",
    discount: "10%OFF",
    image: "./Assests/honda.jpg",
     actualPrice: "Rs.4500",
    ownerShip: " Xiamon Rental Company",
     vehicleType: "Organizational Vehicle",
    totalvehicle: 7,
  },
  {
    vehicleID: 1009,
    name: "Wrangler Rubicon",
    price: "Rs. 4800/day",
    discount: "20%OFF",
    image: "./Assests/motorbike-3375430_1280.png",
     actualPrice: "Rs.6000",
    ownerShip: " TravelNepal Rental Company",
     vehicleType: "Organizational Vehicle",
    totalvehicle: 1,
  },
];

export function includeUserName() {
  const userNmae = localStorage.getItem("userName");
  document.querySelector(
    ".user-info"
  ).innerHTML = `<small>Welcome to </small><strong>${userNmae}</strong>`;
}

export function checkPath() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const links = document.querySelectorAll(".links");

  links.forEach((link) => {
    const href = link.querySelector("a").getAttribute("href").split("/").pop();
    if (href === currentPath) {
      link.classList.add("appearBackground");
    } else {
      link.classList.remove("appearBackground");
    }

    // Add click handler to update style manually (for SPA behavior)
    link.addEventListener("click", () => {
      links.forEach((Link) => {
        Link.classList.remove("appearBackground");
        link.classList.add("appearBackground");
      });
    });
  });
}

export { vehicles };
