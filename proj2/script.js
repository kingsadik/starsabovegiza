document.addEventListener('DOMContentLoaded', () => {
  const mainDot = document.getElementById('main-dot');
  const infoBox = document.getElementById('info-box');
  const infoTitle = document.getElementById('info-title');
  const infoText = document.getElementById('info-text');
  const dateInput = document.getElementById('date-input');

  // Set initial text for the info box
  infoTitle.textContent = 'Click the Dot';
  infoText.textContent = 'Click on the dot to see more information.';

  // Click event for the main dot
  mainDot.addEventListener('click', () => {
    infoTitle.textContent = 'Main Dot Clicked';
    infoText.textContent = 'This is the main dot. It opens the info box.';
    toggleInfoBox();
  });

  // Set the minimum and maximum dates for the date input
  const today = new Date().toISOString().split('T')[0];
  dateInput.setAttribute('max', today);

  // Define fixed positions and shapes for constellations
  let fixedDots = [
    { text: 'Ursa Major: The Great Bear constellation', description: 'Ursa Major is one of the best-known constellations, containing the well-known asterism known as the Big Dipper.', shape: 'big_dipper', size: 'bright', color: '#FFFFFF', x: 0, y: 0 },
    { text: 'Ursa Minor: The Little Bear constellation', description: 'Ursa Minor contains the North Star (Polaris) and is important for navigation.', shape: 'little_dipper', size: 'bright', color: '#FFFFFF', x: 0, y: 0 },
    { text: 'Sirius: Canis Major', description: 'Sirius, also known as the Dog Star, is the brightest star in the night sky and is part of the constellation Canis Major.', shape: 'star', size: 'bright', color: '#FFFF00', x: 400, y: 400 }, // Yellow color for Canis Major (Sirius)
    { text: 'Vega: Lyra', description: 'Vega is one of the brightest stars in the sky and is part of the constellation Lyra.', shape: 'star', size: 'bright', color: '#00FFFF', x: 500, y: 500 }, // Cyan color for Lyra (Vega)
    { text: 'Arcturus: Boötes', description: 'Arcturus is a bright star in the constellation Boötes and is one of the brightest stars in the northern celestial hemisphere.', shape: 'star', size: 'bright', color: '#FF00FF', x: 600, y: 600 } // Magenta color for Boötes (Arcturus)
  ];

  // Randomize positions for Ursa Major and Ursa Minor constellations
  fixedDots = fixedDots.map(dot => ({
    ...dot,
    x: Math.floor(Math.random() * window.innerWidth),
    y: Math.floor(Math.random() * window.innerHeight)
  }));

  // Generate dots based on the selected date
  dateInput.addEventListener('change', () => {
    const selectedDate = new Date(dateInput.value);
    const month = selectedDate.getMonth() + 1; // Get the month (January is 0)

    const numDots = Math.floor(Math.random() * 30) + 10; // Random number of dots (between 10 and 40)

    const dotPositions = [];
    for (let i = 0; i < numDots; i++) {
      const x = Math.floor(Math.random() * window.innerWidth);
      const y = Math.floor(Math.random() * window.innerHeight);
      const starNames = [
        { name: 'Aldebaran', description: 'Aldebaran is a bright star in the constellation Taurus and is known for its reddish appearance.' },
        { name: 'Rigel', description: 'Rigel is the brightest star in the constellation Orion and is a blue supergiant.' },
        { name: 'Betelgeuse', description: 'Betelgeuse is another bright star in Orion and is a red supergiant nearing the end of its life.' },
        { name: 'Procyon', description: 'Procyon is the brightest star in the constellation Canis Minor and is part of the winter triangle.' },
        { name: 'Spica', description: 'Spica is the brightest star in the constellation Virgo and is a binary star system.' },
        { name: 'Regulus', description: 'Regulus is the brightest star in the constellation Leo and is one of the brightest stars in the night sky.' },
        { name: 'Pollux', description: 'Pollux is one of the twin stars in the constellation Gemini and is an orange giant star.' },
        { name: 'Castor', description: 'Castor is the other twin star in Gemini and is a multiple star system.' },
        { name: 'Capella', description: 'Capella is the brightest star in the constellation Auriga and is a multiple star system.' },
        { name: 'Alnilam', description: 'Alnilam is one of the stars in Orion\'s Belt and is a blue supergiant.' },
        { name: 'Bellatrix', description: 'Bellatrix is a bright star in the constellation Orion and is one of the stars forming Orion\'s shoulder.' },
        { name: 'Mintaka', description: 'Mintaka is another star in Orion\'s Belt and is a multiple star system.' },
        { name: 'Alnitak', description: 'Alnitak is the third star in Orion\'s Belt and is a multiple star system.' },
        { name: 'Deneb', description: 'Deneb is one of the brightest stars in the constellation Cygnus and is part of the Summer Triangle.' },
        { name: 'Altair', description: 'Altair is one of the stars in the Summer Triangle and is the brightest star in the constellation Aquila.' },
        { name: 'Antares', description: 'Antares is a red supergiant star in the constellation Scorpius and is one of the brightest stars in the night sky.' },
        { name: 'Fomalhaut', description: 'Fomalhaut is the brightest star in the constellation Piscis Austrinus and is known for its dusty debris disk.' },
        { name: 'Alpheratz', description: 'Alpheratz is the brightest star in the constellation Andromeda and is also part of the constellation Pegasus.' },
        { name: 'Mirach', description: 'Mirach is a red giant star in the constellation Andromeda and is part of the Andromeda Galaxy group.' },
        { name: 'Alderamin', description: 'Alderamin is a bright star in the constellation Cepheus and is part of the Summer Triangle.' }
      ];
      const randomStar = starNames[Math.floor(Math.random() * starNames.length)];
      dotPositions.push({ x, y, text: `${randomStar.name}: Random Star`, description: randomStar.description, type: 'star' });
    }

    // Check if the selected date is between June and August (summer) or between December and February (winter)
    const isSummer = month >= 6 && month <= 8;
    const isWinter = month >= 12 || month <= 2;

    // Define positions and colors for summer constellations
    let summerConstellations = [];
    if (isSummer) {
      summerConstellations = [
        { x: Math.floor(Math.random() * window.innerWidth), y: Math.floor(Math.random() * window.innerHeight), text: 'Scorpius: Scorpion', color: '#FF5733', shape: 'scorpion', description: 'Scorpius is a zodiac constellation known for its distinctive shape resembling a scorpion.', type: 'constellation' },
        { x: Math.floor(Math.random() * window.innerWidth), y: Math.floor(Math.random() * window.innerHeight), text: 'Sagittarius: Archer', color: '#FFD700', shape: 'archer', description: 'Sagittarius is a zodiac constellation representing a centaur archer and is home to the galactic center.', type: 'constellation' },
        { x: Math.floor(Math.random() * window.innerWidth), y: Math.floor(Math.random() * window.innerHeight), text: 'Corona Australis: Southern Crown', color: '#9400D3', shape: 'crown', description: 'Corona Australis is a small constellation representing a southern crown.', type: 'constellation' }
      ];
    }

    // Define positions and colors for winter constellations
    let winterConstellations = [];
    if (isWinter) {
      winterConstellations = [
        { x: Math.floor(Math.random() * window.innerWidth), y: Math.floor(Math.random() * window.innerHeight), text: 'Orion: Hunter', color: '#FFA500', shape: 'hunter', description: 'Orion is a prominent winter constellation known for the Orion Nebula and the famous Orion\'s Belt.', type: 'constellation' },
        { x: Math.floor(Math.random() * window.innerWidth), y: Math.floor(Math.random() * window.innerHeight), text: 'Taurus: Bull', color: '#800080', shape: 'bull', description: 'Taurus is a zodiac constellation known for the Pleiades star cluster and the bright star Aldebaran.', type: 'constellation' },
        { x: Math.floor(Math.random() * window.innerWidth), y: Math.floor(Math.random() * window.innerHeight), text: 'Auriga: Charioteer', color: '#FF1493', shape: 'charioteer', description: 'Auriga is a constellation representing a charioteer and is home to the bright star Capella.', type: 'constellation' }
      ];
    }

    // Combine fixed dots, summer constellations, winter constellations, and random dots
    let allDots = [...fixedDots, ...dotPositions, ...summerConstellations, ...winterConstellations];

    // Clear existing dots
    const existingDots = document.querySelectorAll('.dot');
    existingDots.forEach(dot => dot.remove());

    // Create new dots based on the selected date
    allDots.forEach((pos, index) => {
      const dot = document.createElement('div');
      dot.className = 'dot';
      dot.style.left = pos.x + 'px';
      dot.style.top = pos.y + 'px';
      dot.style.width = pos.size === 'bright' ? '15px' : '10px'; // Adjust size for bright stars
      dot.style.height = pos.size === 'bright' ? '15px' : '10px'; // Adjust size for bright stars
      dot.style.backgroundColor = pos.color || '#fff'; // Set color if defined
      dot.style.zIndex = 1;
      dot.addEventListener('click', () => {
        const dotType = pos.type === 'constellation' ? 'Constellation' : 'Star';
        infoTitle.textContent = `${dotType} Clicked`;
        infoText.innerHTML = `<strong>${pos.text}</strong><br>${pos.description}`;
        toggleInfoBox();
          // Add zoom effect when a star is clicked
          dot.style.transform = 'scale(1.2)';
          setTimeout(() => {
            dot.style.transform = 'scale(1)';
          }, 200); // Reset scale after 200ms
        
      });


      // Apply custom shapes and styles
      if (pos.shape === 'big_dipper') {
        dot.classList.add('big-dipper');
      } else if (pos.shape === 'little_dipper') {
        dot.classList.add('little-dipper');
      } else if (pos.shape === 'star') {
        dot.classList.add('bright-star');
      } else if (pos.shape === 'scorpion') {
        dot.classList.add('scorpion');
      } else if (pos.shape === 'archer') {
        dot.classList.add('archer');
      } else if (pos.shape === 'crown') {
        dot.classList.add('crown');
      } else if (pos.shape === 'hunter') {
        dot.classList.add('hunter');
      } else if (pos.shape === 'bull') {
        dot.classList.add('bull');
      } else if (pos.shape === 'charioteer') {
        dot.classList.add('charioteer');
      }

      document.body.appendChild(dot);
    });
  });

  // Function to toggle the visibility of the info box
  function toggleInfoBox() {
    infoBox.style.display = infoBox.style.display === 'block' ? 'none' : 'block';
  }
});
