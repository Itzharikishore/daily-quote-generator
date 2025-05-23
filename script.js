const quotes = [
    "Believe you can and you're halfway there.",
    "You are stronger than you think.",
    "Push yourself, because no one else is going to do it for you.",
    "Dream it. Wish it. Do it.",
    "Success doesn’t just find you. You have to go out and get it.",
    "Great things never come from comfort zones.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "Wake up with determination. Go to bed with satisfaction.",
    "Do something today that your future self will thank you for."
  ];
  
  const quoteBox = document.getElementById('quoteBox');
  const quoteText = document.getElementById('quote');
  const nextBtn = document.getElementById('nextBtn');
  
  function showQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteBox.classList.remove('show');
    
    setTimeout(() => {
      quoteText.textContent = quotes[randomIndex];
      quoteBox.classList.add('show');
    }, 300);
  }
  
  nextBtn.addEventListener('click', showQuote);
  
  // Show the first quote when the page loads
  window.onload = showQuote;
  