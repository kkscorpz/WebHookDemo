// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
  const intentName = req.body.queryResult.intent.displayName;

  if (intentName === 'WebHookDemo') {
    const responseText = 'this is sample WebHookDemo! response from your Node.js ';

    return res.json({
      fulfillmentText: responseText,
    });
  } else {
    return res.json({
      fulfillmentText: 'Intent not handled in webhook.',
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
