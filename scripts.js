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

jQuery(document).ready(function(){
    jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},4000);
	});
});