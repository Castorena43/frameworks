# Python

## Migraciones
1. En la terminal dentro del proyecto ejecutar python.
2. Ejecutar las siguientes lineas: 
`from main import db, PersonaModel` 
`db.create_all()`
## Ejecutar
Ejecutar el comando `python main.py`

## Endpoints
### POST http://127.0.0.1:5000/persona
**Parameters**
|          Name | Required |  Type   | 
| -------------:|:--------:|:-------:|
|     `name` | required | string  |                                                          |
|     `email` | required | string  |

### GET http://127.0.0.1:5000/persona

# Laravel

## Ejecutar
1. El archivo env.example configurar la conexion a la BD db_hector y renombrar el archivo a .env
2. Levantar el servicio desde consola con `php artisan serve`

## Endpoints
### POST http://127.0.0.1:8000/api/create-people
**Parameters**
|          Name | Required |  Type   | 
| -------------:|:--------:|:-------:|
|     `name` | required | string  |                                                          |
|     `email` | required | string  |

### GET http://127.0.0.1:8000/api/people

# Adonis

## Ejecutar
1. Ejecutar el comando `npm install`
2. El archivo env.example configurar la conexion a la BD db_hector y renombrar el archivo a .env
3. Levantar el servicio desde consola con `adonis serve`

## Endpoints
### POST http://127.0.0.1:3333/api/create-people
**Parameters**
|          Name | Required |  Type   | 
| -------------:|:--------:|:-------:|
|     `name` | required | string  |                                                          |
|     `email` | required | string  |

### GET http://127.0.0.1:3333/api/people

    