<p align="center"><img src="https://emi.edu.bo/images/Logos_EMI/logo_emi.png"></p>

## EMI - Starter Frontend

Este repositorio contiene la configuración, dependencias y archivos escenciales para comenzar un proyecto nuevo de acuerdo a las Políticas de Estandarización de Desarrollo de la Escuela Militar de Ingeniería

## Requisitos
1. Node js 11.0 o superior

Los pasos para realizar el despliegue son:

- copiar el archivo .env.suggested  a.env
- configurar conexión al servicio en el archivo .env
- npm install
- npm run serve
- abrir en el navegador http://localhost:8080 

## Créditos

Este usa los siguientes repositorios:

- **[Vue](https://vuejs.org/)**
- **[Datatables](https://datatables.net/)**
- **[MSAL vue](https://www.npmjs.com/package/vue-msal)**

## Vulnerabilidades de Seguridad

Si encuentras alguna vulnerabilidad de seguridad, por favor envía un email a la Dirección Nacional de Tecnologías de Información y Comunicación via [dticemi@adm.emi.edu.bo] (mailto:dticemi@adm.emi.edu.bo). 

## Licencia

Este proyecto es de código abierto y licenciado bajor [MIT license](https://opensource.org/licenses/MIT).

### Compilar para produccion
npm run build

### Cargar en produccion
scp -r dist/* usuario@ipservidor:/ruta_de_prod
Ejemplo:
scp -r dist/* servicioscliente@172.16.3.27:/var/www/clients/client2/web1/web/starter_frontend

### Arreglar Archivos con Lint (En caso de ser necesario)
npm run lint

### Configuracion personalizada
See [Configuration Reference](https://cli.vuejs.org/config/).
