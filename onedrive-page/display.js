"use strict";

class File{
  constructor(img, name, date, share, size){
    this.img = img;
    this.name = name;
    this.date = date;
    this.share = share;
    this.size = size;
  }
}

const files = [
  new File("glyphicon glyphicon-film", "Data-driven approach.mp4", "2016.5.6", " ", "8.82"),
  new File("glyphicon glyphicon-file", "Convolutional Neural Networks.pdf", "2016.5.6", "공유됨", "2.56"),
  new File("glyphicon glyphicon-file", "Localization and Detection.pdf", "2016.5.6", " ", "3.50"),
  new File("glyphicon glyphicon-film", "Linear Classification 2.mp4", "2016.5.6", " ", "4.74"),
  new File("glyphicon glyphicon-file", "Deep Learning libraries.pdf", "2016.5.6", " ", "2.54"),
  new File("glyphicon glyphicon-film", "Introduction and Historial Context.mp4", "2016.5.6", "공유됨", "9.12"),
  new File("glyphicon glyphicon-file", "Data-driven approach.pdf", "2016.5.6", " ", "2.99"),
  new File("glyphicon glyphicon-file", "Invited Talk by Jeff Dean.pdf", "2016.5.6", " ", "5.54"),
  new File("glyphicon glyphicon-film", "Linear Classification 3.mp4", "2016.5.6", " ", "7.88"),
];


function display(files){
  const container = document.querySelector('.input');
  let result = `<colgroup>
    <col width="1%">
  </colgroup>
  <tr class="trow1">
    <td class="tcol1 glyphicon glyphicon-ok"></td>
    <td class="tcol2 col-sm-4 col-xs-12">이름</td>
    <td class="tcol3 col-sm-3 hidden-xs">수정한 날짜</td>
    <td class="tcol4 col-sm-2 hidden-xs">공유</td>
    <td class="tcol5 col-sm-1 hidden-xs">크기</td>
    <td class="tcol6 hidden-xs"></td>
  </tr>`;
  for (let i=0; i<files.length; i++){
    result += `<tr class="trow2">
      <td class="tcol1"><input type="checkbox"></td>
      <td class="tcol2 col-sm-4 col-xs-12"><span class="${files[i].img}"></span> ${files[i].name}</td>
      <td class="tcol3 col-sm-3 hidden-xs">${files[i].date}</td>
      <td class="tcol4 col-sm-2 hidden-xs">${files[i].share}</td>
      <td class="tcol5 col-sm-1 hidden-xs">${files[i].size}MB</td>
      <td class="tcol6 hidden-xs"> </td>
    </tr>`;
  container.innerHTML = result;
  }
}

display(files);



$(document).ready(function () {
  $('[data-toggle="#side"]').click(function () {
    $('#sidebar').toggleClass('hidden-xs col-xs-5')
    $('#main').toggleClass('col-xs-12 col-xs-7')
  });
});

$(document).ready(function () {
  $("").click(function () {
    $('#disappear').toggleClass('collapse')
  });
});



$(document).ready(function () {
  $("tr").click(function () {
    $(this).toggleClass('selected')
    if ( $(this).children("td").children("input:checkbox").prop('checked') ) {
      $(this).children("td").children("input:checkbox").prop("checked", false)
    }
    else {
      $(this).children("td").children("input:checkbox").prop("checked", true)
    // $(this).parents().toggleClass('table-hover')
    }
  });
});

$(document).ready(function () {
  $("input:checkbox").click(function () {
    $(this).toggleClass('selected')
    if ( $(this).prop('checked') ) {
      $(this).prop("checked", false)
    }
    else {
      $(this).prop("checked", true);
    }
  });
});


$(document).ready(function () {
  $("tr").click(function () {
    const container = document.querySelector('.count');
    let count = $("input:checkbox:checked").length
    if ( count > 0 ) {
      $(".click-button").removeClass('collapse');
      $(".non-click").addClass('collapse');
      container.innerHTML = count + "개 선택됨 " + "<span class='btn-icon glyphicon glyphicon-remove'>"
    }
    else {
      $(".click-button").addClass('collapse');
      $(".non-click").removeClass('collapse');
    }
  });
});

$(document).ready(function () {
  $("#size").click(function () {
    files.sort(function(a, b) {
      if (a.size > b.size) {
        return -1;
      }else{
        return 1;
      }
    });
    display(files)
  });
});

$(document).ready(function () {
  $("#name").click(function () {
    files.sort(function(a, b) {
      if (a.name > b.name) {
        return 1;
      }else{
        return -1;
      }
    });
    display(files)
  });
});


$(document).ready(function () {
  $(".delete").click(function () {
    $("tr").remove(".selected")
    const container = document.querySelector('.count');
    let count = $("input:checkbox:checked").length
    if ( count > 0 ) {
      $(".click-button").removeClass('collapse');
      $(".non-click").addClass('collapse');
    }
    else {
      $(".click-button").addClass('collapse');
      $(".non-click").removeClass('collapse');
    }
  });
});
