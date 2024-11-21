module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://crackadmission.com', // Optional for production
  https: {
    key: env('SSL_KEY_PATH'),
    cert: env('SSL_CERT_PATH'),
  },
});
