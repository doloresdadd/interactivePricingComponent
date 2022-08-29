var priceRange = document.getElementById("priceRange");
var topPrice = document.getElementById("topPrice");
var bottomPrice = document.getElementById("bottomPrice");
var pageViews = document.getElementById("pageViews");
var yearlyToggle = document.getElementById("yearlyToggle");

window.onload = function () {
  if (priceRange.value <= 1 && yearlyToggle.checked) {
    topPrice.innerHTML = "8";
    bottomPrice.innerHTML = "8";
    var price = topPrice.innerHTML;
    price = (price / 100) * 75;
    topPrice.innerHTML = price;
    bottomPrice.innerHTML = price;
    pageViews.innerHTML = "10";
  } else if (priceRange.value <= 1 && !yearlyToggle.checked) {
    topPrice.innerHTML = "8";
    bottomPrice.innerHTML = "8";
    pageViews.innerHTML = "10";
  } else if (
    priceRange.value > 1 &&
    priceRange.value <= 33 &&
    yearlyToggle.checked
  ) {
    topPrice.innerHTML = "12";
    bottomPrice.innerHTML = "12";
    var price = topPrice.innerHTML;
    price = (price / 100) * 75;
    topPrice.innerHTML = price;
    bottomPrice.innerHTML = price;
    pageViews.innerHTML = "50";
  } else if (
    priceRange.value > 1 &&
    priceRange.value <= 33 &&
    !yearlyToggle.checked
  ) {
    topPrice.innerHTML = "12";
    bottomPrice.innerHTML = "12";
    pageViews.innerHTML = "50";
  } else if (
    priceRange.value > 33 &&
    priceRange.value <= 66 &&
    yearlyToggle.checked
  ) {
    topPrice.innerHTML = "16";
    bottomPrice.innerHTML = "16";
    var price = topPrice.innerHTML;
    price = (price / 100) * 75;
    topPrice.innerHTML = price;
    bottomPrice.innerHTML = price;
    pageViews.innerHTML = "100";
  } else if (
    priceRange.value > 33 &&
    priceRange.value <= 66 &&
    !yearlyToggle.checked
  ) {
    topPrice.innerHTML = "16";
    bottomPrice.innerHTML = "16";
    pageViews.innerHTML = "100";
  } else if (
    priceRange.value > 66 &&
    priceRange.value <= 99 &&
    yearlyToggle.checked
  ) {
    topPrice.innerHTML = "24";
    bottomPrice.innerHTML = "24";
    var price = topPrice.innerHTML;
    price = (price / 100) * 75;
    topPrice.innerHTML = price;
    bottomPrice.innerHTML = price;
    pageViews.innerHTML = "500";
  } else if (
    priceRange.value > 66 &&
    priceRange.value <= 99 &&
    !yearlyToggle.checked
  ) {
    topPrice.innerHTML = "24";
    bottomPrice.innerHTML = "24";
    pageViews.innerHTML = "500";
  } else if (priceRange.value >= 100 && yearlyToggle.checked) {
    topPrice.innerHTML = "36";
    bottomPrice.innerHTML = "36";
    var price = topPrice.innerHTML;
    price = (price / 100) * 75;
    topPrice.innerHTML = price;
    bottomPrice.innerHTML = price;
    pageViews.innerHTML = "1000";
  } else if (priceRange.value >= 100 && !yearlyToggle.checked) {
    topPrice.innerHTML = "36";
    bottomPrice.innerHTML = "36";
    pageViews.innerHTML = "1000";
  } else {
    topPrice.innerHTML = "0";
    bottomPrice.innerHTML = "0";
    pageViews.innerHTML = "0";
  }
};

// Update the current priceRange value (each time you drag the priceRange handle)
priceRange.oninput = function () {
  if (priceRange.value <= 1 && yearlyToggle.checked) {
    topPrice.innerHTML = "8";
    bottomPrice.innerHTML = "8";
    var price = topPrice.innerHTML;
    price = (price / 100) * 75;
    topPrice.innerHTML = price;
    bottomPrice.innerHTML = price;
    pageViews.innerHTML = "10";
  } else if (priceRange.value <= 1 && !yearlyToggle.checked) {
    topPrice.innerHTML = "8";
    bottomPrice.innerHTML = "8";
    pageViews.innerHTML = "10";
  } else if (
    priceRange.value > 1 &&
    priceRange.value <= 33 &&
    yearlyToggle.checked
  ) {
    topPrice.innerHTML = "12";
    bottomPrice.innerHTML = "12";
    var price = topPrice.innerHTML;
    price = (price / 100) * 75;
    topPrice.innerHTML = price;
    bottomPrice.innerHTML = price;
    pageViews.innerHTML = "50";
  } else if (
    priceRange.value > 1 &&
    priceRange.value <= 33 &&
    !yearlyToggle.checked
  ) {
    topPrice.innerHTML = "12";
    bottomPrice.innerHTML = "12";
    pageViews.innerHTML = "50";
  } else if (
    priceRange.value > 33 &&
    priceRange.value <= 66 &&
    yearlyToggle.checked
  ) {
    topPrice.innerHTML = "16";
    bottomPrice.innerHTML = "16";
    var price = topPrice.innerHTML;
    price = (price / 100) * 75;
    topPrice.innerHTML = price;
    bottomPrice.innerHTML = price;
    pageViews.innerHTML = "100";
  } else if (
    priceRange.value > 33 &&
    priceRange.value <= 66 &&
    !yearlyToggle.checked
  ) {
    topPrice.innerHTML = "16";
    bottomPrice.innerHTML = "16";
    pageViews.innerHTML = "100";
  } else if (
    priceRange.value > 66 &&
    priceRange.value <= 99 &&
    yearlyToggle.checked
  ) {
    topPrice.innerHTML = "24";
    bottomPrice.innerHTML = "24";
    var price = topPrice.innerHTML;
    price = (price / 100) * 75;
    topPrice.innerHTML = price;
    bottomPrice.innerHTML = price;
    pageViews.innerHTML = "500";
  } else if (
    priceRange.value > 66 &&
    priceRange.value <= 99 &&
    !yearlyToggle.checked
  ) {
    topPrice.innerHTML = "24";
    bottomPrice.innerHTML = "24";
    pageViews.innerHTML = "500";
  } else if (priceRange.value >= 100 && yearlyToggle.checked) {
    topPrice.innerHTML = "36";
    bottomPrice.innerHTML = "36";
    var price = topPrice.innerHTML;
    price = (price / 100) * 75;
    topPrice.innerHTML = price;
    bottomPrice.innerHTML = price;
    pageViews.innerHTML = "1000";
  } else if (priceRange.value >= 100 && !yearlyToggle.checked) {
    topPrice.innerHTML = "36";
    bottomPrice.innerHTML = "36";
    pageViews.innerHTML = "1000";
  } else {
    topPrice.innerHTML = "0";
    bottomPrice.innerHTML = "0";
    pageViews.innerHTML = "0";
  }
};

// Update prices if yearlyToggle is checked
yearlyToggle.onchange = function () {
  if (yearlyToggle.checked) {
    var price = topPrice.innerHTML;
    price = (price / 100) * 75;
    topPrice.innerHTML = price;
  } else {
    if (priceRange.value <= 1) {
      topPrice.innerHTML = "8";
      bottomPrice.innerHTML = "8";
      pageViews.innerHTML = "10";
    } else if (priceRange.value > 1 && priceRange.value <= 33) {
      topPrice.innerHTML = "12";
      bottomPrice.innerHTML = "12";
      pageViews.innerHTML = "50";
    } else if (priceRange.value > 33 && priceRange.value <= 66) {
      topPrice.innerHTML = "16";
      bottomPrice.innerHTML = "16";
      pageViews.innerHTML = "100";
    } else if (priceRange.value > 66 && priceRange.value <= 99) {
      topPrice.innerHTML = "24";
      bottomPrice.innerHTML = "24";
      pageViews.innerHTML = "500";
    } else if (priceRange.value >= 100) {
      topPrice.innerHTML = "36";
      bottomPrice.innerHTML = "36";
      pageViews.innerHTML = "1000";
    } else {
      topPrice.innerHTML = "0";
      bottomPrice.innerHTML = "0";
      pageViews.innerHTML = "0";
    }
  }
};
