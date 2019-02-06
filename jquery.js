$(function(){
  $('#validate').click(function(){
    var firstNote = parseInt($('#firstNote').val());
    var secondNote = parseInt($('#secondNote').val());
    var thirdNote = parseInt($('#thirdNote').val());
    var fourthNote = parseInt($('#fourthNote').val());
    var fifthNote = parseInt($('#fifthNote').val());
    var average = ((firstNote + secondNote + thirdNote + fourthNote + fifthNote)/5);

    //Si la moyenne de l'élève est supérieure ou égale à 0 et inférieure à 10, il aura comme appréciation : "En dessous de la moyenne".
      if(average >= 0 && average < 10){
        alert(average + ' En dessous de la moyenne')
    //Si la moyenne de l'élève est supérieure ou égale à 10 et inférieure à 13, il aura comme appréciation : "Moyen".
  }else if(average >= 10 && average < 13){
        alert(average + ' Moyen')
    //Si la moyenne de l'élève est supérieure ou égale à 13 et inférieure à 16, il aura comme appréciation : "Bien".
  }else if(average >= 13 && average < 16){
        alert(average + ' Bien')
    //Si la moyenne de l'élève est supérieure ou égale à 16 et inférieure à 20, il aura comme appréciation : "Très bien".
  }else if(average >= 16 && average < 20){
        alert(average + ' Trés bien')
    //Si la moyenne de l'élève est égale à 20, il aura comme appréciation : "Excellent".
      }else if(average == 20){
        alert(average + ' Excellent')
      }
    console.log(average);

  });


});
