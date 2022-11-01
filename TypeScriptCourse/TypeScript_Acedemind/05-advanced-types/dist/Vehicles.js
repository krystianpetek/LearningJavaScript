class Car {
    drive() {
        console.log("Driving a car...");
    }
}
class Truck {
    drive() {
        console.log("Driving a truck...");
    }
    loadCargo(amount) {
        console.log("Loading cargo..." + amount);
    }
}
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
export { useVehicle, Truck, Car };
//# sourceMappingURL=Vehicles.js.map