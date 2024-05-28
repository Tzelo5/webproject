const currentYear = new Date().getFullYear();
const yearElement = document.getElementById("currentYear");
if (yearElement) {
  yearElement.textContent = currentYear;
}
