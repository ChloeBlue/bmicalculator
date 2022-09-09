
function bmiCalculator() {
  var weight = $("#weight").val();
  var height = $("#height").val();
  var bmi = (weight / (height * height / 10000)).toFixed(1);

  if (bmi > 0 && bmi < 18.5) {
    status = "Oh no!😢 You are underweight!";
    $(".bmi-value").addClass("bmi-underweight");
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    status = "Good job!😁 You have normal weight!";
    $(".bmi-value").addClass("bmi-normal");
  } else if (bmi > 25.0 && bmi <= 29.9) {
    status = "Oh no!🥺 You are overweight!"
    $(".bmi-value").addClass("bmi-overweight");
  } else if (bmi > 29.9) {
    status = "Oh no!😫 You have obesity!"
    $(".bmi-value").addClass("bmi-obesity");
  } else {
    status = "No result. Please try again.";
    $(".bmi-value").addClass("bmi-error");
  };

  var result = $(".bmi-value").text(bmi + "\n" + "(" + status + ")");
  result.html(result.html().replace(/\n/g, '<br\>'));
};

function clearInformation() {
  $("#weight").val(" ");
  $("#height").val(" ");

  var blank = $(".bmi-value").text("value \n status");
  blank.html(blank.html().replace(/\n/g, '<br\>'));

  $(".bmi-value").removeClass("bmi-underweight");
  $(".bmi-value").removeClass("bmi-normal");
  $(".bmi-value").removeClass("bmi-overweight");
  $(".bmi-value").removeClass("bmi-obesity");
};

$(".submit-button").click(function() {
  bmiCalculator();
});

$(document).keypress(function(e) {
  if (e.key=="Enter") {
    bmiCalculator();
  };
});

$(".clear-button").click(function() {
  clearInformation();
});
