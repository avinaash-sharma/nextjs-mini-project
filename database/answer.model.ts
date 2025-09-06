import { model, models, Schema, Types } from "mongoose";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IAnswer {
  author: Types.ObjectId;
  question: Types.ObjectId;
  upVotes: number;
  downVotes: number;
  content: string;
}

const AnswerSchema = new Schema<IAnswer>(
  {
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    question: { type: Schema.Types.ObjectId, ref: "Question", required: true },
    upVotes: { type: Number, default: 0 },
    downVotes: { type: Number, default: 0 },
    content: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Answer = models?.Answer || model<IAnswer>("Answer", AnswerSchema);

export default Answer;
