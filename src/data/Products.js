const productos = [
  {
    id: 1,
    nombre: "Hamburguesa Fuego Infernal",
    precio: 12.99,
    descripcion: "Una hamburguesa con carne jugosa y un toque picante que te hará sudar.",
    categoria: "hamburguesas de carne"
  },
  {
    id: 2,
    nombre: "Pollo Crispy Supremo",
    precio: 11.49,
    descripcion: "Pollo crujiente con un sabor irresistible, servido con aderezos especiales.",
    categoria: "hamburguesas de pollo"
  },
  {
    id: 3,
    nombre: "Patty Melt Triple",
    precio: 13.99,
    descripcion: "Carne de res, queso fundido y cebolla caramelizada en pan tostado.",
    categoria: "patty melt"
  },
  {
    id: 4,
    nombre: "Nuggets Dorados",
    precio: 8.99,
    descripcion: "Crujientes nuggets de pollo acompañados de salsa BBQ.",
    categoria: "acompañamientos"
  },
  {
    id: 5,
    nombre: "Cerveza Artesanal IPA",
    precio: 5.49,
    descripcion: "Cerveza IPA de producción local, con notas frutales y amargas.",
    categoria: "bebidas"
  },
  {
    id: 6,
    nombre: "Hamburguesa BBQ Deluxe",
    precio: 14.49,
    descripcion: "Hamburguesa con salsa BBQ, tocino y cebolla frita.",
    categoria: "hamburguesas de carne"
  },
  {
    id: 7,
    nombre: "Pollo a la Parmesana",
    precio: 12.49,
    descripcion: "Pollo empanizado con salsa marinara y queso parmesano.",
    categoria: "hamburguesas de pollo"
  },
  {
    id: 8,
    nombre: "Patty Melt Clásico",
    precio: 12.99,
    descripcion: "El clásico patty melt con carne de res, queso suizo y cebolla caramelizada.",
    categoria: "patty melt"
  },
  {
    id: 9,
    nombre: "Papas Fritas con Queso",
    precio: 6.99,
    descripcion: "Papas fritas crujientes cubiertas con queso cheddar derretido.",
    categoria: "acompañamientos"
  },
  {
    id: 10,
    nombre: "Limonada Fresca",
    precio: 3.99,
    descripcion: "Limonada natural y refrescante, ideal para acompañar cualquier comida.",
    categoria: "bebidas"
  },
  {
    id: 11,
    nombre: "Hamburguesa Tex-Mex",
    precio: 13.49,
    descripcion: "Hamburguesa con guacamole, jalapeños y queso pepper jack.",
    categoria: "hamburguesas de carne"
  },
  {
    id: 12,
    nombre: "Pollo Teriyaki",
    precio: 11.99,
    descripcion: "Pollo marinado en salsa teriyaki, con piña y cebollas verdes.",
    categoria: "hamburguesas de pollo"
  },
  {
    id: 13,
    nombre: "Patty Melt BBQ",
    precio: 13.99,
    descripcion: "Patty melt con salsa BBQ, queso cheddar y cebolla caramelizada.",
    categoria: "patty melt"
  },
  {
    id: 14,
    nombre: "Cebollas Caramelizadas",
    precio: 5.49,
    descripcion: "Cebollas dulces y caramelizadas, el acompañamiento perfecto para cualquier plato.",
    categoria: "acompañamientos"
  },
  {
    id: 15,
    nombre: "Cóctel Mojito",
    precio: 7.99,
    descripcion: "Cóctel refrescante con ron, menta y lima.",
    categoria: "bebidas"
  },
  {
    id: 16,
    nombre: "Hamburguesa Hawaiana",
    precio: 12.99,
    descripcion: "Hamburguesa con piña, jamón y queso suizo.",
    categoria: "hamburguesas de carne"
  },
  {
    id: 17,
    nombre: "Pollo BBQ",
    precio: 11.49,
    descripcion: "Pollo con salsa BBQ casera, servido con ensalada de col.",
    categoria: "hamburguesas de pollo"
  },
  {
    id: 18,
    nombre: "Patty Melt Bacon",
    precio: 14.49,
    descripcion: "Patty melt con tocino crujiente, queso cheddar y cebolla caramelizada.",
    categoria: "patty melt"
  },
  {
    id: 19,
    nombre: "Papas Fritas con Salsa de Queso",
    precio: 7.49,
    descripcion: "Papas fritas acompañadas de salsa de queso caliente.",
    categoria: "acompañamientos"
  },
  {
    id: 20,
    nombre: "Refresco de Cola",
    precio: 2.99,
    descripcion: "Refresco de cola clásico y burbujeante.",
    categoria: "bebidas"
  },
  {
    id: 21,
    nombre: "Hamburguesa Vegetariana",
    precio: 11.99,
    descripcion: "Hamburguesa con una jugosa patty vegetariana y vegetales frescos.",
    categoria: "hamburguesas de carne"
  },
  {
    id: 22,
    nombre: "Pollo al Curry",
    precio: 12.49,
    descripcion: "Pollo con salsa de curry suave, servido con arroz.",
    categoria: "hamburguesas de pollo"
  },
  {
    id: 23,
    nombre: "Patty Melt con Champiñones",
    precio: 13.49,
    descripcion: "Patty melt con champiñones salteados, queso suizo y cebolla caramelizada.",
    categoria: "patty melt"
  },
  {
    id: 24,
    nombre: "Nuggets de Queso",
    precio: 9.49,
    descripcion: "Nuggets rellenos de queso cheddar, crujientes por fuera y suaves por dentro.",
    categoria: "acompañamientos"
  },
  {
    id: 25,
    nombre: "Cóctel Margarita",
    precio: 8.49,
    descripcion: "Cóctel clásico con tequila, lima y licor de naranja.",
    categoria: "bebidas"
  },
  {
    id: 26,
    nombre: "Hamburguesa con Aros de Cebolla",
    precio: 13.99,
    descripcion: "Hamburguesa con aros de cebolla crujientes y salsa especial.",
    categoria: "hamburguesas de carne"
  },
  {
    id: 27,
    nombre: "Pollo al Limón",
    precio: 11.99,
    descripcion: "Pollo marinado en limón y hierbas, asado a la perfección.",
    categoria: "hamburguesas de pollo"
  },
  {
    id: 28,
    nombre: "Patty Melt con Jalapeños",
    precio: 14.49,
    descripcion: "Patty melt con jalapeños frescos, queso pepper jack y cebolla caramelizada.",
    categoria: "patty melt"
  },
  {
    id: 29,
    nombre: "Papas Fritas con Trufa",
    precio: 8.99,
    descripcion: "Papas fritas con aceite de trufa y queso parmesano.",
    categoria: "acompañamientos"
  },
  {
    id: 30,
    nombre: "Cerveza Rubia",
    precio: 5.99,
    descripcion: "Cerveza rubia ligera con un sabor refrescante.",
    categoria: "bebidas"
  }
];