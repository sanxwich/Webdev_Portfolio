document.addEventListener("DOMContentLoaded", () => {
  // Stars generation
  function generateStars(n) {
    let value = "";
    for (let i = 0; i < n; i++) {
      const x = Math.floor(Math.random() * 2000);
      const y = Math.floor(Math.random() * 2000);
      value += `${x}px ${y}px #FFF`;
      if (i < n - 1) value += ", ";
    }
    return value;
  }

  const s1 = document.getElementById("stars");
  const s2 = document.getElementById("stars2");
  const s3 = document.getElementById("stars3");
  const s4 = document.getElementById("stars4");
  const s5 = document.getElementById("stars5");
  const s6 = document.getElementById("stars6");
  const s7 = document.getElementById("stars7");
  const s8 = document.getElementById("stars8");
  const s9 = document.getElementById("stars9");

  if (s1)
    s1.style.cssText = `width:1px;height:1px;position:absolute;box-shadow:${generateStars(700)};animation:animStar 50s linear infinite;`;
  if (s2)
    s2.style.cssText = `width:2px;height:2px;position:absolute;box-shadow:${generateStars(200)};animation:animStar 100s linear infinite;`;
  if (s3)
    s3.style.cssText = `width:3px;height:3px;position:absolute;box-shadow:${generateStars(100)};animation:animStar 150s linear infinite;`;
  if (s4)
    s4.style.cssText = `width:1px;height:1px;position:absolute;box-shadow:${generateStars(700)};animation:animStar 50s linear infinite;`;
  if (s5)
    s5.style.cssText = `width:2px;height:2px;position:absolute;box-shadow:${generateStars(200)};animation:animStar 100s linear infinite;`;
  if (s6)
    s6.style.cssText = `width:3px;height:3px;position:absolute;box-shadow:${generateStars(100)};animation:animStar 150s linear infinite;`;
  if (s7)
    s7.style.cssText = `width:3px;height:3px;position:absolute;box-shadow:${generateStars(100)};animation:animStar 150s linear infinite;`;
  if (s8)
    s8.style.cssText = `width:3px;height:3px;position:absolute;box-shadow:${generateStars(100)};animation:animStar 150s linear infinite;`;
  if (s9)
    s9.style.cssText = `width:3px;height:3px;position:absolute;box-shadow:${generateStars(100)};animation:animStar 150s linear infinite;`;

  // ✅ Footer stars — OUTSIDE the card if block
  const footer = document.querySelector(".Footer");
  if (footer) {
    for (let i = 0; i < 30; i++) {
      const s = document.createElement("div");
      s.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: #fff;
        pointer-events: none;
        z-index: 2;
        width: ${Math.random() * 2 + 1}px;
        height: ${Math.random() * 2 + 1}px;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: pulse-sigil ${Math.random() * 4 + 2}s ease ${Math.random() * 5}s infinite;
      `;
      footer.appendChild(s);
    }
  }

  // Card tilt — stays inside its own if block
  const card = document.querySelector(".lightcone-card");
  if (card) {
    const card_blick = document.querySelectorAll(".card-blick");

    function changeBorderColor(border, value) {
      document.querySelectorAll(`.card-thick-${border}`).forEach((e) => {
        e.style.setProperty("background-position", `0 ${value}%`);
      });
    }

    document.addEventListener("mousemove", (e) => {
      let boxBoundingRect = card.getBoundingClientRect();
      let boxCenter = boxBoundingRect.left + boxBoundingRect.width / 2;
      let angle = Math.max(
        Math.min(
          21,
          Math.atan2((e.pageX - boxCenter) * 0.002, Math.PI) * (180 / Math.PI),
        ),
        -21,
      );
      card.style.transform = `rotateY(${angle}deg) rotateZ(9deg)`;
      card_blick.forEach((el) => {
        el.style.left = `-${200 + (angle - 1) * 10}%`;
      });
      let pos = 50 + (angle / 21) * 50;
      changeBorderColor("left", pos);
      changeBorderColor("right", pos);
    });
  }
});
