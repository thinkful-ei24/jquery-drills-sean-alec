// Receive input from user
// Run fizzbuzz n times based on input from user
// For each fizzbuzz result, 
//  - generate a <div> element
//  - add <div> to DOM

function fizzbuzzer(n) {
    if (n % 15 === 0) return 'fizzbuzz';
    if (n % 5 === 0) return 'buzz';
    if (n % 3 === 0) return 'fizz';
    return n;
  }
  
  function generateFizzHtml(fizzbuzzedItem) {
    let className = '';
    if (typeof fizzbuzzedItem === 'string') {
      className = fizzbuzzedItem;
    }
  
    return `
      <div class="fizz-buzz-item ${className}">
        <span>${fizzbuzzedItem}</span>
      </div>
    `;
  }
  
  function main() {
    console.log('DOM is loaded');
  
    $('#number-chooser').submit(function(event) {
      event.preventDefault();
      
      const countTo = $('#number-choice').val();
      this.reset();
          
      const fizzbuzzResults = [];
      for (let i = 1; i <= countTo; i++) {
        fizzbuzzResults.push(fizzbuzzer(i));
      }
      const htmlElements = fizzbuzzResults.map(result => generateFizzHtml(result));
      $('.js-results').html(htmlElements);
  
    });
  }
  
  $(main);