import { Types } from "mongoose";

type Product = {
  productId: Types.ObjectId; // Consider using mongoose.Schema.Types.ObjectId here
  name: string;
  quantity: number;
  price: number;
  imageURL: string;
};

type Address = {
  addressLine1: string;
  addressLine2?: string; // Optional second address line
  city: string;
  state: string;
  zipCode: string;
  country: string;
};

type Order = {
  orderId: Types.ObjectId; // Consider using mongoose.Schema.Types.ObjectId here
  items: Product[];
  orderDate: Date;
  status: string;
  shippingAddress: Address;
  billingAddress?: Address; // Optional, can be same as shippingAddress
};

type Cancellation = {
  orderId: Types.ObjectId; // Consider using mongoose.Schema.Types.ObjectId here
  items: Product[];
  orderDate: Date;
  cancellationDate: Date;
  cancellationReason?: string; // Optional reason for cancellation
};

type Review = {
  reviewId: Types.ObjectId; // Consider using mongoose.Schema.Types.ObjectId here
  productId: Types.ObjectId;
  reviewer: string; // Consider using mongoose.Schema.Types.ObjectId here (reference reviewed item)
  rating: number;
  comment: string;
  reviewDate: Date;
};

type WishList = {
  productId: Types.ObjectId;
};

type UserType = {
  clerkId: string;
  userName: string;
  email: string;
  fullName: string;
  avatar?: string; // Optional profile picture URL
  orders?: Order[]; //Option orders array
  cancellations?: Cancellation[]; //Optional cancellations array
  reviews?: Review[]; //Optional reviews array
  wishlist?: WishList[];
  password?: string; // Hashed password (security best practice)
  phoneNumber: string | null; // Optional phone number
};

export type {
  Product,
  Address,
  Order,
  Cancellation,
  Review,
  UserType,
  WishList,
};
