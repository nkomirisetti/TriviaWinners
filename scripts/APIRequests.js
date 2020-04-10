const getCategory = {
    "url": "https://opentdb.com/api_category.php",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Cookie": "PHPSESSID=4eSkPTohhuSb%2C61pqTnmz1"
    },
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });