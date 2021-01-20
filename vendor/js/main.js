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

function formNewSolutionSubmit(){
    var your_form = $("#new_solution_form");

    var urlLink = "https://qrfx7lea3b.execute-api.eu-west-3.amazonaws.com/dev/project/parameters/";
    urlLink = urlLink + $("#inputMeca1").val() + "/" + $("#inputQC1").val() + "/" + $("#inputMeca2").val() + "/" +$("#inputQC2").val() + "/" + $("#inputTimeout").val();

    //alert(urlLink)
    $.post(urlLink,{},
    function(data, status){
        alert("Calcul lancé !");
    });
}

function formAleaSubmit(){
    /*$('submitButtonAlea').click(function() {
        $.post("https://qrfx7lea3b.execute-api.eu-west-3.amazonaws.com/dev/project/constraints",$("#alea_form").serialize(),
            function(data, status){
                alert("Data: " + data + "\nStatus: " + status);
            });
    });*/

       //hang on event of form with id=myform
       $("#alea_form").submit(function(e) {

        //prevent Default functionality
        e.preventDefault();

        //get the action-url of the form
        var actionurl = e.currentTarget.action;
        //alert($("#alea_form").serialize())

        //do your own request an handle the results
        $.ajax({
                url: "https://qrfx7lea3b.execute-api.eu-west-3.amazonaws.com/dev/project/constraints?" +$("#alea_form").serialize(),
                type: 'PUT',
                success: function(data) {
                    alert("Alea added");
                }
        });

    });
}


