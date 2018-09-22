# Deployment de CarteleraI API

Este documento fue creado con la finalidad de facilitar el proceso de deployment para el proyecto de CarteleraI API. A continuación se muestran los pasos a seguir para lograrlo.

### Requisitos

* Ruby 2.2.0+
* RubyGems
* Bundler
* Rails 5+
* Git
* Cuenta en Heroku
* Heroku CLI

El API esta creado sobre Ruby/Rails, por lo que es necesario tener esas herramientas con las versiones ya presentadas anteriormente.

Para descargar el proyecto, es necesario descargar el repositorio al directorio que prefiera mas en su computadora. En terminal, descarga el repositorio
```bash
$ git clone git@github.com:ProyectoIntegrador2018/cartelera_backend.git
```

Despues de haberlo descargado, asegurese de entrar al directorio.
```bash
$ cd cartelera_backend
```

Ya dentro del directorio, se instalan todas las dependencias necesarias para el proyecto con
```bash
$ bundle install
```

El proceso toma un tiempo, hay que ser pacientes.


### Heroku CLI

El proyecto esta hosteado en el sitio Heroku, por lo que si se desea hacer un deploy en el mismo sitio, es necesario seguir los siguientes pasos

Para poder conectar nuestro proyecto con Heroku, es necesario descargar [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install) y hacer login con nuestras credenciales
```bash
$ heroku login
```

Despues de habernos loggeado, tendremos que instalar las dependencias nuevamente, por si se hicieron nuevos cambios a las gemas utilizadas
```bash
$ bundle install
```

Ya teniendo configurado Heroku, podemos proceder a crear nuestro sitio web.

### Subir a Heroku

Dentro del directorio del proyecto, se crea un sitio con Heroku de la siguiente manera:
```bash
$ heroku create
Creating app... done, secret-reef-24871
https://secret-reef-24871.herokuapp.com/ | https://git.heroku.com/secret-reef-24871.git
```

El comando anterior crea dos URLs, el primero con el sitio en donde la aplicación es hosteada, y el segundo que es el repositorio en Heroku.

Una vez creado el sitio, es hora de subir nuestra aplicación. Se utiliza el siguiente comando:
```bash
$ git push heroku master
```

Este comando tambien tomara un tiempo, pero despues de que termine de ejecutarse, puedes revisar que el API funciona con:
```bash
$ heroku open
```
