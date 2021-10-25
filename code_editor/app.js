window.onload = function () {
    let htmlEditor = ace.edit("html");
    htmlEditor.session.setMode("ace/mode/html");
    htmlEditor.setTheme("ace/theme/nord_dark");
    htmlEditor.session.setValue(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>`);
    htmlEditor.session.setUseWrapMode(true);
    htmlEditor.setShowPrintMargin(false);
    htmlEditor.setHighlightActiveLine(false);
    htmlEditor.session.on('change', function (delta) {
        update();
    });

    let cssEditor = ace.edit("css");
    cssEditor.session.setMode("ace/mode/css");
    cssEditor.setTheme("ace/theme/nord_dark");
    cssEditor.setHighlightActiveLine(false);
    cssEditor.session.setValue(
        `/* css goes here */
`);
    cssEditor.setShowPrintMargin(false);
    cssEditor.session.on('change', function (delta) {
        update();
    });

    let jsEditor = ace.edit("js");
    jsEditor.session.setMode("ace/mode/javascript");
    jsEditor.setTheme("ace/theme/nord_dark");
    jsEditor.session.setValue(
        `/* JavaScript goes here */
`);
    jsEditor.setShowPrintMargin(false);
    jsEditor.setHighlightActiveLine(false);
    jsEditor.session.on('change', function (delta) {
        update();
    });

    function update() {
        let output = document.querySelector(".output .virtual-iframe").contentWindow.document;
        output.open();
        output.write("<style>" + cssEditor.getValue() + "</style>" + htmlEditor.getValue() + "<script>" + jsEditor.getValue() + "</script>");
        output.close();
    }
}