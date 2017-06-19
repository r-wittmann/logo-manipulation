var request = require("request");

var options = { method: 'POST',
  url: 'https://southcentralus.api.cognitive.microsoft.com/customvision/v1.0/Prediction/5dd5e486-287b-4d29-a385-7f66fd2b6842/url',
  qs: { iterationId: '22236a58-a45a-492a-9019-5f1a806f5174' },
  headers: 
   { 'postman-token': '3f68df06-4459-e6a2-55f4-cb9255428678',
     'cache-control': 'no-cache',
     'content-type': 'application/json',
     'prediction-key': '13567bb5674349b1b86660bf05df9f78' },
  body: { Url: 'http://1.bp.blogspot.com/-kLHu6zQLfMw/TdQxwBU2jfI/AAAAAAAAUB4/ZSbrhaHqmGA/s1600/boeing_Logo_10.jpg' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
