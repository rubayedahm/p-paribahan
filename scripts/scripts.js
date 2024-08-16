const seats = document.querySelectorAll("td");
let selectedSeats = [];

seats.forEach((seat) => {
  seat.addEventListener("click", () => {
    if (selectedSeats.length < 4) {
      seat.style.backgroundColor = "#1DD100";
      selectedSeats.push(seat.textContent);
      updateSelectedSeatsDisplay();
    } else {
      alert("You can only select 4 seats");
    }
  });
});

function updateSelectedSeatsDisplay() {
  const selectedSeatsSpan = document.getElementById("seat-count");
  selectedSeatsSpan.textContent = selectedSeats.length;

  const totalTicketPriceElement = document.getElementById("total-ticket-price");
 
  
  const totalPrice = selectedSeats.length * 550;
  totalTicketPriceElement.textContent = totalPrice;

//   coupon button
const couponButton = document.getElementById('apply-coupon')

  document.getElementById('coupon-input').addEventListener('keyup', function(e) {
    const text = e.target.value;

    if(text === "New 15") {
       couponButton.removeAttribute('disabled')
        
    }
    else if (text === "Couple 20") {
        couponButton.removeAttribute('disabled')
    }
    else {
        couponButton.setAttribute('disabled', true)
    }
})





}

function getSelectedSeatNumbers() {
  return selectedSeats;
}

// Coupon 

