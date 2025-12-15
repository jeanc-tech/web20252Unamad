let productos = [
  {
    imagen:
      "https://images.unsplash.com/photo-1637412173653-de70428ee3ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RvcyUyMGRlJTIwdGVjbm9sb2dpYXxlbnwwfHwwfHx8MA%3D%3D",
    nombre: "Reloj inteligente",
    precio: 800.99,
    descripcion: "Reloj inteligente de la marca Apple.",
  },
  {
    imagen:
      "https://plus.unsplash.com/premium_photo-1684512989514-f0e4db5cc44d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdG9zJTIwZGUlMjB0ZWNub2xvZ2lhfGVufDB8fDB8fHww",
    nombre: "Laptop Lenovo",
    precio: 1500.5,
    descripcion: "Laptop Lenovo Intel I11 décima cuarta Generación.",
  },
  {
    imagen:
      "https://images.unsplash.com/photo-1636614178501-e03f25a87516?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3RvcyUyMGRlJTIwdGVjbm9sb2dpYXxlbnwwfHwwfHx8MA%3D%3D",
    nombre: "Tablet Apple",
    precio: 2500.0,
    descripcion: "Tablet de Apple con memoria SDC mas 3.88Ghz.",
  },
  {
    imagen:
      "https://images.unsplash.com/photo-1465453869711-7e174808ace9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8emFwYXRpbGxhc3xlbnwwfHwwfHx8MA%3D%3D",
    nombre: "Zapatillas New Balance",
    precio: 349.99,
    descripcion: "Zapatillas acolchonadas New Balance.",
  },
  {
    imagen:
      "https://images.unsplash.com/photo-1579446650032-86effeeb3389?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8emFwYXRpbGxhc3xlbnwwfHwwfHx8MA%3D%3D",
    nombre: "Zapatillas Nike",
    precio: 335.0,
    descripcion: "Zapatillas de la marca Nike, especialmente para maratones.",
  },
  {
    imagen:
      "https://plus.unsplash.com/premium_photo-1675283825474-390ea83c0703?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hvY29sYXRlc3xlbnwwfHwwfHx8MA%3D%3D",
    nombre: "Caja de Chocolate",
    precio: 49.99,
    descripcion: "Caja de Chocolate especial para tu flaca.",
  },
  {
    imagen:
      "https://images.unsplash.com/photo-1506459225024-1428097a7e18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGR1bGNlc3xlbnwwfHwwfHx8MA%3D%3D",
    nombre: "Torta de Chantillí",
    precio: 45.0,
    descripcion: "Torta de Chantillí adornado con frutos secos.",
  },
  {
    imagen:
      "https://images.unsplash.com/photo-1519869325930-281384150729?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGR1bGNlc3xlbnwwfHwwfHx8MA%3D%3D",
    nombre: "CupCakes",
    precio: 18.5,
    descripcion: "CupCakes de fresa.",
  },
];

function displayProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  productos.forEach((producto) => {
    const productCard = `
      <div class="col-md-4">
        <div class="card">
          <img src="${producto.imagen}" class="card-img-top product-img" alt="${producto.nombre}">
          <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.descripcion}</p>
            <p class="card-text"><strong>Precio: $${producto.precio.toFixed(2)}</strong></p>
            <button class="btn btn-primary" onclick="addToCart(${producto.precio}, '${producto.nombre}')">
              Agregar al Carrito
            </button>
          </div>
        </div>
      </div>
    `;
    productList.innerHTML += productCard;
  });
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(precio, nombre) {
  const existing = cart.find((p) => p.nombre === nombre);

  if (existing) {
    existing.cantidad += 1;
  } else {
    cart.push({ nombre, precio, cantidad: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart");
  cartList.innerHTML = "";

  if (cart.length === 0) {
    cartList.innerHTML = `<li class="list-group-item">Carrito vacío 🛒</li>`;
    return;
  }

  cart.forEach((item) => {
    const subtotal = item.precio * item.cantidad;

    const cartItem = `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <strong>${item.nombre}</strong><br>
          <small>$${item.precio.toFixed(2)} x ${item.cantidad} = <b>$${subtotal.toFixed(2)}</b></small>
        </div>
        <button class="btn btn-danger btn-sm" onclick="removeFromCart('${item.nombre}')">Eliminar</button>
      </li>
    `;
    cartList.innerHTML += cartItem;
  });
}

function removeFromCart(nombre) {
  cart = cart.filter((item) => item.nombre !== nombre);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

function generarBoleta() {
  let total = 0;

  const ahora = new Date();
  const fechaHora = ahora.toLocaleString();

  let boleta = ` BOLETA DE COMPRA\n+ ${fechaHora}\n\n`;
  boleta += `Detalle:\n`;

  cart.forEach((item, i) => {
    const subtotal = item.precio * item.cantidad;
    total += subtotal;

    boleta += `${i + 1}. ${item.nombre}\n   $${item.precio.toFixed(
      2
    )} x ${item.cantidad} = $${subtotal.toFixed(2)}\n`;
  });

  boleta += `\n----------------------\n`;
  boleta += `TOTAL A PAGAR: $${total.toFixed(2)}\n`;
  boleta += `Gracias por su compra no vuelva a la tienda! 😜`;

  return boleta;
}

document.getElementById("checkout-btn").addEventListener("click", () => {
  if (cart.length === 0) {
    alert(" El carrito está vacío.");
    return;
  }

  const confirmar = confirm("¿Deseas finalizar la compra?");
  if (!confirmar) return;

  alert(generarBoleta());

  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
});

window.onload = function () {
  displayProducts();
  updateCart();
};
