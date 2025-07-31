Documentación del Proyecto Backend
Backend deployado en: https://homeburgerback.onrender.com

Endpoints
1. Autenticación
POST /auth/register
Registra un usuario nuevo.
Body esperado (JSON):
        {
        "email": "usuario@mail.com",
        "password": "123456"
        }
Respuesta: JSON con token JWT y datos del usuario.


POST /auth/login
Login de usuario.
Body esperado igual que registro.
Respuesta: JSON con token JWT y datos del usuario.

2. Productos
GET /products
Obtiene todos los productos.
Respuesta: JSON con array de productos.

GET /products/:id
Obtiene un producto por su ID.
Parámetro en URL: id
Respuesta: JSON con el producto.

3. Contacto
POST /contact
Envía un mensaje de contacto.

Body esperado (JSON):
        {
        "name": "Nombre",
        "surname": "Apellido",
        "email": "email@mail.com",
        "phone": "123456789",
        "message": "Mensaje"
        }
Respuesta: JSON con confirmación o error.

4. Carrito (requiere autenticación)
POST /cart/add
Agrega un producto al carrito.

Body esperado (JSON):
        {
        "productId": "idProducto",
        "quantity": número
        }
Respuesta: JSON con carrito actualizado.

GET /cart
Obtiene el carrito con total.
Respuesta: JSON con productos y total.

PUT /cart/update
Actualiza cantidad de un producto en el carrito.
Body esperado (JSON):
        {
        "productId": "idProducto",
        "quantity": número
        }
Respuesta: JSON con carrito actualizado.

DELETE /cart/remove/:id
Elimina un producto del carrito.
Parámetro en URL: id (ID del item en carrito)
Respuesta: JSON con carrito actualizado.

POST /cart/checkout
Finaliza la compra.
Respuesta: JSON confirmando compra.

5. Órdenes (requiere autenticación)
GET /orders
Obtiene las órdenes del usuario autenticado.
Respuesta: JSON con array de órdenes.

POST /orders
Crea una nueva orden.

Body esperado (JSON):
        {
        "items": [...],
        "total": número
        }
        
Respuesta: JSON confirmando creación y orden.


Notas importantes
Para endpoints que requieren autenticación, enviar el token JWT en el header:
Authorization: Bearer <token>


Variables de entorno usadas en backend:
DB_URL=tu_url_mongodb
PORT=8080
JWT_SECRET=tu_secreto_jwt