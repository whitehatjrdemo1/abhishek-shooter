class Player {
  constructor(){
    this.index = playerCount;
    this.distance = 0;
    this.health = 100;
    this.positionX = 0;
    this.positionY = 0;
    this.score = 0;
    this.name = null;
    this.team = 0;
    // this.rank = null;
  }
 // getcarsAtEnd(){
   //database.ref("carsAtEnd").on("value",data =>{
   //  this.rank = data.val()
   //})
  //}

  // static updatecarsAtEnd(rank){
  //  database.ref("/").update({
  //    carsAtEnd:rank
  //  })
  // }
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    if(player.index === 1){
      this.team = 1;
      var playerIndex = "teams/team" + this.team + "/"  + "player"+ this.team +this.index;
      console.log(playerIndex);
      database.ref(playerIndex).update({
        health:this.health,
        name:this.name,
        positionX:this.positionX,
        positionY:this.positionY,
        score:this.score
    });
    }
    if(player.index === 2){
      this.team = 2;
      var playerIndex = "teams/team" + this.team + "/" + "player"+ this.team +this.index;
      console.log(playerIndex);
      database.ref(playerIndex).update({
        health:this.health,
        name:this.name,
        positionX:this.positionX,
        positionY:this.positionY,
        score:this.score
      
    });
    }
    
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('teams');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
