import mongoose, { mongo } from "mongoose";

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User,",
    },
    orderItems: [
      {
        name: { type: String, requiered: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, requiered: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Product",
        },
      },
    ],
    shippingAddress: {
      address: { type: String, requiered: true },
      city: { type: String, requiered: true },
      postalCode: { type: String, requiered: true },
      country: { type: String, requiered: true },
    },
    paymentMethod: {
      type: String,
      requiered: true,
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    taxPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    shippingPrice: {
      type: Number,
      requiered: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      requiered: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      requiered: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      requiered: true,
      default: false,
    },
    deliverdAt: {
      type: Date,
    },
  },
  { timestamp: true }
);
const Order = mongoose.model("Order", orderSchema);
export default Order;
