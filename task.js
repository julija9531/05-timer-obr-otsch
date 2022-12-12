test = false; //Прописание логов

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function timer() {
  while (time.textContent > 0) {
    if (test) {console.log(time.textContent)};
    await sleep(1000);
    time.textContent--;
  }
  alert("Вы победили в конкурсе!");
}

const time = document.getElementById("timer");
if (test) {console.log(time.textContent)};

timer()
