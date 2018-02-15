# FIREBASE NOTES
## Adam Specker

### References
* https:*github.com/nielsenjared/firebase-auth#firebase

#### Initializing Firebase
* Initliazing firebase by using var config and linking firebase script
* Goes BELOW HTML but ABOVE other scripts


#### Authentication of Users
* Add a button to the HTML files that allows users to login with google
* Add the googleLogin function into the HTML
* Add JQuery to the HTML document into the header
* below the above googleLogin function add a click listener that 

#### Data Structures

##### flat vs. nested data structures
* https://firebase.google.com/docs/database/web/structure-data
* 
##### Queries
* https://firebase.google.com/docs/reference/js/firebase.database.Query?authuser=0#once

##### Writing Dat to Firebase
* use firebaseRef.set() to write data, objects etc.
 ```
 firebaseRef.set(
     type: "fruit",
    name: "apple",
    price: 42.0
    )
```
* to observe data, use on(), like so
* this function will write the value into the html
```
    $(function() {
    firebaseRef.on("value", function (snap) {
        $("#result").html(
            JSON.stringify(snap.val())
            );
        });
});
```










# JAVASCRIPT DATA HANDLING
* Detecting contents in objects/arrays
* Using the map() function - way to go from values in one domain 
* Using the 'in' function - determines if a given property exists

* Array editing 
* push and pop - add and remove items from the end of an array, respectively
* shift and unshift - add and remove items from the beginning of an array, respectively
* slice - returns the elements of the array 

* Array searching
* forEach(array, function()}) will run a function at each index of the array

* To be able to go from a parent’s name to the actual object that represents this person, 
* we first build up an object that associates names with people.
```
 var byName = {};
 ancestry.forEach(function(person) {
   byName[person.name] = person;
 });
```
* constructor way of declaring new objects - should I go back in and change this?
* prototypes - what are these and should I be using them?