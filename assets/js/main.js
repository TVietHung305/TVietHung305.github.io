document.querySelectorAll("#year").forEach(el=>el.textContent=new Date().getFullYear());
document.querySelectorAll(".filter").forEach(button=>button.addEventListener("click",()=>{
  document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));
  button.classList.add("active");
  const chosen=button.dataset.filter;
  document.querySelectorAll(".archive-item").forEach(item=>{
    item.hidden=chosen!=="all" && item.dataset.category!==chosen;
  });
}));