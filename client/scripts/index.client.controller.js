$('.submit').on('click', function(e) {
  e.preventDefault();
  console.log("Hello");
  console.log($('.email > input').val());
  data = {
    "email": $('.email > input').val(),
    "userId": $('.userId > input').val(),
    "gameName": $('.gameName > input').val()
  };
  data = JSON.stringify(data);
  $.ajax({
    url: 'http://localhost:3000/add',
    method: 'POST',
    contentType: 'application/json',
    data: data
  });
});