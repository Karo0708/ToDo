# 🛠️ Backend - ToDO List App

¡Bienvenido/a al backend de la aplicación! ⚙️

## 🚀 Tecnologías Utilizadas

- 🐍 Python 3.10+
- ⚡ FastAPI
- 🚀 Uvicorn
- 🧪 uv (gestor de dependencias rápido)
- 🗄️ Base de datos (Mongo)

## 📦 Características

- API RESTful para gestión de tareas
- Conexión a base de datos
- Estructura modular y escalable

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