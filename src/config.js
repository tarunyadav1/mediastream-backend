const config = {
  port: process.env.PORT || 4000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri:
    process.env.MONGODB_URI ||
    "mongodb+srv://tarunyadav:tarunyadav@cluster0.6emvt.mongodb.net/mediastream?retryWrites=true&w=majority",
};

export default config;
