// Це приклад скрипту, який буде виконуватися після завантаження сторінки
document.addEventListener("DOMContentLoaded", function() {
    console.log("Сторінка завантажена та готова до взаємодії.");
});
/* Установите ширину боковой панели на 250 пикселей (показать его) */
function openNav() {
    document.getElementById("mySidepanel").style.width = "180px";
  }
  
  /* Установите ширину боковой панели в 0 (скройте ее) */
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }