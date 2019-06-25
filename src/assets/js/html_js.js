/* Cache css/js files in local storage */
function _cacheResource(name, t, version, url) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                localStorage.setItem(name, JSON.stringify({
                    content: xmlhttp.responseText,
                    type: t,
                    version: version
                }));
            } else {
                console.warn('error loading ' + url);
            }
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function _loadResource(url, type, name, version, callback) {

    if (type == "js") {
        var script = document.createElement('script');
            script.id = name;
            script.src = url;

    } else if (type == "css") {
        var css = document.createElement("link");
            css.id = name;
            css.rel = "stylesheet";
            css.href = url;
            
        document.head.insertBefore(css, document.head.childNodes[ document.head.childNodes.length - 1 ].nextSibling);
    }
    var s = document.getElementById(name);

    if (s.readyState) {
        s.onreadystatechange = function() {
            if (s.readyState == "loaded" || s.readyState == "complete") {
                s.onreadystatechange = null;
                _cacheResource(name, type, version, url);
                if (callback) callback();
            }
        };
    } else {
        s.onload = function() {
            _cacheResource(name, type, version, url);
            if (callback) callback();
        };
    }

}

function _injectResource(content, url, name, version, callback) {
    var c = JSON.parse(content);

    if (c.version != version) {
        localStorage.removeItem(name);
        _loadResource(url, c.type, name, version, callback);
        return;
    }
    if (c.type == "js") {
        var s = document.createElement('script');
    } else if (c.type == "css") {
        var s = document.createElement('style');
    }
    var scriptContent = document.createTextNode(c.content);
    s.appendChild(scriptContent);
    document.getElementsByTagName("head")[0].appendChild(s);
    if (callback) callback();
}


function requireResource(name, type, version, url, callback) {
    var c = localStorage.getItem(name);
    if (c == null) {
        _loadResource(url, type, name, version, callback);
    } else {
        _injectResource(c, url, name, version, callback);
    }
}



/* Font face observer */
var html = document.querySelector('body');

if (sessionStorage.fontsLoaded) {
    html.classList.add('---is-font-loaded');
} 
else {
    var script = document.createElement('script');
        script.src = 'assets/js/font_face_observer.min.js';
        script.async = true;

    script.onload = function () {
        var extraBold = new FontFaceObserver('Gilroy', {
            weight: 800
        });
        var semiBold = new FontFaceObserver('Gilroy', {
            weight: 600
        });
        var regular = new FontFaceObserver('Gilroy', {
            weight: 400
        });
        var light = new FontFaceObserver('Gilroy', {
            weight: 300
        });

        Promise.all([
            light.load(),
            regular.load(),
            semiBold.load(),
            extraBold.load()
        ]).then(function () {
            html.classList.add('---is-font-loaded');
            sessionStorage.fontsLoaded = true;
        });
    };
    document.head.appendChild(script);
}