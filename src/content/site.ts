export const site = {
  name: "Yañez Tejada & Asoc.",
  description:
    "Estudio jurídico liderado por abogadas. Asesoramiento integral en derecho civil, familia, laboral y comercial.",
  locale: "es_AR",
  url: "https://tu-dominio.com",
  phone: "+54 2644818994",
  email: "contacto@tu-dominio.com",
 address: {
    street: "25 de Mayo Este 508",
    city: "San Juan",
    region: "San Juan",
    country: "AR",
    postalCode: "J5400",
  },

  // Link que me pasaste (para abrir Maps)
  googleMapsUrl:
    "https://www.google.com/maps/place/25+de+Mayo+Este+508,+J5400AGL+J5400AGL,+San+Juan/@-31.5311659,-68.5195996,18.47z/data=!4m6!3m5!1s0x96816a81541eccf1:0x9bb412bc7623cacc!8m2!3d-31.5312185!4d-68.5191028!16s%2Fg%2F11l5l42sqt?entry=ttu",

  // Embed liviano (recomendado)
  googleMapsEmbedUrl: "https://www.google.com/maps?q=-31.531179055236468,-68.51910029969987&z=17&output=embed",

  // Opcional: coordenadas para schema/uso futuro
  geo: {
    lat: -31.531179055236468,
    lng: -68.51910029969987,
  },

  hours: [
    { label: "Lunes a Viernes", value: "09:00 a 18:00" },
    { label: "Sábados", value: "Cerrado" },
  ],
  nav: [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Áreas", href: "#areas" },
    { label: "Equipo", href: "#equipo" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "Contacto", href: "#contacto" },
    { label: "Sobre", href: "#sobre" },
    { label: "Ubicación", href: "#ubicacion" },


  ],
  services: [
    { title: "Consulta inicial", text: "Entrevista y estrategia legal clara desde el primer contacto.", icon: "chat" },
    { title: "Derecho de familia", text: "Divorcios, cuidado personal, alimentos y régimen de comunicación.", icon: "users" },
    { title: "Civil y comercial", text: "Contratos, daños, cobros y asesoría preventiva.", icon: "scale" },
    { title: "Laboral", text: "Despidos, acuerdos, asesoramiento a trabajadoras y empleadoras.", icon: "briefcase" },
  ],
  practiceAreas: ["Familia", "Sucesiones", "Civil", "Laboral", "Contratos", "Mediación"],
  team: [
    { name: "Dra. Yañez Andrea", role: "Socia fundadora", bio: "Especialista en derecho comercial y corporativo.",pic:"../../public/andrea.png" },
    { name: "Dra. Tejada Florencia", role: "Socia fundadora", bio: "Derecho de Familia,suseciones, prevención y negociación.",pic:"../../public/flor.jpg" },
  ],
};
