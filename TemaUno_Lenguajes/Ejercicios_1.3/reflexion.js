
/* REFLEXIÓN - EJERCICIO 1.3

1. ¿Cuál es la diferencia fundamental entre un módulo nativo (como 'fs')  
   y un módulo de NPM (como 'sillyname') en cuanto a su origen e instalación?

   La diferencia es que los módulos nativos ya vienen integrados con Node.js, 
   ya no hace falta instalarlos. En cambio, los módulos de NPM los crean otras personas
   y se tienen que descargar con el comando 'npm install'.



2. Investigando la sintaxis: ¿Qué diferencia existe entre 'require' (CommonJS)  
   y 'import' (ES Modules)? Considera el momento en que se cargan los módulos.

   'require' es de CommonJS y carga los módulos cuando el programa se está ejecutando. 
   'import' es de ES Modules y se analiza antes de ejecutar el código, 
    lo que permite optimizaciones y obliga a poner las importaciones al inicio.



3. Sobre el archivo 'package.json':  

   a) ¿Por qué es vital compartir este archivo pero NO la carpeta 'node_modules' al subir a un repositorio?  
   El archivo 'package.json' sí se comparte porque ahí están las dependencias y la información del proyecto. 
   La carpeta 'node_modules' no se comparte porque se puede volver a generar y es muy pesada.

   b) ¿Qué sucede si ejecutas 'npm install' en una carpeta que solo tiene el package.json?
   Si solo tienes el 'package.json' y corres 'npm install', NPM va a descargar todas las dependencias 
   que están listadas y crea la carpeta 'node_modules' automáticamente.
*/
