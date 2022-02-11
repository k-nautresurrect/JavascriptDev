const startTime = new Date();

loged("parsing start");

window.addEventListener("load", () => {
  loged("rendered");
});

function loged(mess) {
  console.log(`${new Date() - startTime} ms- ${mess}`);
}
