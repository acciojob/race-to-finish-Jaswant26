const promises = [
  new Promise((resolve) => {
    setTimeout(() => resolve('Promise 1 resolved'), Math.random() * 4000 + 1000);
  }),
  new Promise((resolve) => {
    setTimeout(() => resolve('Promise 2 resolved'), Math.random() * 4000 + 1000);
  }),
  new Promise((resolve) => {
    setTimeout(() => resolve('Promise 3 resolved'), Math.random() * 4000 + 1000);
  }),
  new Promise((resolve) => {
    setTimeout(() => resolve('Promise 4 resolved'), Math.random() * 4000 + 1000);
  }),
  new Promise((resolve) => {
    setTimeout(() => resolve('Promise 5 resolved'), Math.random() * 4000 + 1000);
  })
];

Promise.any(promises)
  .then((result) => {
    const outputDiv = document.getElementById('output');
    outputDiv.innerText = result;
  })
  .catch((error) => {
    console.error('Error:', error);
  });
// Do not change the code above this
// add your promises to the array `promises`
