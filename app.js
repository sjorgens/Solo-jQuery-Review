/**
 * Created by Scott on 1/4/16.
 */

///////////////  Import JSON File  ///////////////
$.ajax("data.json").then(function(response){

    //  Loop through JSON and append data to DOM
    for (var i = 0; i < response.length; i++){
        var $content = '';
        $id = response[i].id;
        $gender = response[i].gender;
        $firstName = response[i].first_name;
        $lastName = response[i].last_name;

        if (response[i].email == undefined){
            $email = "none provided";
        } else {
            $email = response[i].email;
        }


        $content = "ID: " + $id + "<br/>" + "Gender: " + $gender + "<br/>" + "First Name: " + $firstName + "<br/>" + "Last Name: " + $lastName + "<br/>" + "Email: " + $email + "<br/>" + "<br/>";

        $('.content').append($content);
    }
});