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

Template.shown_item.onRendered(function() {
  $(".stuff").removeClass('shown');
  this.$(".stuff").addClass('shown');
  $('html,body').animate({
    scrollTop: this.$(".stuff").offset().top},
    'slow'
  );
  this.$(".stuff").animate({
    backgroundColor: "#faa"
  }, 1000);
});
