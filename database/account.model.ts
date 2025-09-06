import { model, models, Schema, Types } from "mongoose";

export interface IAccount {
  user_id: Types.ObjectId;
  name: string;
  userImage?: string;
  password?: string;
  authenticationMethod: string;
  providerAccountId: string;
  provider: string;
}

const AccountSchema = new Schema<IAccount>(
  {
    user_id: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    name: { type: String, required: true },
    userImage: { type: String, required: true },
    provider: { type: String, required: true },
    authenticationMethod: { type: String, required: true },
    providerAccountId: { type: String, required: true },
    password: { type: String },
  },
  {
    timestamps: true,
  }
);

const Account = models?.account || model<IAccount>("Account", AccountSchema);

export default Account;
