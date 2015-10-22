Template.addItemModal.events({
  "submit .new-item": function (event) {
    var commaSeparator = /\s*,\s*/;

    var name = event.target.name.value;
    var details = event.target.details.value.split(commaSeparator);
    var phase = event.target.phase.value

    Meteor.call('insertItem', {
      name: name,
      details: details,
      phase: phase
    });

    event.target.name.value = "";
    event.target.details.value = "";
    event.target.phase.value = "";

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
