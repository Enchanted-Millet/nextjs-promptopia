import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('=> using existing database connection');
    return Promise.resolve();
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'share_prompt',
      useNewURLParser: true,
      useUnifiedTopology: true
    });
    isConnected = true;
    console.log('=> using new database connection');
  } catch (err) {
    console.log('=> error connecting to database', err);
    return Promise.reject(err);
  }
};
