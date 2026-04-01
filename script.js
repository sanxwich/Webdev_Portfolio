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

const smallStars = generateStars(700);
const mediumStars = generateStars(200);
const bigStars = generateStars(100);

const s1 = document.getElementById("stars");
const s2 = document.getElementById("stars2");
const s3 = document.getElementById("stars3");

s1.style.cssText = `
  width: 1px; height: 1px;
  box-shadow: ${smallStars};
  animation: animStar 50s linear infinite;
`;
s2.style.cssText = `
  width: 2px; height: 2px;
  box-shadow: ${mediumStars};
  animation: animStar 100s linear infinite;
`;
s3.style.cssText = `
  width: 3px; height: 3px;
  box-shadow: ${bigStars};
  animation: animStar 150s linear infinite;
`;
