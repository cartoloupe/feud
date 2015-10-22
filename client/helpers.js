Meteor.subscribe("items");

Template.registerHelper("equals", function (a, b) {
  return (a == b);
});

Template.registerHelper("notequals", function (a, b) {
  return (a != b);
});

Template.registerHelper( 'items', function () {
  return Items.find({});
});
