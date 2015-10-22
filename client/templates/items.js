Template.items.helpers({
  numberOfItems: function (phase) {
    return Items.find({phase: phase}).count();
  },
  numberOfShown: function (phase) {
    return Items.find({ shown: true, phase: phase}).count();
  },
  numberOfHidden: function () {
    return Items.find({ shown: false }).count();
  },
  items: function (phase) {
    return Items.find({phase: phase});
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
