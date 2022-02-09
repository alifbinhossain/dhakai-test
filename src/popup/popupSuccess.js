import Swal from "sweetalert2";

const popupSuccess = (title) => {
  return Swal.fire({
    icon: "success",
    title: "<h3 style='color:#fff'>" + title + "</h3>",
    showConfirmButton: false,
    timer: 1500,
    padding: "1rem 2rem 3rem",
    background: "#3c4a49",
  });
};

export default popupSuccess;
