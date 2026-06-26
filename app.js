function addProduct() {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const category = document.getElementById("category").value;

  window.db.collection("products").add({
    name,
    price,
    category
  }).then(() => {
    alert("Добавлено");
  });
}
