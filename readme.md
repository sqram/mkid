# mkid
##### A custumizable Unique id generator


 _like mkdir, but mkid!_

### Installation
```$ npm i mkid```

### Usage: mkdir(options)
```var id = mkid()```

### Options: an object overwriting default values

##### ```minLength``` (int)
###### default: 3
Minimun length of the generated id

##### ```maxLength``` (int)
###### default: 6
Maximum length of the generated id

##### ```alphabet``` (string)
###### default: uvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!&~-+_
List of allowed characters to be in the id

##### ```forbiddenChars``` (array)
###### default: []
An array in which the elements cannot be the id. This is useful if you have
a url in the format example.com/:id  and you want to make sure the id
generated does not match any of your navigation urls. For instance,
if you do  ```mkdir( {forbiddenChars: ['home', 'contact'] })``` it will
guarantee that the generated id is not 'home' and not 'contact', so that
you can have example.com/contact  in your navigation.

###### ```forbiddenFirstChars``` (string)
A string of characters that the first character (id.chartAt(0)) cannot be.
So if you call ```mkdir( {forbiddenFirstChars: '~5t'} )``` it will return
an id where the first character cannot be ~, 5, or t.


### Example usages

```
var id = mkid({
  minLength: 1,
  maxLength: 10,
  forbiddenChars: ['home', 'about', 'contact'],
  forbiddenFirstChars: '~'
})

// returns an id between 1 and 10 characters long that cannot be
// 'home', 'about', or 'contact', and does not start with ~