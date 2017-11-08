"use strict";

// В разработке
function clickCreate() {
    drawHtmlElem(htmlContext, createMenu());
    drawHtmlElem(htmlContext, createTextBlock());
    
    var codeField = createFieldSet("");
    codeField.innerHTML = createCalendar(tmpYear,tmpMonth);
    document.getElementById("code").appendChild(codeField);
}

function createTextBlock() {
    var codeDiv = createDiv("code");
    var codeField = createFieldSet("");
    var codeForm = createForm();
    codeForm.appendChild(document.createTextNode("simple text1"));
    codeForm.appendChild(document.createElement("br"));
    codeForm.appendChild(document.createTextNode("simple text2"));
    codeForm.appendChild(document.createElement("br"));
    codeForm.appendChild(document.createTextNode("simple text3"));
    codeForm.appendChild(document.createElement("br"));
    codeField.appendChild(codeForm);
    codeDiv.appendChild(codeField);
    return codeDiv;
}


function createCheckBox(text, idElem) {
    var labelInsert = document.createElement("label");
    var tmpInsert = document.createElement("input");
    tmpInsert.type = "checkbox";
    if (idElem) tmpInsert.id = idElem;
    labelInsert.appendChild(tmpInsert);
    labelInsert.appendChild(document.createTextNode("  " + text));
    return labelInsert;
}

function createDiv(idElem) {
    var elem = document.createElement("div");
    if (idElem) elem.id = idElem;
    return elem;
}

function createFieldSet(text) {
    var elem = document.createElement("fieldset");
    if (text)
    {
        var childElem = document.createElement("legend");
        childElem.innerHTML = text;
        elem.appendChild(childElem);
    }
    return elem;
}

function createForm(idElem) {
    var elem = document.createElement("form");
    if (idElem) elem.id = idElem;
    return elem;
}

function drawHtmlElem(htmlTarget, htmlEl, htmlElBefore) {
    if (!htmlElBefore) htmlTarget.insertBefore(htmlEl, null);
    else  htmlTarget.insertBefore(htmlEl, htmlElBefore);
}

function createMenu() {
    var menuDiv = createDiv("menu");
    var menuField = createFieldSet("Configure Calendar");
    var menuForm = createForm();
    menuField.appendChild(createCheckBox("allow change month","allowChangeMonth"));
    menuField.appendChild(document.createElement("br"));
    menuField.appendChild(createCheckBox("allow add task","allowAddTask"));
    menuField.appendChild(document.createElement("br"));
    menuField.appendChild(createCheckBox("allow remove task","allowRemoveTask"));
    menuField.appendChild(document.createElement("br"));
    menuField.appendChild(createCheckBox("show month/year","showMonth"));
    menuForm.appendChild(menuField);
    menuDiv.appendChild(menuForm);
    return menuDiv;
}
