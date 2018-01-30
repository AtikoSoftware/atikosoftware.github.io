!function ($) {
  $body.scrollspy({
    target: '#navbar-main',
    offset: 50
  })

  $window.on('load', function () {
    $body.scrollspy('refresh')
  })

  // $('#navbar-main [href=#]').click(function (e) {
  //   e.preventDefault()
  // })
}(jQuery);
