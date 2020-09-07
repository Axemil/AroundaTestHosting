const express = require('express');
const next = require('next');
const axios = require('axios');

const generateSitemap = require('./sitemap');  

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 9091;

if(!dev) {
  await generateSitemap();
}

;(async () => {
  try {
    await app.prepare();
    const server = express();
    server.use(express.json({ extended: false }));

    // API ROUTING START
    const router = express.Router();

    router.post('/add/', [], async (req, res) => {
        const data = req.body;
        axios.post('http://142.93.190.88/crmus/lab2/853ef35e9d750fe148fe1a9cea1e379c/amo.php', data).then(response => {
          console.log(response.data, '<<< AMO RESPONSE DATA');
          res.send(response.data);
        }).catch(response => {
          console.log("Error: "+response.message);
          //res.send('POST request to the amo');
        });
      });
      
    server.use('/contact/', router);
    // API ROUTING END
    
    server.get('/regenerate-sitemap-links', async (req, res) => {
      await generateSitemap();
      res.send('OK');
    })

    server.all("*", (req, res) => {
      return handle(req, res);
    });
    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port} - env ${process.env.NODE_ENV}`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();