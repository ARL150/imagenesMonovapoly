export default ({ env }) => ({
  app: {
    keys: env.array('APP_KEYS', ['claveSecreta123', 'otraClaveSecreta456']),
  },
});
