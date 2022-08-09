# Victoria Deco Kids!
##Links
###### Link Oficial [Decokids.com.ar](https://www.decokids.com.ar/)
###### Pagina de Github [Github Pages](https://ferkovalink.github.io/decokids/)
## Introducción
Es una página web, con el propósito de dar a conocer al cliente los productos y servicios que ofrece Victoria Deco Kids. Esta conformada por 6 templates: Index, Contacto, Articulos, Ofertas, Nosotros y error 404. Cada template cuenta con su head, body, footer, título, descripción y metas google. Todo el CSS está hecho en SASS. La página es full responsive, tanto para mobile, Tablet y desktop.
Cuenta con dominio propio www.decokids.com.ar, está alojado en Hostinger. También se encuentra registrada en google analytics y google search.

##Lenguajes y Entornos
- **Visual Estudio**: Elegí el IDE de Visual Studio para realizar el proyecto completo. Es un panel de inicio creativo que se puede usar para editar, depurar y compilar código y, después, publicar una aplicación.
- **HTML**: Todos los templates están escritos en HTML.
- **CSS**: Para la maquetación y diseño de la página utilice CSS, código propio e importado de Bootstrap.
- **SCSS**: Gracias al compilador SASS cree todo el .CSS. Para los colores y las fonts cree mapas. Definí size y tamaño de letra en variables. Use un %div-base para crear todas las div base de los distintos templates, %boton para algunos botones y %mapa para el google maps. Hice un bucle for para la animación de “Esta semana”. Ademas cuenta con mixins para ahorrar codigo.
- **JavaScript**: Cree dos scripts, uno para usar los 3 botones “Ver más” en Artículos, expande el div al estilo Leer más. Y el otro para el botón favoritos ♥ en el carousel de productos.
- **PHP**: El formulario de contacto es funcional gracias al .php que se encarga de recopilar la información del formulario y enviarla por email, detallando cada campo.
- **Bootstrap**: El carousel de productos y la navbar están hechos en Bootstrap.

## Descripción de los templates
- ### Index
Es la página principal, muestra un banner animado, información de ofertas, un iframe de google maps y footer.
- ### Contacto
Cuenta con un formulario de contacto, totalmente funcional gracias a un .php que cree. Toda la info ingresada llega por email.
- ### Artículos
En esta sección se detalla las últimas novedades. Cuenta con un banner, información en 3 secciones, 3 divs que  son desplegables y muestran más imágenes del producto.
- ### Ofertas
Ofertas de la semana se detallan en un carousel BT, se muestran de a 3 productos, cuenta con botón “Comprar” y botón de favoritos ♥. Esta semana es una animación creada a partir de un for.
- ### Nosotros
Es la página About, cuenta con una breve descripción sobre, que es Deco Kids? Y un google maps debajo.
- ### Error 404
Página de error 404 personalizada. Cuenta con un botón que redirige al Index.


