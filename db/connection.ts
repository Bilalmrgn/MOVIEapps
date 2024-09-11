import mongoose from 'mongoose';
const mongodbUrl = process.env.MONGODB_URL || 'mongodb+srv://bilalmrgn:Ws7TicVLGwkqapyI@cluster0.8kazr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const ConnectionToDatabase = async () => {
    try {
        await mongoose.connect(mongodbUrl, {
        });
        console.log('MongoDB bağlantısı başarılı!');
      } catch (error) {
        console.error('MongoDB bağlantı hatası(connection.ts dosyasında):', error);
        throw error;  // Hata olduğunda üst seviyeye fırlat
      }
    };

export default ConnectionToDatabase;