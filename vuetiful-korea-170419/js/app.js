new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: []
  },
  methods: {
    startGame: function() {
      this.gameIsRunning = true;

      //initialize healthbars
      this.playerHealth = 100;
      this.monsterHealth = 100;

      //initialize turns
      this.turns = [];
    },
    attack: function() {
      //player attacks
      var damage = this.calculateDamage(3, 10);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: 'smilee가 vue.js에게 ' + damage + '의 피해를 입혔습니다.'
      });

      //check if the player won
      if (this.checkWin()) {
        return;
      }

      this.monsterAttacks();
    },
    specialAttack: function() {
      //player attacks
      var damage = this.calculateDamage(10, 20);
      this.monsterHealth -= damage;

      this.turns.unshift({
        isPlayer: true,
        text: 'smilee가 vue.js에게 *' + damage + '*의 피해를 입혔습니다.'
      });

      //check if the player won
      if (this.checkWin()) {
        return;
      }

      this.monsterAttacks();
    },
    heal: function() {
      if (this.playerHealth <= 90) {
        this.playerHealth += 10;
      } else {
        this.playerHealth = 100;
      }
      this.turns.unshift({
        isPlayer: true,
        text: 'smilee가 ' + 10 + '의 피해를 회복했습니다.'
      });
      this.monsterAttacks();
    },
    giveUp: function() {
      this.gameIsRunning = false;
    },
    monsterAttacks: function() {
      //monster attacks
      var damage = this.calculateDamage(5, 12);
      this.playerHealth -= damage;

      //check if the monster won
      this.checkWin();
      this.turns.unshift({
        isPlayer: false,
        text: 'vue.js가 smilee에게 ' + damage + '의 피해를 입혔습니다.'
      });
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
