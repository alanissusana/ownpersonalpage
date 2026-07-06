# Mis Pendientes

App personal para trackear tareas de trabajo, personal y links, con sincronización real entre dispositivos.

## Cómo publicarla (una sola vez)

### 1. Súbela a GitHub
1. Crea un repositorio nuevo en GitHub (puede ser privado).
2. Sube estos archivos tal cual están (`index.html`, la carpeta `api/`, `package.json`).

### 2. Impórtala en Vercel
1. Entra a https://vercel.com y dale a **Add New → Project**.
2. Elige el repositorio que acabas de crear.
3. Dale a **Deploy** (no necesitas tocar ninguna configuración).

### 3. Activa la base de datos (Vercel KV)
1. Dentro del proyecto en Vercel, ve a la pestaña **Storage**.
2. Dale a **Create Database** → elige **KV**.
3. Cuando te pregunte a qué proyecto conectarla, selecciona este mismo proyecto.
   Esto agrega automáticamente las variables de entorno que la función `api/state.js` necesita.
4. Ve a la pestaña **Deployments** y dale **Redeploy** al último deploy (para que tome las nuevas variables).

### 4. Listo
Entra a la URL que te dio Vercel (algo como `mis-pendientes.vercel.app`) desde tu celular o tu compu — vas a ver los mismos datos en ambos.

## Notas
- No tiene login: cualquiera con el link puede ver y editar los datos. Si te importa que sea privado, en Vercel puedes activar **Deployment Protection** (Settings → Deployment Protection) para pedir una contraseña antes de entrar.
- Si algún día quieres agregar login de verdad, cuentas separadas, etc., avísame y lo armamos.
