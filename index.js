const app = require('./server/server');

app.listen((process.env.PORT, process.env.IP) || 4000, () => {
  console.log('Listening');
});
