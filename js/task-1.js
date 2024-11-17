const categoriesList = document.querySelectorAll("ul#categories > li.item");

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(category => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryItemCount = category.querySelectorAll("ul > li").length;

  console.log(`Category: ${categoryName}`);
  console.log(`Number of items: ${categoryItemCount}`);
});
