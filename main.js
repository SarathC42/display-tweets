console.log("Hello from the javascript");

var textInput = document.querySelector("#textInput")
var categoryList = document.querySelector("#categoriesList");
var categories=[];

textInput.addEventListener("keyup",function(event){
    if(event.keyCode==188){
        if(this.value.length < 2){
            console.log("category name is required");
        }
        else {
          var category = this.value.substring(0, this.value.length-1);
          console.log(category);
          categories.push(category);
  
         
          const Twit = require("twit");
          const notifier = require('node-notifier');
          const open = require('open');
          const franc = require('franc')
  
      
  
          const apikey = 'xxx'
          const apiSecretKey = 'xxx'
          const accessToken = 'xxx'
          const accessTokenSecret = 'xxx'
          
  
          var T = Twit({
            consumer_key:         apikey,
            consumer_secret:      apiSecretKey,
            access_token:         accessToken,
            access_token_secret:  accessTokenSecret,
            });
  
          (async () => {
              var T = await resolveAfter2Seconds(10);
  
                // //1. GET RECENT TWEETS
              T.get('search/tweets', { q:category, count: 10 }, function (err, data, response) {
              const tweets = data.statuses
              .map(tweet => `LANG: ${franc(tweet.text)} : ${tweet.text}`) //CHECK LANGUAGE
              .map(tweet => tweet.text)
              .filter(tweet => tweet.toLowerCase().includes(""));
              console.log(tweets);
              // //2. REAL TIME MONITORING USING STREAM (HASHTAG)
              // var stream = T.stream('statuses/filter', { track: '#tesla' })
              // stream.on('tweet', function (tweet) {
              //     console.log(tweet.text);
              //     console.log('Language: ' + franc(tweet.text));
              //     console.log('------');
              // })

              // 3. REAL TIME MONITORING USING STREAM (LOCATION)
              var sanFrancisco = [ '-122.75', '36.8', '-121.75', '37.8' ]
              var stream = T.stream('statuses/filter', { locations: sanFrancisco })
              
              //SHOW NOTIFICATION FOR EACH RECEIVED TWEET
              stream.on('tweet', function (tweet) {
                console.log(tweet.text);
                let url = `https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`

                notifier.notify({
                  title: tweet.user.name,
                  message: tweet.text
                });

                notifier.on('click', async function(notifierObject, options, event) {
                  console.log('clicked');
                  await open(url);
                  
                });
                
              })
              function PrintDiv() {  
                      var divContents = document.getElementById(tweets).innerHTML;  
                      var printWindow = window.open('', '', 'height=200,width=400');  
                      printWindow.document.write('<html><head><title>Print DIV Content</title>');  
                      printWindow.document.write('</head><body >');  
                      printWindow.document.write(divContents);  
                      printWindow.document.write('</body></html>');  
                      printWindow.document.close();  
                      printWindow.print()
  
             
               }
          
              });
    
              } )
                
            }
        
               }
             }
           )
  