new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false
  },
  methods: {
    startGame: function() {
      this.gameIsRunning = true;

      //initialize healthbars
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    attack: function() {
      //player attacks
      var max = 10;
      var min = 3;
      var damage = Math.max(Math.floor(Math.random() * max) + 1, min);
      this.monsterHealth -= damage;

      //check if the player won
      if (this.monsterHealth <= 0) {
        alert('You won!');
        this.gameIsRunning = false;
        return;
      }

      //monster attacks
      max = 12;
      min = 5;
      damage = Math.max(Math.floor(Math.random() * max) + 1, min);
      this.playerHealth -= damage;

      //check if the monster won
      if (this.playerHealth <= 0) {
        alert('You lost!');
        this.gameIsRunning = false;
      }
    },
    specialAttack: function() {

    },
    heal: function() {

    },
    giveUp: function() {

    }
  }
});
