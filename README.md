# 🛍️ Ecommerce API — Primera Entrega Coderhouse Backend

API REST desarrollada con **Node.js + Express**, que permite gestionar productos y carritos de compra.  
La persistencia de datos se realiza en archivos **JSON** locales (`data/products.json` y `data/carts.json`).

---

## 🚀 Instalación y ejecución

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Micaelarombola/ecommerce-api-coderhouse.git
   cd ecommerce-api-coderhouse

Instalar dependencias:

npm install


Ejecutar el servidor:

node app.js


El servidor se inicia en http://localhost:8080

🧱 Endpoints
🔹 Productos /api/products
Método	Endpoint	Descripción
GET	/api/products	Lista todos los productos
GET	/api/products/:pid	Devuelve un producto por su ID
POST	/api/products	Crea un nuevo producto
PUT	/api/products/:pid	Actualiza un producto existente
DELETE	/api/products/:pid	Elimina un producto

📦 Ejemplo de creación (POST /api/products)
Body (JSON):

{
  "title": "Remera azul",
  "description": "Remera de algodón",
  "code": "R001",
  "price": 2500,
  "status": true,
  "stock": 15,
  "category": "Ropa",
  "thumbnails": ["imagen1.jpg"]
}

🛒 Carritos /api/carts
Método	Endpoint	Descripción
POST	/api/carts	Crea un nuevo carrito
GET	/api/carts/:cid	Lista los productos de un carrito
POST	/api/carts/:cid/product/:pid	Agrega un producto al carrito (incrementa cantidad si ya existe)

📦 Ejemplo de agregar producto al carrito
POST /api/carts/1/product/1

{ "quantity": 2 }

📂 Estructura del proyecto
ecommerce-api/
├─ data/
│  ├─ carts.json
│  └─ products.json
├─ src/
│  ├─ managers/
│  │  ├─ ProductManager.js
│  │  └─ CartManager.js
│  └─ routes/
│     ├─ products.router.js
│     └─ carts.router.js
├─ app.js
├─ package.json
├─ .gitignore
└─ README.md

✅ Tecnologías

Node.js

Express

File System (fs)

Postman (para pruebas)

Autor: Micaela Rombola
Curso: Coderhouse Backend — Primera Entrega