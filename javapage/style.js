function validateform(){
    let x = document.forms ["myform"] ["name"].value;
    if (x == "") {
        alert("Name must be entered");
        return false;
    }
}