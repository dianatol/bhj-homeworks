
const book = document.getElementById('book');

const fontSizes = document.querySelectorAll('.font-size');

fontSizes.forEach(fontSize => {
  fontSize.addEventListener('click', (e) => {
    e.preventDefault();
    
    fontSizes.forEach(fs => fs.classList.remove('font-size_active'));
    
    fontSize.classList.add('font-size_active');
    
    book.classList.remove('font-size_small', 'font-size_normal', 'font-size_big');
    
    const size = fontSize.getAttribute('data-size');
    let bookClass;
    
    if (size === 'small') {
      bookClass = 'font-size_small';
    } else if (size === 'big') {
      bookClass = 'font-size_big';
    } else {
      bookClass = 'book_font-size_normal';
    }
    book.classList.add(bookClass);
  });
});
