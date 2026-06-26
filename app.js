function addProduct() {
  alert("КНОПКА РАБОТАЕТ");

  window.db.collection("products").add({
    name: "test",
    price: "123"
  }).then(() => {
    alert("ДОБАВЛЕНО В FIREBASE");
  }).catch(err => {
    alert("ОШИБКА: " + err.message);
  });
}
