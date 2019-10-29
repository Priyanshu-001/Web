counter=2
z={
    id:0,
		text:"cat"
	};
 todo={
    id:1,
    	text: "back"
    }
allTodos=[

	todo,
  z
]


var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    MyList:allTodos,
    newToDo: "Task Here",
    k: ""
  },
  // mounted(){
  //     if(localStorage.counter){
  //       this.counter=localStorage.counter
  //     }
  //     else{
  //       localStorage.counter=this.counter

  //     }
  // }
  methods:
  {
  	add: function () {
  		k={
  			text: this.newToDo,
        id: counter,
        done: false
  		}
  		allTodos.push(k)
      counter+=1
  	},
    Done: function(id){
      allTodos[id].done=true
    },
     deleteTask: function(id)
    {
     allTodos.splice(id,1);
    
    }
  }
})