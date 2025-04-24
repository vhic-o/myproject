// Array of headlines
const headlines = [
    "Breaking News: Stay updated with the latest global events!",
    "Tech Update: AI is transforming industries worldwide.",
    "Health Alert: New breakthroughs in medical research.",
    "Economy Insights: Stock markets reach new highs.",
    "Social Spotlight: Communities come together for change."
  ];
  
  let currentIndex = 0;
  
  // Function to update the headline
  function updateHeadline() {
    const headlineElement = document.getElementById("dynamic-headline");
    headlineElement.textContent = headlines[currentIndex];
    currentIndex = (currentIndex + 1) % headlines.length; // Loop back to the start
  }
  
  // Change the headline every 5 seconds (5000ms)
  setInterval(updateHeadline, 5000);
  
  // Initialize the first headline immediately
  updateHeadline();

   