Template.addItemModal.events({
  "submit .new-item": function (event) {
    var commaSeparator = /\s*,\s*/;

    var name = event.target.name.value;
    var details = event.target.details.value.split(commaSeparator);

    Meteor.call('insertItem', {
      name: name,
      details: details
    });

    event.target.name.value = "";
    $(event.target.details).clearOptions();

    return false;
  }
});

Template.addItemModal.rendered = function () {
  $(document).ready(function () {
    $.material.init();

    $('.input-list').selectize({
      create: function (input) {
        return {
          value: input,
          text: input
        };
      },
      plugins: [
        'remove_button'
      ]
    });
  });
};
