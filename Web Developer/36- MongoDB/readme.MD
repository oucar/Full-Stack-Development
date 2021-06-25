* SQL - Relational (everything is done in tables --> everything is in a pattern)
* document oriented database: can store json, xml, yaml etc --> mongodb


* but why mongodb?: commonly used in mean and mern,  easy to get started with, works well with js, it's popular!

* mongo shell is actually a javascript shell! can run javascript
* CTRL + K to clean terminal



---

* db -> database
* show databases / show dbs --> shows the databases : D 
* use {$database.name} --> create db or switch to db
    * db -> animalShelter


---

* JSON : JS Object notation --> text based format and text parsing is very slow
* BSON : Binary JSON --> mongo will store json as binary! 


* https://docs.mongodb.com/manual/tutorial/insert-documents/



* INSERT
    * show collections --> for similar data (dogs, cats, users etc)
    * db.dogs.insertOne({name: "Charlie", age: 3, breed: "Corgi", catFriendly: true})
    * db.dogs.find() --> prints all the dogs --> notice the objectID
    * INSERTING MANY --> array of objects
        * db.dogs.insert([{name: "Charlie1", age: 41, breed: "Corgi1", catFriendly: true}, {name: "Charlie2", age: 42, breed: "Corgi2", catFriendly: true}])
        * use db.dogs.insert({}); to insert or db.dogs.insert([{}, {}, {}]) to insert many

* FIND
    * db.dogs.find({breed: "Corgi"}) --> case sensitive
    * db.dogs.find({catFriendly: true}) ---> each dog called document 
        * CHECK OUT OPERATORS FOR FIND AND UPDATE OPERATIONS!
        * https://docs.mongodb.com/manual/reference/operator/query-comparison/

        * db.inventory.find( { qty: { $gt: 20 } } )
        * db.dogs.find({breed: {$in: ['Mutt', 'Corgi']}}) --> find the dogs that are in...
        


* UPDATE
    * db.dogs.updateOne({name: "Charlie"}, {$set: {age: 4}})
    * db.dogs.updateOne({name: "Charlie"}, {$set: {age: 4, breed: "Denyo"}})
    * db.dogs.updateOne({name: "Charlie"}, {$set: {color: "blue"}})    --> new key value pair 

    * db.dogs.updateMany({catFriendly: true}, {$set: {isAvailable: true}})
    * db.dogs.updateMany({}, {$currentDate: {lastModified: true}})

    * or you can use the replaceOne to replace something while keeping the id same.

    * db.inventory.update( { "carrier.fee": { $gt: 2 } }, { $set: { price: 9.99 } } )

* DELETE
    * db.dogs.deleteOne({name:"Onur"})
    * db.dogs.deleteMany({name:"123"}, {name:"3456})
    * db.dogs.deleteMany({}) --> rm -rf * :)




* Operators: https://docs.mongodb.com/manual/reference/operator/query-comparison/
    