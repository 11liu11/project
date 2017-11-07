var state = {
  num: 1,
//   getnum() {
//       return this.num
//   },
  addNum(i) {
      this.num += i
      unWriterFn()

  }
}
var unWriterFn=()=>{
    for(var i in state){
        
        if(typeof(state[i])!="function"){
            Object.defineProperty(state,i,{writable:false})
        }
    }
}
unWriterFn()

export default state
