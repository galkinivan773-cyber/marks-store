function addProduct() {
  const name = "test";
  const price = "123";

  window.db.collection("products").add({
    name,
    price
  })
  .then(() => {
    alert("СОХРАНЕНО В FIREBASE");
  })
  .catch((err) => {
    alert("FIREBASE ERROR: " + err.message);
  });
}
