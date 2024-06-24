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
            <li class="Search">
                <input class="Search-text" type="text" id="parametro" onkeyup="Search()" placeholder="Buscar..">
                <button class="Search-button"><img src="img/Botones/search_24dp_FILL0_wght400_GRAD0_opsz24.png" alt="Buscar"></button>
            </li>



            <li><a class="marca" href="#Wacom">Wacom</a></li>
            <li><a class="marca" href="#XP-Pen">XP-Pen</a></li>
            <li><a class="marca" href="#Huion">Huion</a></li>
            <li><a href="Administrar_Productos.html">Administrar</a></li>
        </ul>   
    </nav>
  
    
   
</header>`)