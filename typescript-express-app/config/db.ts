import mongoose from 'mongoose'
// import config from 'config'
const db:string = "mongodb://localhost:27017/short-url-service"

const connectDB = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		console.log(`MongoDB Connected to: ${db}`)
	} catch (error:any) {
		console.error(error.message)
		process.exit(1)
	}
}

export default connectDB
