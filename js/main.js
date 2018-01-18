 // global jQuery, $ 
$(document).ready(function () {
  var d1 = new Date(2018, 0, 26) // 2017.1.26
  var now = new Date()
  $('a[data-toggle="tab"]').click(function (e) {
    var url = $(this).data('url')
    var video = '<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/' + url + '?autoplay=1" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div>'
    var target = $(e.target).attr('href')
    $(target).find('div[data-box="live"]').html(video)

    // 連動 TAB
    var id = $(this).attr('id')
    // console.log(id)
    if (id === 'jan26-tab' || id === 'jan27-tab') {
      $('#tab267').tab('show')
    } else if (id === 'jan28-tab' || id === 'jan29-tab') {
      $('#tab289').tab('show')
    }
  })
  $('#jan27').trigger('click')
  function chechDay () {
    var offset = Math.floor((now - d1) / (1000 * 60 * 60 * 24) + 1)
    switch (offset) {
      case 1:
        $('#myTab #jan26-tab').trigger('click')
        $('#tab267').trigger('click')
        // console.log('1.26')
        break
      case 2:
        $('#myTab #jan27-tab').trigger('click')
        $('#tab267').trigger('click')
        // console.log('1.27')
        break
      case 3:
        $('#myTab #jan28-tab').trigger('click')
        $('#tab289').trigger('click')
        // console.log('1.28')
        break
      case 4:
        $('#myTab #jan29-tab').trigger('click')
        // console.log('1.29')
        $('#tab289').trigger('click')
        break
      default:
        // console.log(offset)
        break
    }
  }
  chechDay()
})
