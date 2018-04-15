const injector = require('./injector');

injector().inject(function(Payload){
  console.log('Work in progress: ' + Payload.info());
});
