let deferredPrompt

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault()
  deferredPrompt = e

  mostrarBotonInstalar()
})

function mostrarBotonInstalar() {

  if (document.getElementById("btn-instalar-admin")) return

  const btn = document.createElement("button")

  btn.id = "btn-instalar-admin"

  btn.innerText = "📲 Instalar Panel Admin"

  btn.style.position = "fixed"
  btn.style.bottom = "20px"
  btn.style.right = "20px"
  btn.style.zIndex = "9999"
  btn.style.padding = "14px 18px"
  btn.style.border = "none"
  btn.style.borderRadius = "12px"
  btn.style.background = "#000"
  btn.style.color = "#fff"
  btn.style.fontWeight = "bold"
  btn.style.cursor = "pointer"
  btn.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)"

  btn.addEventListener("click", async () => {

    if (!deferredPrompt) return

    deferredPrompt.prompt()

    const { outcome } = await deferredPrompt.userChoice

    if (outcome === "accepted") {
      console.log("Admin app instalada")
    }

    deferredPrompt = null

    btn.remove()
  })

  document.body.appendChild(btn)
}