document.addEventListener('DOMContentLoaded', function() {
    const sun = document.getElementById('sun');
    
    
    sun.addEventListener('mouseover', function() {
     
      sun.style.transform = "scale(1.3)";
      sun.style.boxShadow = "0 0 0px rgba(255, 255, 0, 1)"; 
      sun.style.backgroundColor = "orange"; 
    });
  
    sun.addEventListener('mouseout', function() {
      sun.style.transform = "scale(1)";
      sun.style.boxShadow = "0 0 0px rgba(255, 255, 0, 0.7)"; 
      sun.style.backgroundColor = "yellow"; 
    });
  });
  