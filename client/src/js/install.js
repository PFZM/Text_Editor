const butInstall = document.getElementById("buttonInstall");

// Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  window.defferPromt = event;
  butInstall.classList.toggle("hidden", true);
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  const promptEvent = window.defferPromt;
  if (!promptEvent) {
    butInstall.classList.toggle("hidden", true);
    return;
  }
  promptEvent.prompt();
  window.defferPromt = null;
  butInstall.classList.toggle("hidden", true);
});

// Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  butInstall.classList.toggle("hidden", true);
  window.defferPromt = null;
});
