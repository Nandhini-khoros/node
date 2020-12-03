function GetTimeLine() {
    $(document).ready(function () {

        jQuery.ajax({
            url: "http://localhost:8080/twitter/gettimeline",
            type: "GET",
            success: function (result) {
                console.log(result);
                const tweets = result;

                document.getElementById('tweetSection').innerHTML = tweets.map(tweet =>
                    `<div class="box" >
                     <div onclick="location.href='https://twitter.com/${tweet.screenName}/status/${tweet.id}';" >
                     <img class="sizeofimage" src="${tweet.profileImageUrl}" align="left" />
                     <div class="content"> <B>Name:</B>${tweet.name}<br></div>
                     <div class="content"><B>Message:</B>${tweet.txt}<br></div>
                     <div class="content"><B>CreatedAt:</B>${tweet.createdAt}<br></div>
                     <div class="content"><B>Id:</B>${tweet.id}<br></div>
                     <div class="content"><B>ProfileImageUrl:</B>${tweet.profileImageUrl}<br></div>
                     <div class="content"><B>ScreenName:</B>${tweet.screenName}<br></div>
                     <br>
                     <div class="content1"><B><a href="https://twitter.com/${tweet.screenName}"> </B>Click here to view profile</a></div>
                    <br><br></div>
                     </div>`
                ).join("")
            },
            error: function (error) {
                document.getElementById("tweetSection").innerHTML = 'error';
            }
        });
    })
}