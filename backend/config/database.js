import mongoose from "mongoose";
const connectdatabase=async function (){
    try {
        const reponse=mongoose.connect(`mongodb://127.0.0.1:27017/hackoverflow`);
        console.log(`database is connected with :${(await reponse).Connection.host}`)
    } catch (error) {
        console.log(`error is occured in connection :${error}`)
    }
}
export default connectdatabase;