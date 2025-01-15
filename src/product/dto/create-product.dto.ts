export class CreateProductDto {
  name: string;
  price: number;
  info?: string;
  isActive?: boolean;
  quantity: number;
}

export class UpdateProductDto {
  name?: string;
  price?: number;
  info?: string;
  isActive?: boolean;
  quantity?: number;
}
