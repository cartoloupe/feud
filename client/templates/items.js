Template.items.events({
  "click .show-it": function (event) {
    Meteor.call('showItems');
    return false;
  },
  "click .hide-it": function (event) {
    Meteor.call('hideItems');
    return false;
  }
});

Template.items.rendered = function () {
  $(document).ready(function () {
    $.material.init();
  });
};
