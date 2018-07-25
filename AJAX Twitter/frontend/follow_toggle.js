const APIUtil = require("./api_util.js");

function FollowToggle(el, options) {
  this.$el = $(el);
  this.userId = this.$el.data("user-id") || options.userId;
  this.followState = this.$el.data("initial-follow-state") || options.followState;
  this.render();
  this.handleClick();
}

FollowToggle.prototype.render = function() {
  if (this.followState === 'unfollowed') {
    this.$el.text('Follow!');
    this.$el.prop('disabled', false);
  } else if (this.followState === 'followed') {
    this.$el.text('Unfollow!');
    this.$el.prop('disabled', false);
  } else {
    this.$el.prop('disabled', true);
  }
  // 
  // switch(this.followState){
  //   case 'unfollowed':
  //     this.$el.text('follow');
  //     this.$el.prop('disabled', false);
  //     break;
  //   case 'followed':
  //     this.$el.text('unfollow');
  //     this.$el.prop('disabled', false);
  //     break;
  //   case 'unfollowing':
  //     this.$el.text('unfollowing');
  //     this.followState = "unfollowed";
  //     this.$el.prop('disabled', true);
  //     break;
  //   case 'following':
  //     this.$el.text('following');
  //     this.followState = "followed";
  //     this.$el.prop('disabled', true);
  //     break;
  // 
  // }
};

FollowToggle.prototype.handleClick = function (){
  this.$el.on("click", e => {
    e.preventDefault();
    this.$el.prop('disabled', true);
    if (this.followState === "unfollowed") {
      this.$el.text('Following!');
      APIUtil.followUser(this.userId).then(resolve => {
        this.followState = "followed";
        this.render();
      });
    } else {
      APIUtil.unfollowUser(this.userId).then(resolve => {
        this.$el.text('Unfollowing!');
        this.followState = "unfollowed";
        this.render();
      });
    }
  });
};

module.exports = FollowToggle;