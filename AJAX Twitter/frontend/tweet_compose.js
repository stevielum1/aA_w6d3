const APIUtil = require("./api_util.js");

function TweetCompose (el){
  this.$el = $(el);
  this.bindEvent();
}

TweetCompose.prototype.bindEvent = function(){
  this.$el.on("submit", this.submit.bind(this));
};

TweetCompose.prototype.clearInput = function(){
  $('.tweet-compose textarea').val("");
};

TweetCompose.prototype.handleSuccess = function(){
  this.clearInput();
  $(':input').prop('disabled', false);
};

TweetCompose.prototype.submit = function(e){
  e.preventDefault();
  const body = $(e.currentTarget).serializeJSON();
  $(':input').prop('disabled', true);
  APIUtil.createTweet(body,this.handleSuccess.bind(this));
};

module.exports = TweetCompose;