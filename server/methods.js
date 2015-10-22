Accounts.config({
  forbidClientAccountCreation: true
});

Meteor.methods({
  insertItem: function (doc) {
    item = Items.insert(doc);

    // added items should always start out hidden
    Items.update({_id: item}, {$set: {shown: false}});
  },
  showitem: function (item_id) {
    Items.update({_id: item_id}, {$set: {shown: true}});
  },
  hideitem: function (item_id) {
    Items.update({_id: item_id}, {$set: {shown: false}});
  },
  deleteitem: function (item_id) {
    Items.remove(item_id);
  },
  allShow: function () {
    Items.update({}, {$set: {shown: true}}, {multi: true});
  },
  allHide: function () {
    Items.update({}, {$set: {shown: false}}, {multi: true});
  },
  allClear: function () {
    Items.remove({});
  }

});
