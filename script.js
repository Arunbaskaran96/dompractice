// var division = document.createElement("div");
// division.innerHTML="<span class='main1'>this is span</span>";
// division.setAttribute("class","main")
// document.body.append(division)


//2

// var div = document.createElement("div");
// div.setAttribute("class","container")
// var row = document.createElement("div");
// row.setAttribute("class","row")
// var col = document.createElement("div");
// col.setAttribute("class","col")
// col.innerHTML="this is col"
// row.append(col)
// div.append(row)
// document.body.append(div)


// var label=document.createElement("label")
// label.setAttribute("for","email")
// var input=document.createElement("input")
// label.setAttribute("type","email")
// label.setAttribute("id","email")
// var button=document.createElement("button")
// button.innerHTML="Clickme"
// label.append()

function createLabel(tagname,attname,attvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attname,attvalue);
    ele.innerHTML=content;
    return ele
}

function createInput(tagname,attname,attvalue,attname1,attvalue1,){
    var ele=document.createElement(tagname);
    ele.setAttribute(attname,attvalue);
    ele.setAttribute(attname1,attvalue1);
    return ele
}


function createBreak(tagname){
    var ele=document.createElement(tagname);
    return ele
}


var label1=createLabel("label","for","fname","Firstname")
var br1=createBreak("br")
var input1=createInput("input","type","name","id","fname")
var br2=createBreak("br")

var label2=createLabel("label","for","mname","Middlename")
var br3=createBreak("br")
var input2=createInput("input","type","name","id","mname")
var br4=createBreak("br")

var label3=createLabel("label","for","lname","Lastname")
var br5=createBreak("br")
var input3=createInput("input","type","name","id","lname")
var br6=createBreak("br")

var label4=createLabel("label","for","number","Phonenumber")
var br7=createBreak("br")
var input4=createInput("input","type","number","id","number")
var br8=createBreak("br")




document.body.append(label1,br1,input1,br2,label2,br3,input2,br4,label3,br5,input3,br6,label4,br7,input4,br8)