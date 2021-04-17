// Sub-sum

function sub_sum() {
  const p = Array.from(document.querySelectorAll(".u-price"));
  const q = Array.from(document.querySelectorAll(".count"));
  const s = Array.from(document.querySelectorAll(".subtotal"));
  let r;

  for (let i in q) {
    s[i].innerHTML = p[i].innerHTML * q[i].value;
    r = s[i].innerHTML;
    total();
  }
  return (s.innerText = r);
}
// Total

function total() {
  let t = document.querySelector(".total-value h2");
  let sub = Array.from(document.querySelectorAll(".subtotal"));
  var sum = 0;
  for (let i in sub) {
    sum += parseInt(sub[i].innerText, 10);
  }

  return (t.innerHTML = sum + " $");
}

// Like Button
let like = document.getElementsByClassName("heart");
for (let btn of like) {
  btn.style.color = "gray";
  btn.addEventListener("click", function () {
    if (btn.style.color === "red") {
      btn.style.color = "gray";
    } else {
      btn.style.color = "red";
    }
  });
}

// Remove Button
let rmveBtn = document.getElementsByClassName("rmve-btn");
for (let el of rmveBtn) {
  el.addEventListener("click", function () {
    const parent = el.closest(".product");
    parent.remove();
    total();
    // sub_sum();
  });
}

// Add/Remove Quantity
let inc = document.getElementsByClassName("plus");
for (let el of inc) {
  el.addEventListener("click", function () {
    el.previousElementSibling.value++;
    sub_sum();
  });
}

let dec = document.getElementsByClassName("minus");
for (let el of dec) {
  el.addEventListener("click", function () {
    let counter = el.nextElementSibling.value;
    let d = parseInt(counter, 10);
    if (d > 0) {
      d--;
    }
    el.nextElementSibling.value = d;
    sub_sum();
  });
}
