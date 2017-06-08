# Seinfeld Quotes API Documentation

## This a brief explaination of how this API works.

---

**For a list of awesome Seinfeld quotes, please go to http://seinfeld-api.willcodes.co/quotes**

**For a random quote, please go to http://seinfeld-api.willcodes.co/random**

### **Sample Request with jQuery**

```
    $.ajax({
        url:"https://seinfeld-quotes.herokuapp.com/quotes",
        dataType:"JSON",
        method:"GET"
        }).then(function(res){
            //do something
    });
```

### **Sample Response**
```
    {
    "quote": "Yeah I eat the whole apple.. core, stem, seeds -- everything",
    "author": "Kramer",
    "season": "2",
    "episode": "10",	
    "image": "./Images/15-3.png"
    }
```
If you would like to contribute or send me a quote you think should be included, please create an issue and a pull request! Any feedback is appreciated.
