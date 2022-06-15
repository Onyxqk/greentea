document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('mileage').addEventListener("change", function () {
    document.getElementById('pollutionAmount').innerHTML=parseInt(document.getElementById('mileage').value) * 404 / 1000;
  });
});
