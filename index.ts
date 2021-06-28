const reactive = (data) =>{

    const track = (target, prop, receiver) =>{
      console.log("Data Get: ", target, prop);
    }
    const trigger = (target, key, value, receiver) =>{
      console.log("Data Change: ", target, key, value, receiver);
    }
    const watch =(target, key, value, receiver)=>{
      console.log("Data Set: ", target, key, value, receiver);
    }
    const handler = {
      get(target, prop, receiver){
        track(target, prop, receiver)
        return Reflect.get(target, prop, receiver);
      },
      set(target, key, value, receiver) {
         watch(target, key, value, receiver)
        if(target[key]!=value){
          trigger(target, key, value, receiver)
        }
        return Reflect.set(target, key, value, receiver);
      }
    }
    
    const proxy = new Proxy(data, handler);
    
    return proxy
}

const store = reactive({
  count: 0
})

store.count;
// Data Get: { count: 0 } count
// 0
store.count++;
// Data Set: { count: 0 } count 1 { count: 0 }
// Data Change: { count: 0 } count 1 { count: 0 }
// 1
