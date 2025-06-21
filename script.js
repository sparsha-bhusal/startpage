function updateClock() {
  const clock = document.getElementById('clock');
  const ampmElem = document.getElementById('ampm');
  const now = new Date();

  let hrs = now.getHours();
  const mins = now.getMinutes();

  const ampm = hrs >= 12 ? 'PM' : 'AM';

  hrs = hrs % 12;
  hrs = hrs ? hrs : 12;

  const formattedMins = mins < 10 ? '0' + mins : mins;

  clock.textContent = `${hrs}:${formattedMins}`;
  ampmElem.textContent = ampm;
}

window.onload = () => {
  updateClock();
  setInterval(updateClock, 1000);
};
