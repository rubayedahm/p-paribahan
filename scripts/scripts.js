const seats = document.querySelectorAll('td');
let selectedSeats = [];


seats.forEach(seat => {
    seat.addEventListener('click', () => {
      if (selectedSeats.length < 4) {
        seat.style.backgroundColor = '#1DD100';
        selectedSeats.push(seat.textContent); // Store seat number
        updateSelectedSeatsDisplay()
      } else {
        alert('You can only select 4 seats');
      }
    });
  });

  function updateSelectedSeatsDisplay() {
    const selectedSeatsSpan = document.getElementById('seat-count');
    selectedSeatsSpan.textContent = selectedSeats.length;
  }
  
  function getSelectedSeatNumbers() {
    return selectedSeats;
  }
  
  
