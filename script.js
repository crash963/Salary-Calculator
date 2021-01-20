const button = document.querySelector(".btn");

button.addEventListener("click", function () {
  document.querySelector(".result").textContent =
    String(
      document.querySelector(".daysMonth").value *
        document.querySelector(".hoursDay").value *
        document.querySelector(".hourlyPay").value
    ) + "Kč";
});
