document.addEventListener("DOMContentLoaded", () => {

    const imagenes = document.querySelectorAll("img");

    console.log("Imágenes encontradas:", imagenes.length);

    imagenes.forEach(img => {
        img.style.cursor = "pointer";

        img.addEventListener("click", () => {
            const overlay = document.createElement("div");
            overlay.style.position = "fixed";
            overlay.style.inset = "0";
            overlay.style.background = "rgba(0,0,0,0.95)";
            overlay.style.display = "flex";
            overlay.style.justifyContent = "center";
            overlay.style.alignItems = "center";
            overlay.style.zIndex = "999";

            const imagenGrande = document.createElement("img");
            imagenGrande.src = img.src;
            imagenGrande.style.maxWidth = "70%";
            imagenGrande.style.maxHeight = "70%";
            imagenGrande.style.borderRadius = "10px";

            overlay.appendChild(imagenGrande);
            document.body.appendChild(overlay);

            overlay.addEventListener("click", () => overlay.remove());
        });
    });

});