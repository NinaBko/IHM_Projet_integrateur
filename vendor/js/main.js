document.getElementById("myButtonNewSolution").onclick = function () {
    location.href = "startResolution.html";
};

document.getElementById("myButtonChangeGANTT").onclick = function () {
    location.href = "aleaGantt.html";
};

document.getElementById("myButtonShowGANTT").onclick = function () {
    location.href = "GANTT.html";
};

function myFunction() {
    $(document).ready(function(){
        $.get("https://qrfx7lea3b.execute-api.eu-west-3.amazonaws.com/dev/project/solution", function(data){
            $('#insertGANTT').html(data);
        });
    });    
}


document.getElementById("buttonStartCalculus").onclick = function () {
    location.href = "GANTT.html";
};


