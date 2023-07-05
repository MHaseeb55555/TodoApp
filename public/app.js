//  // Import the functions you need from the SDKs you need
//  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
//  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
//  import { getDatabase } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
//  // TODO: Add SDKs for Firebase products that you want to use
//  // https://firebase.google.com/docs/web/setup#available-libraries

//  // Your web app's Firebase configuration
//  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//  const firebaseConfig = {
//    apiKey: "AIzaSyDJdSg7U4ntNhmL88q9ftWRGynf202QaRU",
//    authDomain: "todo-app-3e2e8.firebaseapp.com",
//    projectId: "todo-app-3e2e8",
//    storageBucket: "todo-app-3e2e8.appspot.com",
//    messagingSenderId: "371532576335",
//    appId: "1:371532576335:web:b715911f39aab815459c3a",
//    measurementId: "G-52CJELDL71"
//  };

//  // Initialize Firebase
//  const app = initializeApp(firebaseConfig);
//  const analytics = getAnalytics(app);
//  var db = getDatabase();







var list = document.getElementById("list")


function addTodo () {
    var todo_items = document.getElementById("todo-item");

    // Create li tag with text node
    var li = document.createElement("li");
    var liText = document.createTextNode(todo_items.value);
    li.appendChild(liText);

    // Create delete Btn
    var delBtn = document.createElement("button");
    var delText = document.createTextNode("Delete");
    delBtn.setAttribute("onclick", "delItem(this)")
    delBtn.setAttribute("class", "btn")
    delBtn.appendChild(delText);

    //Create Edit Btn
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("Edit");
    editBtn.setAttribute("onclick", "editBtn(this)")
    editBtn.setAttribute("class", "btn")
    editBtn.appendChild(editText);


    li.appendChild(delBtn);

    li.appendChild(editBtn);

    list.appendChild(li)



    todo_items.value = "";

}

function delItem(a) {

    a.parentNode.remove();

}
function delAll() {
    list.innerHTML = "";
}
function editBtn(a) {
    var val = a.parentNode.firstChild.nodeValue;
    // var NewValue = prompt("Enter New Value", val)
    // val = NewValue
    a.parentNode.firstChild.nodeValue= prompt("Enter New Value", val)
  

}
