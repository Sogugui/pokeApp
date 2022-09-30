
# [**Link to Poke App**](https://scintillating-bubblegum-2eba51.netlify.app/)

Aplicación de búsqueda de Pokémons a modo de "Pokédex" desarrollada con React funcional en la que se plantearon para su desarrollo las siguientes directrices: 

Se realizaran las búsquedas solas en función de lo que escriba el usuario.

Cuando escribamos, la petición deberá realizarse según escribimos (uso de Debounce)

Cuando escribamos un pokemon en el input que ya exista en nuestra lista de pokemons, no se realizará la petición.

Routing:
/. La página principal, donde veamos el listado de pokemons.

/new La página de creación de nuevo pokemon con un formulario para ingresar sus datos.

/pokemon/:id La página de visualización de un perfil de pokemon (información extendida). Necesitarás el componente Details.

/search Página de búsqueda de un pokemon en la PokeApp. (Ya la tenemos hecha de ejercicios anteriores).

Formulario para creación de un nuevo pokémon.

Comunicación:
El estado con el listado de Pokemon debe vivir en App y pasarse a cada sección que lo necesite consumiendolo a través de Context

El componente ListaPokemon, recibirá de Context la lista de Pokémons y mapeará dicha lista cargando los componentes Card correspondientes y pasándole a través de props la información de cada registro.

Los nombres mostrados por los componentes Card de cada Pokémon serán Links clickables que llevarán a la ruta /pokemon/:id, que mostrará la vista detallada de ese Pokemon. En dicho Link se pasará en la query String los datos del Pokemon para poder ser leídos en la pantalla de vista detalle(puedes usar un hook para ello si quieres).

**Funcionamiento de la App**

En la ruta /search podremos hacer la búsqueda de Pokémons por nombre o por id.Estos se irán guardando en /list a modo de "favoritos".
Si queremos buscar un Pokémon que ya buscamos previamente aparecerá un mensaje de error y no se podrá hacer la petición. 

![1 2362](https://user-images.githubusercontent.com/101732872/193168075-551bdcb2-fbb3-4a67-9534-b3e4e16d1151.gif)

---Creación de un nuevo Pokémon 

Vista Pc: 

![createPok](https://user-images.githubusercontent.com/101732872/193168439-f634d511-a01a-44f9-a98d-bcd2363bbe91.jpg)

Vista Móvil: 

![createPok mvljpg](https://user-images.githubusercontent.com/101732872/193168607-79952532-10af-47bc-9d01-c2ce270e5072.jpg)

--Nuevo Pokémon creado y guardado en /list:

Vista Pc:

![pokecreated](https://user-images.githubusercontent.com/101732872/193168747-dbd12407-65a4-4489-ab71-e9a60bfc069e.jpg)

Vista Móvil: 

![pokecreatedmvl](https://user-images.githubusercontent.com/101732872/193168787-18165999-8d5f-44e9-a87f-d297f3511879.jpg).

--Vista detallada de un Pokémon guardado en /list al hacer click en su nombre 

![2](https://user-images.githubusercontent.com/101732872/193175303-384c4797-3267-4862-aa55-ee34f4b1ab2c.gif)







