const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

// When YES is clicked
yesBtn.addEventListener("click", () => {
  message.innerText = "Yayyy 💖 You are my Valentine 😍";
  startHearts();
});

// When mouse goes near NO button
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// Heart animation
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.innerText = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "0";
    heart.style.fontSize = "30px";
    heart.style.animation = "float 3s linear";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 3000);
  }, 300);
}

// Animation style
const style = document.createElement("style");
style.innerHTML = `
@keyframes float {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-100vh);
    opacity: 0;
  }
}
`;
document.head.appendChild(style);
