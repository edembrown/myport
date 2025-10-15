/* Luxury portfolio JS
   - carousel text (vertical) in hero
   - scroll intersection for fade-in
   - small keyboard shortcut for theme accent (press 'G' to flash gold accent)
*/

(function(){
  // Carousel (vertical slide)
  const track = document.getElementById('carouselTrack');
  if(track){
    // duplicate content to make infinite feel
    const items = Array.from(track.children);
    // use CSS animation (defined in style) by rotating transform via JS timing optionally
    // we'll implement a smooth translateY loop
    let idx = 0;
    const visibleHeight = 34; // matches CSS height for .carousel
    function moveCarousel(){
      idx = (idx + 1) % items.length;
      track.style.transition = 'transform 0.7s cubic-bezier(.2,.9,.3,1)';
      track.style.transform = `translateY(-${idx * (visibleHeight + 8)}px)`;
    }
    // initial spacing depends on font/line - ensure consistent by measuring first item
    // auto-run every 3000ms
    setInterval(moveCarousel, 3000);
  }

  // In-view animations
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if(en.isIntersecting) en.target.classList.add('inview');
    });
  }, {threshold: 0.12});

  document.querySelectorAll('.card, .skill-card, .project, .timeline-item').forEach(el => obs.observe(el));

  // Year
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();

  // Avatar fallback
  const avatar = document.getElementById('avatar');
  if(avatar){
    avatar.addEventListener('error', () => {
      avatar.style.display = 'none';
      const parent = avatar.parentElement;
      parent.innerHTML = '<div class="avatar-fallback">P A</div>';
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){
      e.preventDefault();
      const href = this.getAttribute('href');
      if(href === '#') return;
      const el = document.querySelector(href);
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

})();
