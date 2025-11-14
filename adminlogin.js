// Muscle Factory Admin Login Script

document.getElementById("adminLoginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let user = document.getElementById("adminUser").value;
    let pass = document.getElementById("adminPass").value;
    let errorMsg = document.getElementById("errorMsg");

    // Demo admin login 
    if (user === "Guna Sekhar" && pass === "guna1234") {
        alert("Login Successful! Welcome Guna Sekhar💪");
        window.location.href = "admin-dashboard.html"; // you can update this later
    } else {
        alert("Please Enter correct Password")
        errorMsg.textContent = "Invalid Username or Password!";
    }

});
