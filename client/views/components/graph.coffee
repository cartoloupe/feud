Template.graph.rendered = ->
  $('.components .graph a.show').click ->
    parent = $(this).parent()
    img = parent.find('img')
    tag = img.attr("data")
    selector = "img." + tag
    img.toggle("fold", 500)
  $('img').draggable()

Template.graphite.rendered = ->
  $('.components .graphite a.show').click ->
    parent = $(this).parent()
    img = parent.find('img')
    img.toggle("fold", 500)
  $('img').draggable()

Template.statsd.rendered = ->
  $('.components .statsd a').click ->
    parent = $(this).parent()
    parent.toggleClass("width500")
    parent.find('ul').toggle("fold", 300)

Template.statsd_ruby.rendered = ->
  $('.components .statsd_ruby a').click ->
    parent = $(this).parent()
    parent.toggleClass("width777")
    parent.find('.codeblock').toggle("fold", 300)

Template.imgpanel.rendered = ->
  $('a.showimg').click ->
    $(this).next()
      .toggle("fold", 500)
      .draggable()

Template.imgclear.rendered = ->
  $(this.firstNode).click ->
    console.log 'clicked'
    $(this).parent().find('img').hide("fold", 300)

Template.metrics_card.rendered = ->
  console.log $(this.firstNode).find('a')
  $(this.firstNode).find('a').click ->
    parent = $(this).parent()
    parent.toggleClass("width777")
    parent.find('ul').toggle("fold", 300)

Template.cifter.rendered = basic_list_clicker

Template.tests.rendered = basic_list_clicker

Template.cql.rendered = basic_list_clicker


