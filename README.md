# 🅰️ Angular - Trabajo Final

Este repositorio contiene ejercicios prácticos para desarrollar habilidades en Angular. Cada ejercicio está diseñado para fortalecer conocimientos en la creación de proyectos, componentes, servicios, ruteo, navegación e integración con APIs.

---

## 📝 Ejercicio 1: Crear un Proyecto Angular
### Objetivo
Aprender a crear un proyecto y levantar el servidor de desarrollo.

### Pasos:
1. Instalar Angular CLI (si aún no lo instalamos).
2. Crear un proyecto con `ng new nombre-app`.
3. Ejecutar el proyecto con `ng serve`.
4. Mostrar la aplicación en el navegador.

---

## 📝 Ejercicio 2: Crear y Mostrar un Componente
### Pasos:
1. Crear un componente con `ng generate component nombre-componente`.
2. En el archivo TS:
   - Agregar 2 variables `string` que contengan mensajes.
   - Crear una variable `boolean` en `false`.
3. En el template:
   - Mostrar el valor de una variable usando interpolación.
   - Usar `*ngIf` para ocultar un mensaje basado en la variable booleana.
4. Incluir el componente creado en `app.component.html` mediante `<app-nombre-componente>`.
5. **Plus:** Estilizar los elementos en el archivo CSS del componente.

---

## 📝 Ejercicio 3: Crear y Mostrar un Componente
### Pasos:
1. Crear un componente con `ng generate component nombre-componente`.
2. En el archivo TS:
   - Agregar un objeto con 4 propiedades.
3. En el template:
   - Mostrar los valores del objeto usando interpolación.
4. Incluir el componente creado en `app.component.html` mediante `<app-nombre-componente>`.
5. **Plus:** Estilizar los elementos en el archivo CSS del componente.

---

## 📝 Ejercicio 4: Crear y Mostrar un Componente
### Pasos:
1. Crear un componente con `ng generate component nombre-componente`.
2. En el archivo TS:
   - Agregar un array con 4 objetos.
3. En el template:
   - Usar `*ngFor` para recorrer el array y mostrar los valores.
4. Incluir el componente creado en `app.component.html` mediante `<app-nombre-componente>`.
5. **Plus:** Estilizar los elementos en el archivo CSS del componente.

---

## 📝 Ejercicio 5: Crear y Mostrar un Componente (Header)
### Pasos:
1. Crear un componente `header` con `ng generate component nombre-componente`.
2. Usar HTML y estilos del header trabajado previamente.
3. Incluir el componente en `app.component.html` mediante `<app-nombre-componente>`.
4. **Plus:** Mostrar el texto del header desde el archivo TS usando interpolación.

---

## 📝 Ejercicio 6: Crear y Mostrar un Componente (Footer)
### Pasos:
1. Crear un componente `footer` con `ng generate component nombre-componente`.
2. Usar HTML y estilos del footer trabajado previamente.
3. Incluir el componente en `app.component.html` mediante `<app-nombre-componente>`.
4. **Plus:** Mostrar el texto del footer desde el archivo TS usando interpolación.

---

## Ejercicio 7: Lista de películas con comunicación padre-hijo 

### 🎯 Objetivo:
Crear dos componentes (**MovieListComponent** como padre y **MovieItemComponent** como hijo) que se comuniquen utilizando `@Input` y `@Output`.

### 🛠️ Pasos:

1. **Configuración del componente padre `MovieListComponent`**:

   - **Archivo TS (`movie-list.component.ts`)**:
     - Declarar una lista de 10 objetos `movies`, donde cada objeto tenga las propiedades `title`, `year`, y `description`.
     - Crear una variable `selectedMovie` para almacenar la película seleccionada.
     - Crear un método `onMovieSelected(movieTitle: string)` que asigne el valor recibido a la variable `selectedMovie`.

   - **Archivo HTML (`movie-list.component.html`)**:
     - Usar `*ngFor` para iterar sobre la lista de películas.
     - Para cada película, incluir el selector del componente hijo `<app-movie-item>` y pasarle los datos de la película mediante property binding con `[movie]="movie"`.
     - Escuchar el evento emitido por el hijo con event binding, ej.: `(movieSelected)="onMovieSelected($event)"`.
     - Mostrar en un `<p>` la película seleccionada interpolando la variable `selectedMovie`.

2. **Configuración del componente hijo `MovieItemComponent`**:

   - **Archivo TS (`movie-item.component.ts`)**:
     - Declarar una propiedad `@Input()` llamada `movie` de tipo objeto para recibir los datos de cada película.
     - Declarar un evento `@Output()` llamado `movieSelected` utilizando `EventEmitter<string>`.
     - Crear un método `selectMovie()` que emita el evento `movieSelected` con el título de la película (`this.movie.title`).

   - **Archivo HTML (`movie-item.component.html`)**:
     - Mostrar el título (`title`), año (`year`) y descripción (`description`) de la película usando interpolación.
     - Usar `*ngIf` para mostrar solo las descripciones que no estén vacías.
     - Agregar un botón "Seleccionar" que, al hacer clic, dispare el método `selectMovie()`.

3. **Incorporar el componente en la aplicación**:
   - Incluir el selector del componente padre `<app-movie-list>` en el archivo `app.component.html`.

4. **Plus (opcional)**:
   - Generar una interfaz `Movie` para tipar los datos de las películas:
     - Incluir propiedades como `title`, `year`, `description`, y opcionalmente `image`.
     - Usar esta interfaz para tipar la lista de películas y la propiedad `@Input` en el componente hijo.
   - Estilizar las películas con un diseño de tarjetas (**cards**) y hacerlo responsivo para escritorio y móviles.
   - Añadir imágenes a las películas para un diseño más atractivo.

---

## Ejercicio 8: Formulario de búsqueda de películas (Binding Bidireccional) 🔍

### 🎯 Objetivo:
Crear un componente `SearchBar` que permita buscar películas en tiempo real utilizando binding bidireccional (`[(ngModel)]`).

### 🛠️ Pasos:

1. **Configuración del componente `SearchBar`**:

   - **Archivo TS (`search-bar.component.ts`)**:
     - Declarar una variable `searchTerm` de tipo `string` y asignarle un valor inicial vacío.
     - Importar y agregar el módulo `FormsModule` en los `imports`, para habilitar el uso de `[(ngModel)]`.

   - **Archivo HTML (`search-bar.component.html`)**:
     - Crear un elemento `<input>` con un atributo `placeholder` que indique "Buscar películas...".
     - Implementar binding bidireccional con `[(ngModel)]` para enlazar el valor del `input` con la variable `searchTerm`.
     - Agregar un `<p>` que diga: "Buscando...", interpolando el valor de `searchTerm` para mostrar en tiempo real lo que el usuario escribe.

2. **Incorporar el componente en la aplicación**:
   - En el archivo `app.component.html`, incluir el selector del componente `SearchBar`.

3. **Plus (opcional)**:
   - Agregar estilos tanto para **desktop** como para **mobile**, asegurando que el campo de búsqueda sea responsivo y tenga diseño/colores diferentes.

---

## Ejercicio 9: Datos inyectados desde servicios 🛠️

### 🎯 Objetivo:
Compartir datos a componentes mediante inyección de dependencias.

### 🛠️ Pasos:

1. Crear servicio a través de Angular CLI:
   ```bash
   ng g service nombreServicio
   
   ---

## Ejercicio 10: Datos inyectados desde servicios para componentes de pelis 🎥

### 🎯 Objetivo:
Compartir datos a componentes mediante inyección de dependencias.

### 🛠️ Pasos:

1. Crear servicio a través de Angular CLI:
   ```bash
   ng g service movie

   ---

## Ejercicio 11: Ruteo y Navegación 🗺️

### 🎯 Objetivo:
Armar ruteo para 2 páginas y reestructuración de app para envolver nuestros componentes.

### 🛠️ Pasos:

1. Antes de empezar, necesitamos limpiar nuestro `app.component.html`, de manera que únicamente nos quede `header`, `footer` y `router-outlet`:
   ```html
   <app-header></app-header>
   <router-outlet></router-outlet>
   <app-footer></app-footer>

---

## Ejercicio 12: Integración con endpoints de APIs mediante HTTP GET 🌐

### 🎯 Objetivo:
Configurar HTTP.

### 🛠️ Pasos:

1. En `app.config.ts`, configuramos HTTP con `provideHttpClient()` para poder inyectarlo en los servicios. El archivo `app.config.ts` debería quedar:
   ```typescript
   import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
   import { provideRouter } from  '@angular/router'; 
   import { routes } from  './app.routes';
   import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

   export const appConfig: ApplicationConfig = {
       providers: [
           provideHttpClient(withInterceptorsFromDi()),
           provideZoneChangeDetection({ eventCoalescing: true }),
           provideRouter(routes), 
       ],
   };



