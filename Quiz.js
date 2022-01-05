class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    question.hide();
    background("Yellow");
    fill(255);
    textSize(35);
    text("Quiz Results",350,50)
    Contestant.getPlayerInfo();
    if(allContestants !== undefined){
      debugger;
      var display_Answers = 230;
    }
    fill("Black");
    textSize(20);
    text("Contestents who answered correctly are highlighted in green",130,230);
    

    for (var plr in allContestants){
      debugger;
      var correct = "2";
      if (correct === allContestants[plr].answer)
        fill("green");
        else
        fill("red")


        display_Answers+=30;
        textSize(20);
        text(allContestants[plr].name + ": " + allContestants[plr].answer,250,display_Answers)
    }
  }

}
