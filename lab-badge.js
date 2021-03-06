/*
 * Add a lab badge to a site
 */
(function () {

    var linkText = "Back to my website";
    var linkHref = "https://f90.co.uk";
    var paraId = "lab-badge";
    var css = "#lab-badge { position:fixed !important; left: auto !important; right:0 !important; top:auto !important; bottom:100px !important; padding:0 !important; margin:0 !important; background:none !important; z-index: 99; }" +
            "#lab-badge a { display:block !important; position:relative !important; right: -112px !important; top:0 !important; background: rgba(255, 153, 0, 0.5) !important; border:3px solid #f90 !important; border-top-left-radius:30px !important; border-bottom-left-radius:30px !important; border-right:none !important; padding:8px 8px 8px 40px !important; color:#fff !important; font-family:Georgia, sans-serif !important; font-size:12px !important; line-height:1.5 !important; font-style:italic !important; font-weight:normal !important; text-decoration:none !important; transition:all 0.25s ease-in-out; }" +
            "#lab-badge span { display:block !important; position: absolute !important; left: 8px !important; top: 5px !important; color: #fff !important; font-size: 20px !important; line-height: 1 !important; letter-spacing: 1px !important; }" +
            "#lab-badge a:hover { right:0 !important; color:#fff !important; border-color:#f90 !important; background: rgba(255, 153, 0, 0.75) !important;  }";

    // add CSS
    function addCss () {
        var s = document.createElement("style");
        s.type = "text/css";
        if (s.styleSheet) {
            s.styleSheet.cssText = css;
        } else {
            s.appendChild(document.createTextNode(css));
        }
        document.getElementsByTagName("head")[0].appendChild(s);
    }

    // init
    function init () {

        // elements
        var body, p, a, span,
            d = document;

        body = d.getElementsByTagName("body")[0];

        // create the paragraph container as a child of the BODY element
        p = body.appendChild(d.createElement("p"));
        p.id = paraId;


        // create an anchor element for link
        a = d.createElement("a");
        a.innerHTML = linkText;
        a.href = linkHref;
        p.appendChild(a);

        // create inner text
        span = d.createElement("span");
        span.innerHTML = "<>";
        a.appendChild(span);

        addCss();

        // set up the onclick event to open new window on click
        addEvent(a, "click", function(e) {
            window.open(linkHref);
            if (e) {
                e.preventDefault();
            }
            return false;
        });
    }

    // add event - x browser
    function addEvent (obj, evType, fn) {
        if (obj.addEventListener){
            obj.addEventListener(evType, fn, false);
            return true;
        } else if (obj.attachEvent){
            var r = obj.attachEvent("on" + evType, fn);
            return r;
        } else {
            return false;
        }
    }

    // init
    addEvent(window, "load", init);
})();