function copyCA(){
  const ca = document.getElementById("contract").innerText;
  navigator.clipboard.writeText(ca);
  alert("Contract address copied!");
}
