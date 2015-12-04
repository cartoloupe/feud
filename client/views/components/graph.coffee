Template.graph.rendered = basic_list_clicker

Template.graphite.rendered = ->
  $('.components .graphite a.show').click ->
    parent = $(this).parent()
    img = parent.find('img')
    img.toggle("fold", 500)
  $('img').draggable()

Template.statsd.rendered = basic_list_clicker

Template.statsd_ruby.rendered = ->
  $('.components .statsd_ruby a').click ->
    parent = $(this).parent()
    parent.toggleClass("width888")
    parent.find('.codeblock').toggle("fold", 300)

Template.imgpanel.rendered = ->
  $('a.showimg').click ->
    $(this).next()
      .toggle("fold", 500)
      .draggable

Template.imgclear.rendered = ->
  $(this.firstNode).click ->
    console.log 'clicked'
    $(this).parent().find('img').hide("fold", 300)

Template.handle.rendered = ->
  handle = $(this.firstNode)
  handle.parent()
    .draggable
      handle: ".handle"

Template.metrics_card.rendered = basic_list_clicker

Template.cifter.rendered = basic_list_clicker

Template.tests.rendered = basic_list_clicker

Template.cql.rendered = basic_list_clicker

Template.scripts.rendered = basic_list_clicker

Template.jenkins.rendered = basic_list_clicker

Template.summary.rendered = basic_list_clicker

Template.summary.events
  'click .show_elk': ->
    $('.kibana').toggle("fade", 300)
    $('.elastic').toggle("fade", 300)
    $('.logstash').toggle("fade", 300)


