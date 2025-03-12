
        
    const freightRates = {
        "Nationwide": { "Dry Van": 9500, "Reefer": 10000, "Flatbed": 10000, "Hotshot": 7500, "Box Truck": 6500 },
        "Midwest": { "Dry Van": 9000, "Reefer": 9500, "Flatbed": 9000, "Hotshot": 6500, "Box Truck": 5500 },
        "South": { "Dry Van": 8500, "Reefer": 8500, "Flatbed": 9500, "Hotshot": 6500, "Box Truck": 5000 },
        "West": { "Dry Van": 8000, "Reefer": 8000, "Flatbed": 8000, "Hotshot": 5500, "Box Truck": 4500 },
        "East": { "Dry Van": 8000, "Reefer": 8000, "Flatbed": 7500, "Hotshot": 5000, "Box Truck": 4500 }
    };
    
    
    function updateTrucks() {
        const region = document.getElementById("region").value;
        const truckSelect = document.getElementById("truck");
        truckSelect.innerHTML = "<option value=''>Select Truck</option>";
        
     
        for (let truck in freightRates[region]) {
            let option = document.createElement("option");
            option.value = truck;
            option.textContent = truck;
            truckSelect.appendChild(option);
        }
    }
    
   
    function calculateRate() {
        const region = document.getElementById("region").value;
        const truck = document.getElementById("truck").value;
        const months = parseInt(document.getElementById("month").value);
        const result = document.getElementById("result");
        
        if (truck) {
            let baseRate = freightRates[region][truck];
            let finalRate = baseRate * (months / 3); 
            result.textContent = "$" + finalRate;
        } else {
            result.textContent = "$0";
        }
    }
    
   
    updateTrucks();
    
   
    document.getElementById("region").addEventListener("change", updateTrucks);



    function hideAll() {
  document.querySelectorAll(".content-div").forEach((div) => {
    div.style.display = "none";
  });
}

function showContent(id) {
  hideAll();
  document.getElementById(id).style.display = "flex";
}


window.onload = function () {
  let lastSection = localStorage.getItem("selectedSection") || "hello"; 
  showContent(lastSection);
};
