/*
 * GET home page.
 */

exports.home = function(req, res){
  res.render('home');
};

exports.timer = function(req, res){
  var redis=require('redis');
  var client=redis.createClient();
  var moment=require('moment');
  client.get("time_clock", function (err, reply) {
    time=reply.toString();
    client.get("time_predicted", function (err, replier) {
      mom=replier.toString();
      client.get("time_topic", function (err, repliest) {
        topical=repliest.toString(); 
        console.log(topical);
        res.render('time', {watch: time, moment: mom, topic: topical});
      });
    });
  });
}

