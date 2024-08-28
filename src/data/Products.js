const productos = [
  {
    id: 1,
    nombre: "Hamburguesa Fuego Infernal",
    precio: 12.99,
    descripcion: "Una hamburguesa con carne jugosa y un toque picante que te hará sudar.",
    categoria: "hamburguesas de carne",
    img: "/img/Productos/Hamburguesa_infernal.webp"
  },
  {
    id: 2,
    nombre: "Pollo Crispy Supremo",
    precio: 11.49,
    descripcion: "Pollo crujiente con un sabor irresistible, servido con aderezos especiales.",
    categoria: "hamburguesas de pollo",
    img: "/img/Productos/Hamburguesa_Crispy.webp"
  },
  {
    id: 3,
    nombre: "Patty Melt Triple",
    precio: 13.99,
    descripcion: "Carne de res, queso fundido y cebolla caramelizada en pan tostado.",
    categoria: "patty melt",
    img: "/img/Productos/Patty-melt.jpg"
  },
  {
    id: 4,
    nombre: "Nuggets Dorados",
    precio: 8.99,
    descripcion: "Crujientes nuggets de pollo acompañados de salsa BBQ.",
    categoria: "acompañamientos",
    img: "/img/Productos/Nuggets.jpg"
  },
  {
    id: 5,
    nombre: "Cerveza Artesanal IPA",
    precio: 5.49,
    descripcion: "Cerveza IPA de producción local, con notas frutales y amargas.",
    categoria: "bebidas",
    img: "/img/Productos/cerveza-ipa.jpeg"
  },
  {
    id: 6,
    nombre: "Hamburguesa BBQ Deluxe",
    precio: 14.49,
    descripcion: "Hamburguesa con salsa BBQ, tocino y cebolla frita.",
    categoria: "hamburguesas de carne",
    img: "/img/Productos/Hamburguesa-Deluxe.jpg"
  },
  {
    id: 7,
    nombre: "Pollo a la Parmesana",
    precio: 12.49,
    descripcion: "Pollo empanizado con salsa marinara y queso parmesano.",
    categoria: "hamburguesas de pollo",
    img:"/img/Productos/pollo-parmesana.jpg"
  },
  {
    id: 8,
    nombre: "Patty Melt Clásico",
    precio: 12.99,
    descripcion: "El clásico patty melt con carne de res, queso suizo y cebolla caramelizada.",
    categoria: "patty melt",
    img: "/img/Productos/patty-melt-clasico.jpg"
  },
  {
    id: 9,
    nombre: "Papas Fritas con Queso",
    precio: 6.99,
    descripcion: "Papas fritas crujientes cubiertas con queso cheddar derretido.",
    categoria: "acompañamientos",
    img: "/img/Productos/papasconqueso.avif"
  },
  {
    id: 10,
    nombre: "Limonada Fresca",
    precio: 3.99,
    descripcion: "Limonada natural y refrescante, ideal para acompañar cualquier comida.",
    categoria: "bebidas",
    img: "/img/Productos/limonada.jpg"
  },
  {
    id: 11,
    nombre: "Hamburguesa Tex-Mex",
    precio: 13.49,
    descripcion: "Hamburguesa con guacamole, jalapeños y queso pepper jack.",
    categoria: "hamburguesas de carne",
    img: "/img/Productos/texmex.webp"
  },
  {
    id: 12,
    nombre: "Pollo Teriyaki",
    precio: 11.99,
    descripcion: "Pollo marinado en salsa teriyaki, con piña y cebollas verdes.",
    categoria: "hamburguesas de pollo",
    img: "/img/Productos/pollo-teriyaki.webp"
  },
  {
    id: 13,
    nombre: "Patty Melt BBQ",
    precio: 13.99,
    descripcion: "Patty melt con salsa BBQ, queso cheddar y cebolla caramelizada.",
    categoria: "patty melt",
    img: "/img/Productos/paty-meltBBQ.png"
  },
  {
    id: 14,
    nombre: "Cebollas Caramelizadas",
    precio: 5.49,
    descripcion: "Cebollas dulces y caramelizadas, el acompañamiento perfecto para cualquier plato.",
    categoria: "acompañamientos",
    img: "/img/Productos/cebollacaramelizada.webp"
  },
  {
    id: 15,
    nombre: "Cóctel Mojito",
    precio: 7.99,
    descripcion: "Cóctel refrescante con ron, menta y lima.",
    categoria: "bebidas",
    img: "/img/Productos/mojito.webp"
  },
  {
    id: 16,
    nombre: "Hamburguesa Hawaiana",
    precio: 12.99,
    descripcion: "Hamburguesa con piña, jamón y queso suizo.",
    categoria: "hamburguesas de carne",
    img: "/img/Productos/hamburguesahawaiana.jpeg"
  },
  {
    id: 17,
    nombre: "Pollo BBQ",
    precio: 11.49,
    descripcion: "Pollo con salsa BBQ casera, servido con ensalada de col.",
    categoria: "hamburguesas de pollo",
    img: "/img/Productos/pollo-bbq.jpg"
  },
  {
    id: 18,
    nombre: "Patty Melt Bacon",
    precio: 14.49,
    descripcion: "Patty melt con tocino crujiente, queso cheddar y cebolla caramelizada.",
    categoria: "patty melt",
    img: "/img/Productos/patymeltbacon.jpg"
  },
  {
    id: 19,
    nombre: "Papas Fritas con Huevo",
    precio: 7.49,
    descripcion: "Papas fritas acompañadas de huevos fritos.",
    categoria: "acompañamientos",
    img: "/img/Productos/papasfritasconhuevo.jpeg"
  },
  {
    id: 20,
    nombre: "Coca Cola",
    precio: 2.99,
    descripcion: "Refresco de cola clásico y burbujeante.",
    categoria: "bebidas",
    img: "/img/Productos/cocacola.webp"
  },
  {
    id: 21,
    nombre: "Hamburguesa Vegetariana",
    precio: 11.99,
    descripcion: "Hamburguesa con una jugosa patty vegetariana y vegetales frescos.",
    categoria: "hamburguesas de carne",
    img: "/img/Productos/burgervegana.jpg"
  },
  {
    id: 22,
    nombre: "Pollo al Curry",
    precio: 12.49,
    descripcion: "Pollo con salsa de curry suave, servido con arroz.",
    categoria: "hamburguesas de pollo",
    img: "/img/Productos/pollo-al-curry.jpg"
  },
  {
    id: 23,
    nombre: "Papas Fritas con bacon y verdeo",
    precio: 13.49,
    descripcion: "Papas fritas acompañadas de panceta crujiente y verdeo",
    categoria: "acompañamientos",
    img: "/img/Productos/verdeoybacon.jpg"
  },
  {
    id: 24,
    nombre: "Bastones de Queso",
    precio: 9.49,
    descripcion: "Bastones de muzzarella, crujientes por fuera y suaves por dentro.",
    categoria: "acompañamientos",
    img: "/img/Productos/nastonesdemuzza.jpg"
  },
  {
    id: 25,
    nombre: "Cóctel Margarita",
    precio: 8.49,
    descripcion: "Cóctel clásico con tequila, lima y licor de naranja.",
    categoria: "bebidas",
    img: "/img/Productos/margarita.jpg"
  },
  {
    id: 26,
    nombre: "Hamburguesa con Aros de Cebolla",
    precio: 13.99,
    descripcion: "Hamburguesa con aros de cebolla crujientes y salsa especial.",
    categoria: "hamburguesas de carne",
    img: "/img/Productos/burgerarosdecebolla.avif"
  },
  {
    id: 27,
    nombre: "Pollo al Limón",
    precio: 11.99,
    descripcion: "Pollo marinado en limón y hierbas, asado a la perfección.",
    categoria: "hamburguesas de pollo",
    img: "/img/Productos/pollolimon.webp"
  },
  {
    id: 28,
    nombre: "Hamburguesa de Pollo crujiente",
    precio: 14.49,
    descripcion: "Hamburguesa de pollo crujientes y repollo.",
    categoria: "hamburguesas de pollo",
    img: "/img/Productos/burgerpollo.webp"
  },
  {
    id: 29,
    nombre: "Papas Fritas con Trufa",
    precio: 8.99,
    descripcion: "Papas fritas con aceite de trufa y queso parmesano.",
    categoria: "acompañamientos",
    img: "/img/Productos/papasfritastrufa.jpg"
  },
  {
    id: 30,
    nombre: "Cerveza Rubia",
    precio: 5.99,
    descripcion: "Cerveza rubia ligera con un sabor refrescante.",
    categoria: "bebidas",
    img: "/img/Productos/cervezarubia.jpg"
  }
];