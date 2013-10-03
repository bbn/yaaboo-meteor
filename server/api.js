Router.map(function() { 
  this.route('api/messages', {
    where: 'server',
    handler: function () {
      var request = this.request;
      var response = this.response;
      
      response.write(JSON.stringify(Messages.find().fetch()))
      // do whatever
    }
  });
});