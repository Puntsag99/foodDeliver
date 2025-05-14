import { Schema, model, Model, models } from "mongoose";

enum UserRoleEnum {
  USER = "User",
  ADMIN = "Admin",
}

type UserSchemaType = {
  email: string;
  password: string;
  phoneNumber: string;
  role: UserRoleEnum;
  orderedFoods: Schema.Types.ObjectId;
  ttl: Date;
  isVerified: boolean;
  address: string;
};

const UserSchema = new Schema<UserSchemaType>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, default: "" },
  address: { type: String, default: "" },
  isVerified: { type: Boolean, default: false },
  orderedFoods: [
    { type: Schema.Types.ObjectId, ref: "FoodOrder", required: true },
  ],
  phoneNumber: { type: String, default: "" },
  role: {
    type: String,
    enum: Object.values(UserRoleEnum),
    default: UserRoleEnum.USER,
  },
  ttl: { type: Date, default: Date.now() + 24 * 60 * 60 * 1000 },
});

export const UserModel: Model<UserSchemaType> =
  models["User"] || model("User", UserSchema);
