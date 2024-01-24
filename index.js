let name = 3;

function buttonClicked() {
    document.getElementById('Title').innerHTML = name++;
}


// Code to read json ojbect from url. Could be used to get the instagram images links instead of the current solution
function getJSONP(url, success) {

    var ud = '_' + +new Date,
        script = document.createElement('script'),
        head = document.getElementsByTagName('head')[0] 
               || document.documentElement;

    window[ud] = function(data) {
        head.removeChild(script);
        success && success(data);
    };

    script.src = url.replace('callback=?', 'callback=' + ud);
    head.appendChild(script);

}

console.log("hello")
getJSONP('https://feeds.behold.so/F8d9SV19LtaVozcxkOsi', function(data){
    console.log(data);
});  
