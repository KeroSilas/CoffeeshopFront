import { OrderDetailsModel } from './orderDetails.model';

export class OrderModel {
  id = '';
  userId = '';
  locationId = '';
  totalPrice = 0;
  orderTime = new Date();
  pickupTime = new Date();
  isCompleted = false;
  isPickedUp = false;
  orderDetails: OrderDetailsModel[] = [];
}
