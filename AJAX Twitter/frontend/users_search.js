const APIUtil = require("./api_util.js");

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
    const li = $(`<li><a>${users[i].username}</a></li>`);
    this.$ul.append(li);
  }
};

module.exports = UsersSearch;