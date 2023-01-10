import Swal from "sweetalert2";

export const alertService = {
    error,
    success
}

function error(title, message){
    Swal.fire({
        title: title,
        text: message,
        icon: "error",
        confirmButtonText: "OK",
      });
}

function success(title, message){
    Swal.fire({
        title: title,
        text: message,
        icon: "success",
        confirmButtonText: "OK",
    }).then(function () {
        // Redirect the user
        window.location.href = "/auth/login";
    });
}