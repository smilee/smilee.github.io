var vm = new Vue({
  el: '#app',
  data: {
    todoList: [
      {item: '발표하기', due: '오늘 @20:00', done: false},
      {item: '뒷풀이', done: false},
      {item: '집에 돌아가서 퍼지기', done: false},
      {item: '발표자료 준비', due: '어제까지', done: true},
      {item: '티셔츠 제작주문', done: true},
      {item: '얼리버드 모집', done: true},
      {item: '선협님 들볶기', done: true}
    ],
    completed: false
  },
  computed: {
    todo() {
      return this.todoList.filter(function(item) { return !item.done });
    },
		done() {
			return this.todoList.filter(function(item) { return item.done });
		}
	},
  methods: {

  },
  created() {
    this.$on('completed', (index) => {
      this.todo[index].done = true;
      $('div.done').delay(20).velocity({
        top: this.todo.length * 72 + 20 + 'px'
      }, 700, 'ease-out', function() {

      });
    });
  },
  mounted() {
    $('.draggable-y').draggable({
      axis: 'y',
      revert: true
    });
    $('.draggable-x').draggable({
      axis: 'x',
      start: function() {

      },
      drag: function() {
        var el = $(this).position();
        el.left > 230? vm.completed = true : vm.completed = false;
      },
      stop: function() {
        var el = $(this).position();
        var index = $(this).attr('value');
        if (el.left < 230) {
          $(this).velocity({ left: 0 },[200, 20], { duration: 400 });
        } else {
          var list = $('div.notDone').position();
          $(this).animate({ left: 750
          }, 400, 'swing', function() {
            vm.$emit('completed', index);
          })
        }
      }
    });
  }
});
