import mongoose from "mongoose";

const bankUsersSchema = new mongoose.Schema({
  name: { type: String },
  idNumber: { type: String, required: true, unique: true },
  cash: { type: Number, required: true },
  credit: { type: Number, required: true },
});

// userSchema.statics.printSome = function () {
//   console.log({ printSome: this });
// };

// userSchema.methods.instanceOf = function () {
//   console.log({ instanceOf: this });
// };

const bankUsers = mongoose.model("bankUsers", bankUsersSchema);

export { bankUsers };
