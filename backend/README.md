# 🛠️ Backend - ToDO List App

¡Bienvenido/a al backend de la aplicación! ⚙️

## 🚀 Tecnologías Utilizadas

- 🐍 Python 3.10+
- ⚡ Flask (API REST)
- 🚀 Uvicorn (servidor ASGI)
- 🧪 uv (gestor de dependencias rápido)
- 🍃 MongoDB (base de datos NoSQL)

## ✨ ¿Qué hace este backend?

- 📋 Permite crear, leer, actualizar y eliminar tareas (CRUD)
- ✅ Marca tareas como completadas o pendientes
- 🗂️ Filtra tareas por estado
- 🕒 Guarda fecha de creación y actualización
- 🔒 Permite autenticación de usuarios (si aplica)
- 🌐 API RESTful lista para conectar con cualquier frontend

## 📦 Características

- Estructura modular y escalable
- Conexión eficiente a MongoDB
- Código limpio y documentado
- Listo para producción y desarrollo

## 🛠️ Instalación

1. Accede a este directorio:
   ```bash
   cd backend
   ```
2. Instala las dependencias con [uv](https://github.com/astral-sh/uv):
   ```bash
   uv pip install -r requirements.txt
   ```

## ▶️ Uso

1. Inicia el servidor de desarrollo:
   ```bash
   uvicorn main:app --reload --port 4000
   ```
2. El backend estará disponible en `http://localhost:4000`

## 📁 Estructura Sugerida

- `main.py` Punto de entrada
- `src/` Código fuente
- `routes/` Rutas de la API
- `models/` Modelos de datos
- `requirements.txt` Dependencias

## 🤝 Contribución

¡Tus aportes y sugerencias son bienvenidos! Abre un issue o haz un pull request.

## 📄 Licencia

MIT