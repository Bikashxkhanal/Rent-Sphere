export function setupRentalListeners() {
  const rentalDaysInput = document.querySelector("#rentalDays");
  const fromInput = document.querySelector("#from");

  // Update rentalDays variable when input is manually changed
  rentalDaysInput.addEventListener("input", () => {
    rentalDays = parseInt(rentalDaysInput.value) || 0;
    updateToDate();
  });

  // Update "to" date when "from" date is selected
  fromInput.addEventListener("blur", () => {
    updateToDate();
  });
}

export function updateToDate() {
 const  from = document.querySelector("#from").value;
  if (!from || isNaN(rentalDays)) return;

  const fromDate = new Date(from);
  fromDate.setDate(fromDate.getDate() + rentalDays);
  const toDate = fromDate.toISOString().split("T")[0];

  document.querySelector("#to").value = toDate;
}