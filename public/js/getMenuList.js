var url = "http://192.168.0.159:3000/getMenu";
var dataType = "json";

function categoryTemplate(data) {
  var template = "";

  var list_object = $(".category");
  for (var i = 0; i < data.length; i++) {
    template = `
    <a href = "#######">
    <li class="category_list">
    <p>${data[i].menu_nm}</p>
    </li>
    </a>
    `;

    list_object.append(template);
  }


}
$(function () {
  $.ajax({
    url: url,
    dataType: dataType,
    type: "post",
    success: function (data) {
      categoryTemplate(data);
    },
    error: function (err) {
      throw err;
    }
  });
});