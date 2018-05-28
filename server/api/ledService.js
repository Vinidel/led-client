const axios = require('axios');
const URL =
  'https://s59jp649x3.execute-api.ap-southeast-2.amazonaws.com/dev/led';

function setLedStatus(req, res) {
  const {status} = req.body;
  const data = {status};

  const init = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    url: `${URL}`,
    data: JSON.stringify(data)
  };

  axios(`${URL}`, init).then(response => {
    req.log.info('Service returned with', response.status, response.data);
    res.send('ok');
  });
}

function fetchLedStatus(req, res) {
  const init = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET'
  };

  axios(URL, init).then(response => {
    req.log.info('Service returned with', response.status, response.data);
    res.status(200).json({status: response.data.status});
  });
}
module.exports = {
  setLedStatus,
  fetchLedStatus
};
