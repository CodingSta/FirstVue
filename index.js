// import Vue from 'vue';
// import BlueButton from './BlueButton';

// Vue.component 는 app 위에 위치해야 함.
// Vue.component('bluebutton', BlueButton);

Vue.component('todo-item', {
    template: '<li>This is a todo</li>',
});

var app = new Vue({ 
    el: '#app',
    data: {
        seen: true,
        message: 'Hello ABC',
        nameA: 'MinGyu!',
        nameB: 'DongWoo!',
        myArray: [
            {id:0, text: 'data A'},
            {id:1, text: 'data B'},
            {id:2, text: 'data C'}
        ]
    },
    methods: {
        reverseMessage: function () {
          this.message = this.message.split('').reverse().join('')
        }
      }
});

console.log(1);