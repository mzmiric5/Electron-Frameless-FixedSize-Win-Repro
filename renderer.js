window.addEventListener('resize', () => {
  document.querySelector('#size').innerText = `${document.documentElement.clientWidth} x ${document.documentElement.clientHeight}`;
});
