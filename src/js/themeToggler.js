const themeToggle = document.getElementById("themeToggleEl");
const body = document.body;

// Function to set the theme
function setTheme(isDark) {
  if (isDark) {
    body.classList.add("dark-mode");
    body.classList.remove("light-mode");
    localStorage.setItem("theme", "dark"); // Store theme preference
  } else {
    body.classList.add("light-mode");
    body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light"); // Store theme preference
  }
}

// Function to get stored theme preference
function getStoredTheme() {
  return localStorage.getItem("theme");
}

// Apply stored theme or default to light
const storedTheme = getStoredTheme();
if (storedTheme === "dark") {
  themeToggle.checked = true;
  setTheme(true);
} else {
  setTheme(false); //default to light
}

// Event listener for checkbox change
themeToggle.addEventListener("change", () => {
  setTheme(themeToggle.checked);
});
