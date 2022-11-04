# Javascript - AJAX

## Lesson Objectives

1. Explain AJAX
1. Explain promises
1. Populate the DOM with AJAX data
1. Make dynamic AJAX requests

## Explain AJAX

- AJAX Stands for Asynchronous JavaScript And XML
- It's just a way for your page to get data from external sources

We'll have our page get data from the external site http://www.omdbapi.com/.

- From the documentation, we can see that [https://www.omdbapi.com/?apikey=YOUR-API-KEY-HERE&t=Frozen]() will get data about the movie Frozen
- The `apikey` parameter is necessary for this external source so that can track and possibly limit access to specific people.
- You can get a free OMDb API key here: http://www.omdbapi.com/apikey.aspx

## Install JSON Formatter to make viewing JSON easier

- JSON stands for Javascript Object Notation
- It's just a way to represent data that looks like a Javascript object or array
- JSON Formatter extension just makes it easier to view JSON data.

Install it:

- Go to https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa
- Click on "Add To Chrome"

## Have jQuery make an AJAX request

```html
<!DOCTYPE html>
<html>
    <head>
        <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
        <script src="app.js"></script>
    </head>
    <body>
    </body>
</html>
```

Let's use JavaScript to get data for our page:

```javascript
$.ajax({
    url:'https://www.omdbapi.com/?apikey=YOUR-API-KEY-HERE&t=Frozen'
}).then(
    (data)=>{
        console.log(data);
    },
    ()=>{
        console.log('bad request');
    }
);
```

`.then()` takes two parameters: a callback for when the ajax request succeeds and a callback for when it fails

## Populate the DOM with AJAX data

Now that we have successfully made an AJAX request, let's use the response from OMDb to populate the DOM to look like this:

```html
<h1>Movie Info</h1>
<dl>
    <dt>Title</dt>
    <dd id="title"></dd>

    <dt>Year</dt>
    <dd id="year"></dd>

    <dt>Rating</dt>
    <dd id="rated"></dd>
</dl>
```

Since we're going to be manipulating the DOM, let's wait for it to load before we make the AJAX request:

```javascript
$(()=>{
    $.ajax({
        url:'https://www.omdbapi.com/?apikey=YOUR-API-KEY-HERE&t=Frozen'
    }).then(
        (data)=>{
            console.log(data);
        },
        ()=>{
            console.log('bad request');
        }
    );
})
```

Now let's use the data to populate the DOM:

```javascript
$(()=>{
    $.ajax({
        url:'https://www.omdbapi.com/?apikey=YOUR-API-KEY-HERE&t=Frozen'
    }).then(
        (data)=>{
            $('#title').html(data.Title);
            $('#year').html(data.Year);
            $('#rated').html(data.Rated);
        },
        ()=>{
            console.log('bad request');
        }
    );
})
```

## Make dynamic AJAX requests

Currently, we're getting data for Frozen every time the page loads.  Let's let the user choose the movie:

```html
<form>
    <input type="text" placeholder="movie title"/>
    <input type="submit" value="Get Movie Info" />
</form>
```

Move the AJAX request to within a form submit event handler:

```javascript
$(()=>{
    $('form').on('submit', (event)=>{

        event.preventDefault();

    $.ajax({
            url:'https://www.omdbapi.com/?apikey=YOUR-API-KEY-HERE&t=Frozen'
        }).then(
            (data)=>{
                $('#title').html(data.Title);
                $('#year').html(data.Year);
                $('#rated').html(data.Rated);
            },
            ()=>{
                console.log('bad request');
            }
        );
    })
})
```

Lastly, let's use the input that user types to modify the AJAX request:

```javascript
$(()=>{
    $('form').on('submit', (event)=>{

        event.preventDefault();

        const userInput = $('input[type="text"]').val();

        $.ajax({
            url:'https://www.omdbapi.com/?apikey=YOUR-API-KEY-HERE&t=' + userInput
        }).then(
            (data)=>{
                $('#title').html(data.Title);
                $('#year').html(data.Year);
                $('#rated').html(data.Rated);
            },
            ()=>{
                console.log('bad request');
            }
        );
    })
})
```
