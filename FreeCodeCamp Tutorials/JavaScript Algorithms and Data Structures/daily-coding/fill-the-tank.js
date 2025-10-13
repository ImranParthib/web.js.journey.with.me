function costToFill(tankSize, fuelLevel, pricePerGallon) {

    if (tankSize == fuelLevel) return "$0.00"
    if (tankSize > fuelLevel) {
        let toBfill = tankSize - fuelLevel;
        let cost = (toBfill * pricePerGallon).toFixed(2);
         
        return `$${cost}`;
    }
}

const result = costToFill(15, 10, 3.50);
console.log(result);