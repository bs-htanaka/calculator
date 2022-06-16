new Vue({
  el: '#app',
  data: {
    result:'0',
    items:[
      ['7','8','9','/'],
      ['4','5','6','*'],
      ['1','2','3','-'],
      ['0','.','+','='],
    ]
  },
  methods: {
    calculate:function(cmd){
      if(cmd == '='){
        this.result = eval(this.result);
      }else if(cmd == 'c'){
        this.result = '0';
      }else if(this.result == '0'){
        this.result = cmd;
      }else{
        this.result += cmd;
      }
    }
  },
})