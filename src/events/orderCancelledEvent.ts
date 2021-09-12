import { Subjects } from "./subjects";
import { OrderStatus } from "./types/orderStatus";

export interface OrderCancelledEvent {
  subject: Subjects.OrderCancelled;
  data: {
    id: string;
    ticket: { id: string };
  };
}
