if Meteor.isClient
  @basic_list_clicker = ->
    $(this.firstNode).find('a').first().click ->
      parent = $(this).parent()
      parent.toggleClass("width777")
      parent.toggleClass("zhigh")
      parent.find('ul').first().toggle("fold", 300)

