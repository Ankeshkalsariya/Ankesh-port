// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn?.addEventListener('click', ()=>{
  const visible = mobileMenu.style.display === 'flex';
  mobileMenu.style.display = visible ? 'none' : 'flex';
});

// Smooth reveal on scroll
const io = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, {threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Active nav link highlight
const links = document.querySelectorAll('nav a');
const sections = [...links].map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
const spy = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const id = '#' + entry.target.id;
      links.forEach(l=> l.classList.toggle('active', l.getAttribute('href')===id));
    }
  })
},{rootMargin:'-40% 0px -55% 0px', threshold:0});
sections.forEach(s=>spy.observe(s));

// Contact form handler (mailto draft)
function handleSubmit(e){
  e.preventDefault();
  const data = new FormData(e.target);
  const name = encodeURIComponent(data.get('name'));
  const email = encodeURIComponent(data.get('email'));
  const message = encodeURIComponent(data.get('message'));
  const subject = `New project inquiry from ${name}`;
  const body = `Hi Ankesh,%0D%0A%0D%0A${decodeURIComponent(message)}%0D%0A%0D%0AReply to: ${decodeURIComponent(email)}`;
  window.location.href = `mailto:ankeshkalsariya21@gmail.com?subject=${subject}&body=${body}`;
  e.target.reset();
  return false;
}

// Modal popup
const modal = document.getElementById("projectModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".view-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = btn.getAttribute("data-img");
  });
});

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = e => {
  if (e.target === modal) modal.style.display = "none";
};

// Year
document.getElementById('year').textContent = new Date().getFullYear();
