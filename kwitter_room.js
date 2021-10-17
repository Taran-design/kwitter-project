const firebaseConfig = {
      apiKey: "AIzaSyDoZBBJfvzADZq1qknvQrtC2zoZpVP2Ots",
      authDomain: "snaptt-8.firebaseapp.com",
      databaseURL: "https://snaptt-8-default-rtdb.firebaseio.com",
      projectId: "snaptt-8",
      storageBucket: "snaptt-8.appspot.com",
      messagingSenderId: "55226850402",
      appId: "1:55226850402:web:b7368e07ce90d23a18853b"
    };
    
   firebase.initializeApp(firebaseConfig);
   user_name=localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML="welcome"+user_name+"!";
   function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          key:"1029384756"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
     }
function getData()
 {firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key; Room_names = childKey;
 row="<div class='roomName' id="+Room_names+" onclick ='redirectToRoomName(this.id)'> #"+Room_names+"</div> <hr>";
 document.getElementById("output").innerHTML+=row;
 
      
      //Start code

      //End code
      });});}
getData();
function redirectToRoomName(name){
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout(){
localStorage.removeItem("user_name"); 
localStorage.removeItem("room_name"); 
window.location="index.html";
}