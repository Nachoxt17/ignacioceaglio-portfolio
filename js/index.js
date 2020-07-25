/**+-Ahora vamos a Codear React.js usando el Lenguaje JSX que es una Extensión de Javascript (Como lo es SASS de CSS) que mezcla Javascript con HTML creada Específicamente para ser usada en React.JS 
  * y simplificar su Código. Antes de Poder usar JSX debemos Permitir que nuestro Archivo "app.js" o el Archivo .js que tengamos COMPILE JSX ya que éste no viene con esa opción por Defecto, para eso usamos el
  *  Programa Prepros 7 en el que Seleccionamos a Archivo "app.js" y le marcamos la Configuración de "Transpile with Babel", lo que va a crear un Nuevo Archivo Llamado "app-dist.js" en la misma Carpeta que el 
  * Archivo "app.js" y por el Cual se PreProcesará el Código JSX por lo cual ahora debemos llamar a "app-dist.js" en vez de a "app.js" desde Nuestro HTML, ya que ahora la Lógica Provrendrá de Allí.
  * Una vez hecho esto podremos escribir JSX Normalmente. NOTA:_ Todo lo que se ponga entre Corchetes "{...}" en JSX será interpretado como Javascript Normal y las Clases de los Elementos en JSX se 
  * escribe "className='***'" en vez de solo "class='***'". NO se pueden poner varios Elementos HTML/JSX en una misma constante/variable, en todo caso se puede Poner 1 Elemento que sea Contenedor de Otros Varios
  * Elementos dentro de él. Si se quieren escribir varias Líneas, poner todo el Contenido de la constante/variable dentro de Paréntesis "(...)".*/
  /**+-Para Poder Usar Redux en Nuestro Proyecto, Primero Debemos Descargar e Instalar Node.js desde "https://nodejs.org/en/#home-downloadhead", Instalar la Extensión de "Code Runner" en Visual
 * Studio Code y Después Cerrar y Reabrir el Programa, luego Abrir Con VS Code la Carpeta de Nuestro Nuevo Proyecto con Redux, Abrir la Terminal y Escribir:_
 * 
 * $ npm init -y (Y le damos ENTER)
 * $ npm i redux (Y le damos ENTER)
 * .*/

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});

window.sr = ScrollReveal({});

sr.reveal('.logo', {
  duration: 2000,
  origin: 'top'
})

sr.reveal('.nav-toggle', {
  duration: 2000,
  origin: 'top'
})

sr.reveal('.section__title--intro', {
  duration: 2000,
  origin: 'right',
  distance: '350px'
})

sr.reveal('.intro__img', {
  duration: 2000,
  origin: 'top',
  distance: '350px'
})

sr.reveal('.section__subtitle--intro', {
  duration: 2000,
  origin: 'left',
  distance: '350px'
})

sr.reveal('.section__title--services', {
  duration: 2000,
  origin: 'top',
  distance: '200px'
})

sr.reveal('#service1', {
  duration: 2500,
  origin: 'bottom',
  distance: '350px'
})

sr.reveal('#service2', {
  duration: 3000,
  origin: 'bottom',
  distance: '350px'
})

sr.reveal('#service3', {
  duration: 3500,
  origin: 'bottom',
  distance: '350px'
})

sr.reveal('#btnWork', {
  duration: 3300,
  origin: 'bottom',
  distance: '100px'
})

sr.reveal('.section__title--about', {
  duration: 2000,
  origin: 'left',
  distance: '350px'
})

sr.reveal('.section__subtitle--about', {
  duration: 2000,
  origin: 'right',
  distance: '350px'
})

sr.reveal('.about-me__img', {
  duration: 2000,
  origin: 'bottom',
  distance: '350px'
})

sr.reveal('.about-me__body', {
  duration: 2750,
  origin: 'bottom',
  distance: '100px'
})

sr.reveal('.about-me__body a', {
  duration: 2900,
  origin: 'bottom',
  distance: '75px'
})

sr.reveal('.section__title--skills', {
  duration: 2000,
  origin: 'top',
  distance: '100px'
})

sr.reveal('#skillbar-html', {
  duration: 2000,
  origin: 'left',
  distance: '300px'
})

sr.reveal('#skillbar-css', {
  duration: 2100,
  origin: 'left',
  distance: '300px'
})

sr.reveal('#skillbar-js', {
  duration: 2200,
  origin: 'left',
  distance: '300px'
})

sr.reveal('#skillbar-git', {
  duration: 2300,
  origin: 'left',
  distance: '300px'
})

sr.reveal('#skillbar-bootstrap', {
  duration: 2400,
  origin: 'left',
  distance: '300px'
})

sr.reveal('#skillbar-sass', {
  duration: 2500,
  origin: 'left',
  distance: '300px'
})

sr.reveal('#skillbar-jquery', {
  duration: 2600,
  origin: 'left',
  distance: '300px'
})

sr.reveal('#skillbar-react', {
  duration: 2700,
  origin: 'left',
  distance: '300px'
})

sr.reveal('#skillbar-redux', {
  duration: 2800,
  origin: 'left',
  distance: '300px'
})

sr.reveal('#skillbar-node', {
  duration: 2900,
  origin: 'left',
  distance: '300px'
})

sr.reveal('#skillbar-express', {
  duration: 3000,
  origin: 'left',
  distance: '300px'
})

sr.reveal('#skillbar-mongodb', {
  duration: 3100,
  origin: 'left',
  distance: '300px'
})

sr.reveal('#skillbar-mongoose', {
  duration: 3200,
  origin: 'left',
  distance: '300px'
})

sr.reveal('.section__title--work', {
  duration: 2000,
  origin: 'top',
  distance: '100px'
})

sr.reveal('.section__title--work', {
  duration: 2000,
  origin: 'top',
  distance: '200px'
})

sr.reveal('.section__subtitle--work', {
  duration: 2000,
  origin: 'bottom',
  distance: '60px'
})

sr.reveal('.portfolio__item', {
  duration: 3000,
  origin: 'bottom',
  distance: '60px'
})

sr.reveal('.contact-section-header h2', {
  duration: 2000,
  origin: 'left',
  distance: '350px'
})

sr.reveal('.contact-section-header h4', {
  duration: 2000,
  origin: 'right',
  distance: '350px'
})

sr.reveal('#linkedin', {
  duration: 2100,
  origin: 'bottom',
  distance: '300px'
})

sr.reveal('#resume', {
  duration: 2300,
  origin: 'bottom',
  distance: '300px'
})

sr.reveal('#github', {
  duration: 2500,
  origin: 'bottom',
  distance: '300px'
})

sr.reveal('#upwork', {
  duration: 2700,
  origin: 'bottom',
  distance: '300px'
})

sr.reveal('#email', {
  duration: 2900,
  origin: 'bottom',
  distance: '300px'
})

sr.reveal('#cellphone', {
  duration: 3100,
  origin: 'bottom',
  distance: '300px'
})

jQuery(document).ready(function(){
    jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},4000);
	});
});

