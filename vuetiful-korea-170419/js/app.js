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
      this.monsterHealth -= this.calculateDamage(3, 10);

      //check if the player won
      if (this.checkWin()) {
        return;
      }

      //monster attacks
      this.playerHealth -= this.calculateDamage(5,12);

      //check if the monster won
      this.checkWin();
    },
    specialAttack: function() {

    },
    heal: function() {

    },
    giveUp: function() {

    },
    calculateDamage: function(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkWin: function() {
      if (this.monsterHealth <= 0) {
        if (confirm('승리! 한번 더 하시겠습니까?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm('패배! 한번 더 하시겠습니까?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    }
  }
});
