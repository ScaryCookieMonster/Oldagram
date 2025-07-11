const buttons = document.querySelectorAll('.like-button');
const likeEl = document.getElementById('like-count')
buttons.forEach(button => {
  button.addEventListener('dblclick', () => {
    const isLiked = button.classList.toggle('liked');
    let count = parseInt(likeEl.textContent.replace(/,/g, '').split(' ')[0], 10);
    count = isLiked ? count + 1 : count - 1;
    likeEl.textContent = count.toLocaleString() + ' likes';
  });
});