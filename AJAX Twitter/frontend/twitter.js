const FollowToggle = require("./follow_toggle.js");
const UsersSearch = require("./users_search.js");
const TweetCompose = require("./tweet_compose.js");

$( () => {
  $('button.follow-toggle').each( (idx, el) => {
    new FollowToggle(el);
  });
  new UsersSearch($('.users-search'));
  new TweetCompose($('.tweet-compose'));
});