$(function() {
    read(dir);
});

let dir = "../";

function read(dirr) {
    $.ajax({
        type: "GET",
        url: ".conf/read.php?p=" + dirr,
        success: function(result) {

            let dirarr = dirr.split("/");
            dirarr.splice(dirarr.length - 1, 1);
            dirarr.splice(dirarr.length - 1, 1);
            let dirrr = dirarr.join("/");

            let arr = result.split("|");

            console.log(dirarr);
            // console.log(result);
            // console.log(arr);
            if (dirrr == "") {
                dirrr = ".."
            }
            document.getElementById("list").innerHTML = "";
            document.getElementById("dir").innerHTML = dirr;
            document.getElementById("back").innerHTML = `<button onclick="read('${dirrr}/');" >back</button>`;
            arr.forEach(element => {
                // console.log(element);
                console.log(element.split("."));
                if (element != "index.html" && element.split(".")[0] != "") {
                    // document.getElementById("list").innerHTML += `<li>`+`<a href='.conf/download.php?file=${element}'>`+element+"</a>"+"</li>"; 
                    document.getElementById("list").innerHTML += `<li>` +

                        "<div class='title'>" +
                        `<label "href"='.conf/download.php?file=${element}'>` + element + "</label>" +
                        `<button onclick="read('${dirr}${element}/');">move</button>` +
                        "</div>" +

                        "<div class='input'>" +

                        "<div class='i-1'>" +
                        `<a href="https://files.clickey.site/.conf/download.php?file=${element}">download_1 </a>` +
                        `<button onclick="copy('https://files.clickey.site/.conf/download.php?file=${element}')"> copy_url</button>` +
                        "</div>" +

                        "<div class=''i-2>" +
                        `<a href="http://main.clickey.site:190/.conf/download.php?file=${element}">download_2 </a>` +
                        `<button onclick="copy('http://main.clickey.site:190/.conf/download.php?file=${element}')"> copy_url</button>` +
                        "</div>" +

                        "<div class='i-3'>" +
                        `<a href="http://lan.clickey.site:90/.conf/download.php?file=${element}">download_lan </a>` +
                        `<button onclick="copy('http://lan.clickey.site:90/.conf/download.php?file=${element}')"> copy_url</button>` +
                        "</div>" +

                        "</div>" +
                        "</li>" +
                        "<br>";

                }
            });
        }
    })
};

function copy(text) {
    function copyToClipboard(text) {
        window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
    }
    copyToClipboard(text);
}