export default {
  obj:{},
  $on:function(name,fn){
     
      if(this.obj[name]===undefined){
         this.obj[name]=[]
      }
      this.obj[name].push(fn)

  },
  $emit(){
    var name=arguments[0]
    if(arguments.length<=0){
      return false
    }
    var dataArr=Array.prototype.splice.apply(arguments,[1])
    if(this.obj[name]!=undefined&&this.obj[name].length>0){
         this.obj[name].forEach(function(fn) {
          fn(...dataArr)
        }, this);
    }
  },
  $destroy(name){
    delete this.obj[name]
  }

}