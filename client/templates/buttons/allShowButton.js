Template.allShowButton.events({
  "click .all-show": function (event) {
    Meteor.call('allShow');
    return false;
  }
});

