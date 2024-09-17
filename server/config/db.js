import mongoose from 'mongoose';


const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://rohit63:RecipeDBpw@recipeappcluster.04xmw.mongodb.net/?retryWrites=true&w=majority&appName=RecipeAppCluster');
        console.log("Connection to mongo established.");
    } catch (err) {
        console.error("Connection to MongoDB failed:", err.message);
        process.exit(1);
    }
}

export default connectDB;
