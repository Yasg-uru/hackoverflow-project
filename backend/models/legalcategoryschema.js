import { Schema, model } from "mongoose";



const categorySchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  articles: [
    {
      title: { type: String, required: true },
      content: { type: String, required: true },
      author: { type: String },
      publicationDate: { type: Date, default: Date.now },
      tags: [{ type: String }],
      references: [{ type: String }],
      likes: { type: Number, default: 0 },
      comments: [
        {
          user: { type: String, required: true },
          text: { type: String, required: true },
          timestamp: { type: Date, default: Date.now },
        },
      ],
    },
  ],
  followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
});



// Model for Legal Awareness Categories
const Category = model("Category", categorySchema);

export default Category;
