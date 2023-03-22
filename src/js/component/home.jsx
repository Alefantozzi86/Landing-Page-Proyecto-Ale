import React from "react";

//include images into your bundle
import Jumbotron from "./Jumbotron.jsx";
import Navbar from "./NavbarOne.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <div className="row-col-12 card-group gap-3 mx-3 mb-3">
        <Card
          scr={
            "https://imagenes.elpais.com/resizer/Zb34qosF9h1JEhFuO5bJ25_5zbM=/1960x1470/filters:focal(461x344:471x354)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/42P4RAD7U5EAZDALRKAUU7SBWE.jfif"
          }
          title="Stories"
          text="Con las gafas Ray-Ban X Meta, podrás hacer fotos y vídeos, escuchar música, hacer llamadas y compartir contenido directamente con tus canales de redes sociales."
        />
        <Card
          scr={
            "https://i2.wp.com/www.fashiongonerogue.com/wp-content/uploads/2022/08/Ray-Ban-Colorblock-Summer-2022-Sunglasses06.jpg?ssl=1"
          }
          title="ColorBlock"
          text="Ray-Ban presenta una versión vibrante del diseño atemporal de Wayfarer. El estilo, que se ha convertido en un símbolo de la cultura juvenil, se ha reinventado en diseños recientes."
        />
        <Card
          scr={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlkJiii6fTl6q7qPEXiXD15WwKOzMEKMupMg&usqp=CAU"
          }
          title="Iconos"
          text="Descubre las nuevas e icónicas gafas de sol de Ray-Ban, como las Nomad, State Street y Caribbean. Envío gratuito y entrega rápida."
        />
        <Card
          scr={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfH2g48bAPUrDv2RqZ2-yiO-tLz4bi8Y8fIQ&usqp=CAU"
          }
          title="Kids"
          text="Da rienda suelta a su expresión con unas gafas icónicas de talla infantil. Descubre los modelos para los mas pequeños de la casa."
        />
      </div>

      <Footer />
    </>
  );
};

export default Home;
