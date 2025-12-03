window.onload = () => {
  document.querySelector('#hours1').focus();
};

function calcGPA() {
  const grades = document.querySelectorAll('.grade-input');
  const hours = document.querySelectorAll('.credit-input');
  const map = { A: 4, B: 3, C: 2, D: 1, F: 0 };

  let total = 0;
  let totalH = 0;
  let validCount = 0;

  const len = Math.max(grades.length, hours.length);

  for (let i = 0; i < len; i++) {
    const gElem = grades[i];
    const hElem = hours[i];

    const gVal = gElem ? gElem.value.trim().toUpperCase() : "";
    const hVal = hElem ? hElem.value.trim() : "";

    if (gVal === "" && hVal === "") continue;

    if (gVal === "" || hVal === "") {
      alert(`Enter BOTH grade and hours for Course ${i + 1}`);
      return;
    }

    const g = map[gVal];
    const h = parseFloat(hVal);

    if (g === undefined) {
      alert(`Invalid grade "${gVal}". Use A, B, C, D, or F only.`);
      return;
    }

    if (isNaN(h) || h <= 0) {
      alert(`Credit hours for Course ${i + 1} must be a positive number.`);
      return;
    }

    validCount++;
    total += g * h;
    totalH += h;
  }

  if (validCount < 2) {
    alert('Enter at least 2 valid rows');
    return;
  }

  document.getElementById('avg').value = (total / totalH).toFixed(2);
}

function resetGPA() {
  document.querySelectorAll('.grade-input, .credit-input').forEach(e => (e.value = ''));
  const avg = document.getElementById('avg');
  if (avg) avg.value = '';
  const first = document.querySelector('#hours1');
  if (first) first.focus();
}
