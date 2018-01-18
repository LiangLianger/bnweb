/* global jQuery, $ */
$(document).ready(function () {
  // $('#myTab').find('.nav-link').click(function () {
  //   var $this = $(this)
  //   var target = $this.attr('href')
  //   $(target).find('.liveBox').text('111')
  //   console.log($(target).find('.liveBox'));
  // })
  // 日期
  var today = new Date()
  var d1 = '2018/1/26'
  var d2 = '2018/1/27'
  var d3 = '2018/1/28'
  var d4 = '2018/1/29'

  function formatDate(e) {
    var month = e.getMonth() + 1
    var day = e.getDate()
    checkYMD = e.getFullYear() + '/' + (month < 10 ? '0' : '') + month + '/' + (day < 10 ? '0' : '') + day
  }
  formatDate(today)
  // console.log(checkYMD)
  // var img = $("#myTabContent").find('.liveBox').html()
  // $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  //   var url = $(this).data('url')
  //   var related = $(e.relatedTarget).attr('href')
  //   var video = '<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/' + url + '?autoplay=1" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div>'
  //   var target = $(e.target).attr('href')
  //   $(target).find('.liveBox').html(video)
  // })
  // console.log('today: ' + today + '// d1:' + d1 + '// d2: ' + d2);
  switch(checkYMD){
    case d1:
      $('#myTab #jan26-tab').tab('show')
      break;
    case d2:
      $('#myTab #jan27-tab').tab('show')
      break;
    case d3:
      $('#myTab #jan28-tab').tab('show')
      break;
    case d4:
      $('#myTab #jan29-tab').tab('show')
      break;
    default:
      break;
  }


})
