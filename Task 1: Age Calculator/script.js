// Populate day, month, year dropdowns
window.onload = function () {
  const daySelect = document.getElementById("day");
  const monthSelect = document.getElementById("month");
  const yearSelect = document.getElementById("year");

  for (let i = 1; i <= 31; i++) {
    daySelect.innerHTML += `<option value="${i}">${i}</option>`;
  }

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  for (let i = 0; i < 12; i++) {
    monthSelect.innerHTML += `<option value="${i}">${monthNames[i]}</option>`;
  }

  const currentYear = new Date().getFullYear();
  for (let i = currentYear; i >= 1900; i--) {
    yearSelect.innerHTML += `<option value="${i}">${i}</option>`;
  }
};

function calculateAge() {
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);

  const birthDate = new Date(year, month, day);
  const today = new Date();

  if (birthDate > today) {
    document.getElementById("result").textContent = "Birth date cannot be in the future.";
    return;
  }

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  document.getElementById("result").textContent =
    `You are ${years} year(s), ${months} month(s), and ${days} day(s) old.`;
}
