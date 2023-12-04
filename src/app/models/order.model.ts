export class OrderModel {
    id = "";
    userId = "";
    locationId = "";
    totalPrice = 0;
    orderTime: Date = new Date();
    pickupTime: Date = new Date();
}
