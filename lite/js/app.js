





// Initialize Firebase
var config = {
  apiKey: "AIzaSyARbtOHE0iaTqF0lQPnZpV7Lj3uO5RstEo",
  authDomain: "ewitness-6bf94.firebaseapp.com",
  databaseURL: "https://ewitness-6bf94.firebaseio.com",
  projectId: "ewitness-6bf94",
  storageBucket: "ewitness-6bf94.appspot.com",
  messagingSenderId: "406390260812"
};
firebase.initializeApp(config);
// Get a reference to the database service
var database = firebase.database();

var reportsRef = database.ref('reports');
reportsRef.on('value', function(snapshot){
   displayReportsTable();
});


function displayReportsTable(){
    
}
