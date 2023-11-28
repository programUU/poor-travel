const storage = window.sessionStorage;
const set = (key,value)=>{
    storage.setItem(key,JSON.stringify(value));
}
const get = (key) =>{
    return JSON.parse(storage.getItem(key));
}
const remove = (key) => {
    storage.removeItem(key);
}
const clear = () => {
    storage.clear();
}

export {set,get,remove,clear}
