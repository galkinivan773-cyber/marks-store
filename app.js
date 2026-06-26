let products = [];

// загрузка товаров из Firebase
async function loadProducts() {
  const snapshot = await window.firestore.getDocs(
    window.firestore.collection(window.db, "products")
  );

  products = [];
  snapshot.forEach(doc => {
    products.push(doc.data());
  });

  render(products);
}

// добавление товара в Firebase
async function addProduct() {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const category = document.getElementById("category").value;

  if (!name || !price) return;

  await window.firestore.addDoc(
    window.firestore.collection(window.db, "products"),
    {
      name,
      price,
      category
    }
  );

  loadProducts();
}

// фильтр
function filter(cat) {
  if (cat === "all") render(products);
  else render(products.filter(p => p.category === cat));
}

// отрисовка
function render(list) {
  const box = document.getElementById("products");
  box.innerHTML = "";

  list.forEach(p => {
    box.innerHTML += `
      <div class="card">
        <div>${p.name}</div>
        <div class="price">${p.price} ₽</div>
        <small>${p.category}</small>
      </div>
    `;
  });
}

function togglePanel() {
  const panel = document.getElementById("panel");
  panel.style.display = panel.style.display === "block" ? "none" : "block";
}

// старт
loadProducts();
