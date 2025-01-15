export class CreateOrderDto {
  userId: number;
  totalPrice: number;
  status?: string;
}

export class UpdateOrderDto {
  totalPrice?: number;
  status?: string;
}
