Template.metrics.rendered = ->
  console.log 'metrics rendered'
  $('.components')
    .draggable
      handle: ".handle"
      start: ->
        $(this).zIndex(999);
      stop: ->
        $(this).zIndex(0);

