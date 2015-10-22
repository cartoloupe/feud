Template.allHideButton.events({
  "click .all-hide": function (event) {
    Meteor.call('allHide');
    return false;
  }
});

