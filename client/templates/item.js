Template.item.events({
  "click .hide-it": function (event) {
    Meteor.call('hideitem', this._id);
    return false;
  },
  "click .show-it": function (event) {
    Meteor.call('showitem', this._id);
    return false;
  },
  "click .delete-it": function (event) {
    Meteor.call('deleteitem', this._id);
    return false;
  }
});

Template.item.onRendered(function() {
  console.log("invoked");
});

Template.shown_item.onRendered(function() {
  console.log("invoked");
  console.log(this);
  console.log(this.$(".stuff"));
  this.$(".stuff")[0].scrollIntoView();
});
