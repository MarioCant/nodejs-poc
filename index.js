

var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('hello world');
}).get( '/users', function( req, res) {

  var users = require( './users.json');

  console.dir( users );

  res.send( users );

});

app.listen(3000, function() {

  getIPv4interface( function(ifc) {

    console.log( "LISTEN TO:", "http://" + ifc.address + ":3000"  );

  });


});


function getIPv4interface( cb ) {
  var os = require('os');
  var util = require("util");

  var ifaces = os.networkInterfaces();

  var result;

  Object.keys(ifaces).forEach(function (ifname) {

    ifaces[ifname].forEach(function (iface) {
      console.log( ifname ,":", util.inspect(iface));

      if( iface.family==='IPv4' && !iface.internal)
        cb(iface);

    });
  });

}
