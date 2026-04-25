function volverCatalogo(e) {
    e.preventDefault();

    // Si hay historial, volver como botón físico del teléfono
    if (window.history.length > 1) {
        window.history.back();
    } 
    // Si entró directo a la categoría
    else {
        window.location.href = "index.html#botones-categorias";
    }
}