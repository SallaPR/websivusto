// Makes sure the HTML document has loaded completely before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Darkmode
  const icon = document.getElementById("icon"); // Get the dark mode icon
  const darkModeState = localStorage.getItem("darkMode"); // Get the dark mode state from local storage

  // Checks the state and sets or removes darkmode
  function initializeDarkMode() {
    if (darkModeState === "enabled") {
      document.body.classList.add("darkmode"); // Add dark mode class to body
    } else {
      document.body.classList.remove("darkmode"); // Remove dark mode class from body
    }
    updateIcon(); // Update the icon
  }

  // Function to update the dark mode icon
  function updateIcon() {
    icon.src = document.body.classList.contains("darkmode")
      ? "images/sun.png"
      : "images/moon.png";
  }

  // Event listener for when user clicks the icon
  icon.onclick = function () {
    document.body.classList.toggle("darkmode"); // Toggle dark mode class
    updateIcon(); // Update the icon
    localStorage.setItem(
      "darkMode",
      document.body.classList.contains("darkmode") ? "enabled" : "disabled"
    ); // Save dark mode state
  };

  // Function to check if element exists
  function elementExists(selector) {
    return document.querySelector(selector) !== null; // Check if an element exists in the DOM
  }

  // Menu for smaller screens
  window.showSidebar = function () {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex"; // Show sidebar
  };

  window.hideSidebar = function () {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none"; // Hide sidebar
  };

  // Slideshow
  if (elementExists("#slideshow")) {
    let i = 0; // Index for the current image
    const photoArray = [
      "images/img2.jpg",
      "images/img4.jpg",
      "images/img6.jpg",
      "images/img13.jpg",
    ];
    const time = 3000; // Time for image change

    const slideContainer = document.querySelector(".slide-container");

    // Function to change the image
    function changeImg() {
      slideContainer.style.transform = `translateX(-${i * 100}%)`; // Move slide container

      i = (i + 1) % photoArray.length; // Update index
    }

    // Load images into the slideshow
    slideContainer.innerHTML = photoArray
      .map((src) => `<img class="slide" src="${src}" alt="">`)
      .join("");
    changeImg(); // Change to the first image immediately

    // Set interval to change images
    setInterval(changeImg, time);
  }

  // Cats or dogs quiz

  if (elementExists("#quiz")) {
    function updateImages() {
      const catsImage = document.getElementById("catsImage");
      const dogsImage = document.getElementById("dogsImage");
      const selectedPets = document.querySelector('input[name="pets"]:checked');

      // Set both images to black and white
      catsImage.classList.remove("blackAndWhite");
      dogsImage.classList.remove("blackAndWhite");

      // Add black and white effect based on selected pet
      if (selectedPets) {
        if (selectedPets.value === "dogs") {
          dogsImage.classList.add("blackAndWhite");
        } else if (selectedPets.value === "cats") {
          catsImage.classList.add("blackAndWhite");
        }
      }
    }

    // Set event listeners for radio buttons
    if (document.querySelector("#quiz")) {
      const catsRadio = document.querySelector('input[name="pets"][value="cats"]');
      const dogsRadio = document.querySelector('input[name="pets"][value="dogs"]');

      catsRadio.addEventListener("click", updateImages);
      dogsRadio.addEventListener("click", updateImages);
    }
  }

  // Movie table
  document.querySelectorAll("th").forEach((th) => {
    th.addEventListener("click", () => {
      const table = th.closest("table"); // Get the closest table
      const tbody = table.querySelector("tbody"); // Get the table body
      const rows = Array.from(tbody.querySelectorAll("tr")); // Get all rows as an array
      const index = Array.from(th.parentNode.children).indexOf(th); // Get the index of the clicked header
      const isAscending = th.classList.toggle("asc"); // Toggle ascending class and determine order

      // Sort the rows based on clicked header
      rows.sort((a, b) => {
        const aText = a.children[index].textContent; // Get text content of row a
        const bText = b.children[index].textContent; // Get text content of row b

        return isAscending
          ? aText.localeCompare(bText) // Compare for ascending order
          : bText.localeCompare(aText); // Compare for descending order
      });

      // Append sorted rows to the table body
      rows.forEach((row) => tbody.appendChild(row));
    });
  });

  // Photo gallery functionality
  if (elementExists("#gallery")) {
    const photoArray = [
      { src: "images/img1.jpg", alt: "White peacock" },
      { src: "images/img2.jpg", alt: "Sea and sunset" },
      { src: "images/img3.jpg", alt: "Sea view" },
      { src: "images/img4.jpg", alt: "Nallikari beach" },
      { src: "images/img5.jpg", alt: "Snowy road and sunset" },
      { src: "images/img6.jpg", alt: "Snowy view" },
      { src: "images/img7.jpg", alt: "Snowy forest" },
      { src: "images/img8.jpg", alt: "Summer view from a field" },
      { src: "images/img9.jpg", alt: "Ducks in a park" },
      { src: "images/img10.jpg", alt: "Cat on a table" },
      { src: "images/img11.jpg", alt: "Dog on a couch" },
      { src: "images/img12.jpg", alt: "Sunset from a balcony" },
      { src: "images/img13.jpg", alt: "Seaview in summer" },
      { src: "images/img14.jpg", alt: "White flowers" },
      { src: "images/img15.jpg", alt: "Road and yellow trees" },
      { src: "images/img16.jpg", alt: "Goats" },
      { src: "images/img17.jpg", alt: "White flowers" },
      { src: "images/img18.jpg", alt: "Summer and fields" },
      { src: "images/img19.jpg", alt: "Dog in snowy forest" },
    ];

    // Get gallery columns
    const columns = [
      document.getElementById("column-1"),
      document.getElementById("column-2"),
      document.getElementById("column-3"),
    ];

    let currentIndex = 0; // Index for the next batch of images
    const loadCount = 6; // Number of images to load at once
    let isLoading = false; // Flag to prevent loading while already loading
    let columnIndex = 0; // Index for which column to load the next image

    // Function to load images into the gallery
    function loadImages() {
      if (isLoading || currentIndex >= photoArray.length) return; // Prevent loading if already loading or all images are loaded

      isLoading = true; // Set loading flag
      const firstBatch = photoArray.slice(currentIndex, currentIndex + loadCount); // Get the next batch of images

      // Loop through the batch and append images to the columns
      for (const photo of firstBatch) {
        const photoDiv = document.createElement("div");
        photoDiv.classList.add("photo");
        photoDiv.innerHTML = `<img src="${photo.src}" alt="${photo.alt}" loading="lazy">`;

        columns[columnIndex].appendChild(photoDiv); // Add photo to the column

        // Add click event to open modal with the image
        photoDiv
          .querySelector("img")
          .addEventListener("click", () => openModal(photoDiv));

        columnIndex = (columnIndex + 1) % columns.length; // Update column index for next image
      }

      currentIndex += loadCount; // Update current index for next load
      isLoading = false; // Reset loading flag
    }

    // Modal functionality

    function openModal(photoDiv) {
      const modal = document.getElementById("modal");
      const modalImg = document.getElementById("modal-image");

      modalImg.src = photoDiv.querySelector("img").src; // Set modal image source
      modal.style.display = "block"; // Show modal
    }

    function closeModal() {
      const modal = document.getElementById("modal");
      modal.style.display = "none"; // Hide modal
    }

    const modal = document.getElementById("modal");
    modal.style.display = "none"; // Ensure modal is hidden by default

    loadImages(); // Load initial images

    modal.addEventListener("click", closeModal); // Close modal on click

    // Load more images when scrolling to the bottom
    window.addEventListener("scroll", () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        loadImages(); // Load more images
      }
    });
  }

  // Weather functionality

  if (elementExists("#weather-info")) {
    const apiKey = "9e955ff1f755998bae40a7004e7c199c";

    // Function to fetch weather data for a city
    async function fetchWeather(city) {
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      try {
        const response = await fetch(weatherUrl); // Fetch weather data
        if (!response.ok) throw new Error("Weather data not found"); // Handle error if response is not ok
        const data = await response.json(); // Parse JSON data
        displayWeather(data); // Display the weather data
      } catch (error) {
        console.error("Error fetching weather data:", error);
        document.getElementById(
          "weather-info"
        ).innerHTML = `<p>Error fetching weather data. Please try again later.</p>`;
      }
    }

    // Function to display the weather data
    function displayWeather(data) {
      const temperatureElement = document.getElementById("temperature"); // Get temperature element
      const descriptionElement = document.getElementById("description"); // Get description element
      temperatureElement.innerText = `Temperature: ${data.main.temp} °C`; // Display temperature
      descriptionElement.innerText = `Conditions: ${data.weather[0].description}`; // Display weather conditions
    }

    // Event listener for the weather button
    document.getElementById("weather-btn").addEventListener("click", () => {
      const city = document.getElementById("cityInput").value; // Get input city name
      if (city) {
        fetchWeather(city); // Fetch weather for the specified city
      } else {
        alert("Please enter a city name."); // Alert if no city is entered
      }
    });

    // Event listener for enter key
    document.getElementById("cityInput").addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        // Check if Enter key was pressed
        const city = document.getElementById("cityInput").value; // Get input city name
        if (city) {
          fetchWeather(city); // Fetch weather for the specified city
        } else {
          alert("Please enter a city name."); // Alert if no city is entered
        }
      }
    });
  }

  // Form button functionality
  if (elementExists(".contact-info")) {
    // Check if the contact form exists
    document.getElementById("form-btn").addEventListener("click", myFunction); // Set click event for the button

    // Function to handle form button click
    function myFunction() {
      alert("You clicked send"); // Alert the user when the button is clicked
    }
  }

  // Initialize dark mode
  initializeDarkMode();
});
