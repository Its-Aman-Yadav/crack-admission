module.exports = [
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://13.235.104.162:8080', 'http://localhost:3000/', "http://3.108.126.204"], // Adjust this to your frontend's origin
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      credentials: true,
    },
  },
  'strapi::security',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
