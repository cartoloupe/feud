Template.allClearButton.events({
  "click .all-clear": function (event) {
    Meteor.call('allClear');
    return false;
  }
});

