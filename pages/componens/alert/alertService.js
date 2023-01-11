import Swal from "sweetalert2";


const alertService = () => {
    errorAlert,
    successAlert
}

export async function errorAlert(title, message){
    Swal.fire({
        title: title,
        text: message,
        icon: "error",
        confirmButtonText: "OK",
      });
}

export async function successAlert(title, message, url){
    Swal.fire({
        title: title,
        text: message,
        icon: "success",
        confirmButtonText: "OK",
    }).then(function () {
        // Redirect the user
        window.location.href = url;
    });
}

export default alertService;