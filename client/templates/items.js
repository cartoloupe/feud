Template.items.helpers({
  numberOfItems: function () {
    return Items.find({}).count();
  },
  numberOfShown: function () {
    return Items.find({ shown: true }).count();
  },
  numberOfHidden: function () {
    return Items.find({ shown: false }).count();
  },
  items: function () {
    return Items.find({});
  },
});

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
