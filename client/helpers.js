Meteor.subscribe("items");

Template.registerHelper("equals", function (a, b) {
  return (a == b);
});

Template.registerHelper("notequals", function (a, b) {
  return (a != b);
});

Template.registerHelper( 'items', function (phase) {
  return Items.find({phase: phase});
});

Template.registerHelper( 'numberOfShown', function (phase) {
  return Items.find({ shown: true, phase: phase}).count();
});

Template.registerHelper( 'numberOfHidden', function (phase) {
  return Items.find({ shown: false, phase: phase}).count();
});

Template.registerHelper( 'numberOfItems', function (phase) {
  return Items.find({phase: phase}).count();
});
