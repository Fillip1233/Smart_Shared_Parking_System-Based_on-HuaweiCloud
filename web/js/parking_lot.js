function change_color1(boxid, middle, buttonid) {
    if (document.getElementById(buttonid).innerText == "预约") {
        document.getElementById(boxid).style.color = "white";
        document.getElementById(boxid).style.backgroundColor = "rgb(34,35,36)";
        document.getElementById(middle).style.borderBottom = "1px solid red";
    }
}

function change_color2(boxid, middle, buttonid) {
    if (document.getElementById(buttonid).innerText == "预约") {
        document.getElementById(boxid).style.color = "black";
        document.getElementById(boxid).style.backgroundColor = "white";
        document.getElementById(middle).style.borderBottom = "1px solid green";
    }
}



function bookParking(buttonid, labid) {
    if (document.getElementById(buttonid).innerText == "预约") {
        document.getElementById(buttonid).style.color = "black";
        document.getElementById(buttonid).style.backgroundColor = "darkgoldenrod";
        document.getElementById(buttonid).innerText = "取消预约";
        setTimeout(() => {
            document.getElementById(labid).style.display = "inline-block";
        }, 60);
    } else if(document.getElementById(buttonid).innerText == "取消预约"){
        document.getElementById(buttonid).style.color = "white";
        document.getElementById(buttonid).style.backgroundColor = "teal";
        document.getElementById(buttonid).innerText = "预约";
        setTimeout(() => {
            document.getElementById(labid).style.display = "none";
        }, 60);
    }
}



