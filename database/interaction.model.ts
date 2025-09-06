import { model, models, Schema, Types } from "mongoose";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IInteraction {
  user: Types.ObjectId;
  action: string;
  actionId: Types.ObjectId;
  actionType: "question" | "answer";
}

const InteractionSchema = new Schema<IInteraction>(
  {
    user: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    action: { type: String, required: true },
    actionId: { type: Schema.Types.ObjectId, required: true }, // questionId || answerId || userId
    actionType: { type: String, required: true, enum: ["question", "answer"] },
  },
  {
    timestamps: true,
  }
);

const Interaction =
  models?.Interaction || model<IInteraction>("Interaction", InteractionSchema);

export default Interaction;
