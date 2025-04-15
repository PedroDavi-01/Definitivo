function setFaviconByWidth() {
    const favicon = document.getElementById("favicon");
    const width = window.innerWidth;

    if (width < 600) {
      favicon.href = "assets/img/android-chrome-512x512.png";
    } else if (width < 1024) {
      favicon.href = "favicon-tablet.ico";
    } else {
      favicon.href = "favicon-desktop.ico";
    }
  }

  // Executa ao carregar a página
  window.addEventListener("load", setFaviconByWidth);

  // Executa ao redimensionar
  window.addEventListener("resize", setFaviconByWidth);