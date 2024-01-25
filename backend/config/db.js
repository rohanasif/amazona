import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Database Connected:${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(`Error:${error.messsage}`.red.underline.bold);
    }
}
export default connectDB