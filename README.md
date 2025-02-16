# API Node.js con Express, TypeORM y TypeScript

Este proyecto es una API RESTful construida con Node.js, Express, TypeORM y TypeScript. Proporciona endpoints para gestionar cursos, estudiantes y profesores, permitiendo operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre estas entidades.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

Directory structure:
└── rodrdevs80-api-rest-ts-typeorm/
├── package.json
├── tsconfig.json
└── src/
├── app.ts
├── index.ts
├── controllers/
│ ├── cursosController.ts
│ ├── estudiantesControllers.ts
│ └── profesoresControllers.ts
├── db/
│ └── conexion.ts
├── models/
│ ├── cursoModel.ts
│ ├── estudianteModel.ts
│ └── profesorModel.ts
└── routes/
├── cursosRoutes.ts
├── estudiantesRoutes.ts
└── profesoresRoutes.ts

## Requisitos Previos

- Node.js (v16 o superior)
- npm (v8 o superior)
- MySQL (o cualquier otra base de datos compatible con TypeORM)

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/api-node-express-typeorm-ts.git
   cd api-node-express-typeorm-ts
   ```

2. Instala las dependencias:
   npm install
3. Configura la base de datos:

- Asegúrate de tener MySQL instalado y en ejecución.

- Crea una base de datos llamada cursos_ts.

- Configura las credenciales de la base de datos en src/db/conexion.ts.

4. Compila el proyecto:
   npm run build
   5.Inicia la aplicación:
   npm start

La aplicación estará disponible en http://localhost:3000.

### Scripts Disponibles

- npm run dev: Inicia la aplicación en modo de desarrollo usando ts-node-dev.

- npm run build: Compila el código TypeScript a JavaScript.

- npm start: Inicia la aplicación en producción.

- npm test: Ejecuta los tests (actualmente no implementados).

## Endpoints de la API

### Cursos

- GET /cursos: Obtiene todos los cursos.

- GET /cursos/:id : Obtiene un curso por su ID.

- POST /cursos: Crea un nuevo curso.

- PUT /cursos/:id : Actualiza un curso existente.

- DELETE /cursos/:id : Elimina un curso.

- POST /cursos/registrarEstudiantes: Asocia estudiantes a un curso.

### Estudiantes

- GET /estudiantes: Obtiene todos los estudiantes.

- GET /estudiantes/:id : Obtiene un estudiante por su ID.

- POST /estudiantes: Crea un nuevo estudiante.

- PUT /estudiantes/:id : Actualiza un estudiante existente.

- DELETE /estudiantes/:id : Elimina un estudiante.

### Profesores

- GET /profesores: Obtiene todos los profesores.

- GET /profesores/:id : Obtiene un profesor por su ID.

- POST /profesores: Crea un nuevo profesor.

- PUT /profesores/:id : Actualiza un profesor existente.

- DELETE /profesores/:id : Elimina un profesor.

## Modelos de Datos

### Curso

- id: Identificador único del curso.

- nombre: Nombre del curso.

- descripcion: Descripción del curso.

- createdAt: Fecha de creación del curso.

- updatedAt: Fecha de última actualización del curso.

- profesor: Profesor asociado al curso.

- estudiantes: Lista de estudiantes asociados al curso.

### Estudiante

- id: Identificador único del estudiante.

- dni: Documento Nacional de Identidad del estudiante.

- nombre: Nombre del estudiante.

- apellido: Apellido del estudiante.

- email: Correo electrónico del estudiante.

- createdAt: Fecha de creación del estudiante.

- updatedAt: Fecha de última actualización del estudiante.

### Profesor

- id: Identificador único del profesor.

- dni: Documento Nacional de Identidad del profesor.

- nombre: Nombre del profesor.

- apellido: Apellido del profesor.

- email: Correo electrónico del profesor.

- profesion: Profesión del profesor.

- telefono: Teléfono del profesor.

- createdAt: Fecha de creación del profesor.

- updatedAt: Fecha de última actualización del profesor.

- cursos: Lista de cursos asociados al profesor.

## Tecnologías Utilizadas

- Node.js: Entorno de ejecución para JavaScript.

- Express: Framework para construir aplicaciones web y APIs.

- TypeORM: ORM para TypeScript y JavaScript.

- TypeScript: Superset de JavaScript que añade tipos estáticos.

- MySQL: Sistema de gestión de bases de datos relacional.

## Contribución

- Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

- Haz un fork del repositorio.

- Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).

- Realiza tus cambios y haz commit (git commit -am 'Añade nueva funcionalidad').

- Haz push a la rama (git push origin feature/nueva-funcionalidad).

- Abre un Pull Request.

## Licencia

Este proyecto está bajo la licencia MIT.

## Creador

Carlos E. Rodriguez [perfil de Github](https://github.com/RodrDevs80)
