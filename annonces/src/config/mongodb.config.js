module.exports.config = {
    url: `mongodb://${process.env.DB_HOST}/${process.env.DB_DATABASE}`,
    flags: { useNewUrlParser: true, useUnifiedTopology: true }
};