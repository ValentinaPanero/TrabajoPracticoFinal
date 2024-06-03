document.write(` 
<header>
    <img class="logo" src="Img/Logo.jpg" alt="Logo" onclick="window.open('index.html', '_self')" />
    

    <div class="SearchBar">
        <input class="SearchBar-text" type="text" id="parametro" onkeyup="Search()" placeholder="Buscar..">
        <button class="SearchBar-button"><img src="img/Botones/search_24dp_FILL0_wght400_GRAD0_opsz24.png" alt="Buscar"></button>
    </div>

    <button id="abrir" class="abrir-menu"><i class="bi bi-list"></i></button>

    <nav class="nav" id="nav">
        <button class="cerrar-menu" id="cerrar"><i class="bi bi-x-circle"></i></button>
        
        <ul class="nav-list">
            <li><a href="productos.html">Productos</a></li>
            <li><a href="tienda.html" target="-blank">Tienda</a></li>
        </ul>
    </nav>
</header>`)