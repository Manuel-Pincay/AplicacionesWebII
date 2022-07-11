import { connect } from 'mongoose'


const dbConnection = async ()=>{
    try {
        await connect(process.env["MONGODB_CNN"] || "")
        console.log(`Database connection established`);
    } catch (error) {
        console.log(error);
        throw new Error("Error connecting to MongoDB");
    }
}


export {dbConnection}