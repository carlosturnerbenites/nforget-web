import { firebaseDatabase } from './firebase';

function addItem(){
    return firebaseDatabase.collection("items").add({
        name: "Tokyo",
        country: "Japan"
    })
}
function getItems(){
    console.log("que pasa")
    return firebaseDatabase.collection("items").get();
}

getItems()
    .then(a => console.log(a))
    .then(err => console.log(err))

export {
    getItems,
    addItem,
}