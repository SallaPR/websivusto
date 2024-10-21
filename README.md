# Web-sovellusprojekti
https://sallapr.github.io/websivusto/

## Criteria

### HTML
[index.html](index.html)
[stuff.html](stuff.html)
[gallery.html](gallery.html)
[contact.html](contact.html)

1. **Basic HTML structure is present**
   - Troughout the index.html, stuff.html, gallery.html, contact.html files
3. **HTML structure with clear content differentiation (headings, paragraphs, lists)**
   - Throughout all html files
   - Headings and paragraphs example index.html lines 49-51
   - List navigation bar in index.html lines 15-42
5. **Use of forms, links, and media.**
   - Throughout all html files
   - Example of links in navigation bar index.html lines 29-36
   - Form is in contact.html lines 76-102
7. **Tables are effectively used**
   - Table example in stuff.html lines 87-121
9. **Consistent use of semantic HTML throughout, ensuring better structure and understanding of the content**
   - Troughout all html files
   - Example index.html nav bar (ln 13-43), sections (ln 48-59), footer (ln 64-81)

### CSS 
[styles.css](styles.css)

1. **Basic CSS styling (colors, fonts)**
   - Whole styles.css file
   - Colours at the start of the file lines 1-23
3. **Use of classes and IDs to style specific elements**
   - Examples container class on line 97 and icon-id on line 111
5. **Implementation of responsive design elements.**
   - Media queries starting from line 567
7. **Use of layouts for advanced user interfaces (arrays, float, flexbox, css grid)**
   - For example flexbox used in container line 97
   - Grid used in weather-container on line 239
9. **Styling demonstrates a strong grasp of layout principles, aesthetics, and user experience.**
   - Responsive design with media queries
   - Color palettes using variables on line 1-23
   - Hover effects for buttons on line 199 and for gallery pictures on line 397
   - Using flexbox and grid layouts

### JavaScript Basics 
[script.js](script.js)

1. **Simple interactions (like alerts on button click).**
   - Alerts on lines 264, 276 and 289
3. **Multiple event listeners and basic DOM manipulations.**
   - Event listeners on lines 25, 114 and 259
   - DOM manipulations on lines 26, 65, 95-97, 132, 185, 254-255
5. **Use of arrays, objects, and functions.**
   - Photo arrays in slideshow on lines 53-58, and gallery lines 138-158
   - Objects in gallery lines 139-157
   - Functions:
      - Dark mode (lines 8-15)
      - Update dark mode icon (lines 18-22)
      - Change image in slideshow (lines 64-68)
      - Load images in gallery (lines 173-197)
      - Fetch weather data (lines 235-248)
      - Display weather (lines 251-256)
7. **Advanced logic, looping through data, and dynamic DOM updates.**
   - Dynamic DOM updates like
      - Darkmode (lines 4-32)
      - SetInterval for changing the slideshow image (lines 51-78)
      - Photo gallery loads images into different columns (lines 180-193)
   - Looping trough data
      - Slideshow using .map() method (line 72)
      - Photo gallery slicing an array of images to load multiple images at once (lines 137-197)
   - Conditionals and state management
      - Checking that elements exists before attempting to manipulate them (lines 35-37)
      - Manages state with localStorage for dark mode (line 5) and uses flags to prevent multiple loads in gallery (line 169)

### Asynchronous Operations
[script.js](script.js)

1. **Use of timers**
   - Interval for slideshow on lines 59 and 77
3. **Successful implementation of an AJAX call or Fetch**
   - Fetching weather data with API key on lines 232-248
5. **Data from the asynchronous call is displayed on the webpage**
   - Weather data is displayed on the webpage when the user inputs a city name and either clicks the button or "enter" key (lines 251-279)
7. **Error handling is implemented (for failed API calls, etc.)**
   - Error handling for weather functionality (lines 235- 248)
