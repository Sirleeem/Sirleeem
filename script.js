// Add hover and click effects to social media icons
document.querySelectorAll('.social-icon').forEach((icon) => {
  // Add hover effect
  icon.addEventListener('mouseenter', () => {
    icon.style.transform = 'scale(1.3)';
    icon.style.transition = 'transform 0.2s ease-in-out';
  });

  // Reset effect when mouse leaves
  icon.addEventListener('mouseleave', () => {
    icon.style.transform = 'scale(1)';
  });

  // Add a subtle click effect
  icon.addEventListener('click', () => {
    icon.style.transform = 'scale(1.1)';
    setTimeout(() => {
      icon.style.transform = 'scale(1)';
    }, 150); // Reset after a short delay
  });
});