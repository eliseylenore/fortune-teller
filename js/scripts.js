$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("form, .hide-me").hide();

    var unluckyPoints = 0;

      $("input:checkbox[name=colors]:checked").each(function() {
      var userSelectedColors = parseInt($(this).val());
      unluckyPoints += userSelectedColors;
      console.log(unluckyPoints);
    });
      $("input:checkbox[name=foods]:checked").each(function() {
      var userSelectedFoods = parseInt($(this).val());
      unluckyPoints += userSelectedFoods;
      console.log(unluckyPoints);
    });
      $("input:checkbox[name=are-you-lucky]:checked").each(function() {
      var userSelectedEvents = parseInt($(this).val());
      unluckyPoints += userSelectedEvents;
      console.log(unluckyPoints);
    });

    if (unluckyPoints < 15) {
      $('#good-fortune').show();
    } else if (unluckyPoints <30) {
      $('#okay-fortune').show();
    } else if (unluckyPoints <50) {
      $('#bad-fortune').show();
    } else {
      $('#dead-fortune').show();
    }
  });
});
