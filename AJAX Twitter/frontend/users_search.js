const APIUtil = require("./api_util.js");
const FollowToggle = require("./follow_toggle.js");

function UsersSearch(el) {
  this.$el = el;
  this.$input = $('.users-search-input');
  this.$ul = $('ul.users');
  this.handleInput();
}

UsersSearch.prototype.handleInput = function() {
  this.$input.on('input', e => {
    APIUtil.searchUsers(this.$input.val(), this.renderResults.bind(this));
  });
};

UsersSearch.prototype.renderResults = function(users){
  this.$ul.find('li').remove();
  for (let i = 0; i < users.length; i++) {
    const options = {
      userId: users[i].id,
      followState: users[i].followed ? "followed" : "unfollowed" 
    };
    const li = $(`<li><a href="/users/${users[i].id}">${users[i].username}</a></li>`);
    const button = $(`<button class="follow-toggle"></button>`);
    new FollowToggle(button, options);
    li.append(button);
    this.$ul.append(li);
  }
};

module.exports = UsersSearch;