

var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(3000, function() {

  getIPv4interface();

});


function getNetworkInterfaces() {
  var os = require('os');
  var util = require("util");

  var ifaces = os.networkInterfaces();

  Object.keys(ifaces).forEach(function (ifname) {

    ifaces[ifname].forEach(function (iface) {
      console.log( ifname ,":", util.inspect(iface));

      if( iface.family==='IPv4' && !iface.internal)
        console.log( "listen to ", "http://" + iface.address + ":3000"  );

    });
  });

}
