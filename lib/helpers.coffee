if Meteor.isClient
  @basic_list_clicker = ->
    console.log 'basic_list_clicker'
    $(this.firstNode).find('a').click ->
      parent = $(this).parent()
      parent.toggleClass("width777")
      parent.find('ul').toggle("fold", 300)

