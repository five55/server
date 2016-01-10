var http=require('http');
var path = require('path');
var async = require('async');
var socketio = require('socket.io');
var express = require('express');
var bodyParse = require("body-parser");
var router = express();
var server = http.createServer(router);
var io = socketio.listen(server);
router.use(express.static(path.resolve(__dirname, 'client')));
server.listen(process.env.PORT || 80, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});
router.get('',function(req,res){
  console.log(req.params.num);
  res.send('hello world!')
})
//mongodb
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';
var findRestaurants = function(db, callback) {
  var cursor =db.collection('restaurants').find( );
  cursor.each(function(err, doc) {
    assert.equal(err, null);
    if (doc != null) {
      console.dir(doc);
    } else {
      callback();
    }
  });
};
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  findRestaurants(db, function() {
    db.close();
  });
});
