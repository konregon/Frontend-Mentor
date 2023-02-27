const rating = document.querySelector(".rating");
const thanks = document.querySelector(".thanks");
const submitBtn = document.getElementById("submit-btn");
const backBtn = document.getElementById("back-btn");
const userRating = document.getElementById("user-rating");
const rateBtn = document.querySelectorAll(".rate-btn");

// event happen after clicking Submit btn
submitBtn.addEventListener("click", () => {
  thanks.classList.remove("hidden");
  rating.style.display = "none";
});

// event happen after clicking Rate again btn
backBtn.addEventListener("click", () => {
  thanks.classList.add("hidden");
  rating.style.display = "block";
});

// user rating
rateBtn.forEach((rate) => {
  rate.addEventListener("click", () => {
    userRating.innerHTML = rate.innerHTML;
  });
});
