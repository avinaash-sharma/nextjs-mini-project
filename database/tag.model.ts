import { model, models, Schema } from "mongoose";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ITag {
  name: string;
  questions: number;
}

const TagSchema = new Schema<ITag>(
  {
    name: { type: String, required: true, unique: true },
    questions: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const Tag = models?.Tag || model<ITag>("Tag", TagSchema);

export default Tag;
