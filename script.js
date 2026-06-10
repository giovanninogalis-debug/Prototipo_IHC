function openSubject(
    subject,
    average,
    attendance,
    status,
    classes,
    presence,
    absence
){

    document.getElementById("modalSubject").innerText = subject;
    document.getElementById("modalAverage").innerText = average;
    document.getElementById("modalAttendance").innerText = attendance;
    document.getElementById("modalStatus").innerText = status;

    document.getElementById("totalClasses").innerText = classes;
    document.getElementById("totalPresence").innerText = presence;
    document.getElementById("totalAbsence").innerText = absence;

    document.getElementById("subjectModal").style.display = "flex";
}

function closeModal(){
    document.getElementById("subjectModal").style.display = "none";
}

window.onclick = function(event){

    let modal = document.getElementById("subjectModal");

    if(event.target === modal){
        closeModal();
    }
}