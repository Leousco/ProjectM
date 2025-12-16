<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simplified Sidebar Navigation</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <style>
    :root {
      --navbar-dark-primary: #18283a;
      --navbar-dark-secondary: #2c3e50;
      --navbar-light-primary: #f5f6fa;
      --navbar-light-secondary: #b2bec3;
      --navbar-width: 240px;
      --navbar-width-min: 80px;
      --background: #f0f0f0;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      background: var(--background);
      min-height: 100vh;
      padding-left: calc(1vw + var(--navbar-width-min) + 20px);
    }

    /* Expanded state - when nav-toggle is checked */
    #nav-toggle:checked ~ #nav-header {
      width: var(--navbar-width);
    }

    #nav-toggle:checked ~ #nav-content {
      width: var(--navbar-width);
    }

    #nav-toggle:checked ~ #nav-header #nav-title {
      opacity: 1;
      pointer-events: auto;
    }

    #nav-toggle:checked ~ #nav-header label[for="nav-toggle"] {
      left: auto;
      right: 0;
      transform: translate(0);
    }

    #nav-toggle:checked ~ #nav-header #nav-toggle-burger {
      background: var(--navbar-light-primary);
    }

    #nav-toggle:checked ~ #nav-header #nav-toggle-burger::before,
    #nav-toggle:checked ~ #nav-header #nav-toggle-burger::after {
      width: 16px;
      background: var(--navbar-dark-primary);
      transform: translate(0, 0) rotate(0deg);
    }

    #nav-toggle:checked ~ #nav-content .nav-button span {
      opacity: 1;
    }

    #nav-bar {
      position: fixed;
      left: 1vw;
      top: 50%;
      transform: translateY(-50%);
      height: auto;
      max-height: 90vh;
      background: var(--navbar-dark-primary);
      border-radius: 16px;
      display: flex;
      flex-direction: column;
      color: var(--navbar-light-primary);
      overflow: hidden;
      user-select: none;
      z-index: 1000;
    }

    #nav-bar hr {
      margin: 0;
      position: relative;
      left: 16px;
      width: calc(100% - 32px);
      border: none;
      border-top: solid 1px var(--navbar-dark-secondary);
    }

    #nav-bar a {
      color: inherit;
      text-decoration: inherit;
    }

    #nav-bar input[type="checkbox"] {
      display: none;
    }

    #nav-header {
      position: relative;
      width: calc(var(--navbar-width-min) - 16px);
      min-height: 80px;
      background: var(--navbar-dark-primary);
      border-radius: 16px;
      z-index: 2;
      display: flex;
      align-items: center;
      transition: width 0.2s;
      padding-left: 16px;
    }

    #nav-header hr {
      position: absolute;
      bottom: 0;
    }

    #nav-title {
      font-size: 1.5rem;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s;
      white-space: nowrap;
    }

    label[for="nav-toggle"] {
      position: absolute;
      left: calc(50% - 8px);
      transform: translate(-50%);
      width: 3rem;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: left 0.2s, right 0.2s, transform 0.2s;
    }

    #nav-toggle-burger {
      position: relative;
      width: 16px;
      height: 2px;
      background: var(--navbar-dark-primary);
      border-radius: 99px;
      transition: background 0.2s;
    }

    #nav-toggle-burger::before,
    #nav-toggle-burger::after {
      content: '';
      position: absolute;
      top: -6px;
      width: 10px;
      height: 2px;
      background: var(--navbar-light-primary);
      border-radius: 99px;
      transform: translate(2px, 8px) rotate(30deg);
      transition: 0.2s;
    }

    #nav-toggle-burger::after {
      top: 6px;
      transform: translate(2px, -8px) rotate(-30deg);
    }

    #nav-content {
      margin: -16px 0;
      padding: 16px 0;
      position: relative;
      flex: 1;
      width: var(--navbar-width-min);
      background: var(--navbar-dark-primary);
      box-shadow: 0 0 0 16px var(--navbar-dark-primary);
      direction: rtl;
      overflow-x: hidden;
      overflow-y: auto;
      transition: width 0.2s;
    }

    #nav-content::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }

    #nav-content::-webkit-scrollbar-thumb {
      border-radius: 99px;
      background-color: #D62929;
    }

    #nav-content::-webkit-scrollbar-button {
      height: 16px;
    }

    #nav-content-highlight {
      position: absolute;
      left: 16px;
      top: 16px;
      width: calc(100% - 16px);
      height: 54px;
      background: var(--background);
      background-attachment: fixed;
      border-radius: 16px 0 0 16px;
      transition: top 0.2s;
      pointer-events: none;
      opacity: 0;
    }

    #nav-content-highlight::before,
    #nav-content-highlight::after {
      content: '';
      position: absolute;
      right: 0;
      bottom: 100%;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      box-shadow: 16px 16px var(--background);
    }

    #nav-content-highlight::after {
      top: 100%;
      box-shadow: 16px -16px var(--background);
    }

    .nav-button {
      position: relative;
      margin-left: 16px;
      height: 54px;
      display: flex;
      align-items: center;
      color: var(--navbar-light-secondary);
      direction: ltr;
      cursor: pointer;
      z-index: 1;
      transition: color 0.2s;
    }

    .nav-button:hover {
      color: var(--navbar-light-primary);
    }

    .nav-button:hover ~ #nav-content-highlight {
      opacity: 1;
    }

    /* Position highlight based on which button is hovered - updated for 5 buttons only */
    .nav-button:nth-child(1):hover ~ #nav-content-highlight {
      top: 16px;
      opacity: 1;
    }

    .nav-button:nth-child(2):hover ~ #nav-content-highlight {
      top: 70px;
      opacity: 1;
    }

    .nav-button:nth-child(3):hover ~ #nav-content-highlight {
      top: 124px;
      opacity: 1;
    }

    .nav-button:nth-child(4):hover ~ #nav-content-highlight {
      top: 178px;
      opacity: 1;
    }

    .nav-button:nth-child(5):hover ~ #nav-content-highlight {
      top: 232px;
      opacity: 1;
    }

    .nav-button span {
      opacity: 0;
      transition: opacity 0.3s;
      white-space: nowrap;
    }

    .nav-button .fas {
      min-width: 3rem;
      text-align: center;
      transition: min-width 0.2s;
    }

    #nav-bar .fas {
      min-width: 3rem;
      text-align: center;
    }

    /* Demo content */
    .content {
      padding: 40px;
      max-width: 800px;
    }

    .content h1 {
      margin-bottom: 20px;
      color: #2c3e50;
    }

    .content p {
      line-height: 1.6;
      color: #555;
      margin-bottom: 15px;
    }
  </style>
</head>
<body>
  <div id="nav-bar">
    <input type="checkbox" id="nav-toggle">

    <div id="nav-header">
      <a href="#" target="_blank" id="nav-title">
        Menu
      </a>
      <label for="nav-toggle">
        <span id="nav-toggle-burger"></span>
      </label>
      <hr>
    </div>

    <div id="nav-content">
      <div class="nav-button"><i class="fas fa-palette"></i><span>Your Work</span></div>
      <div class="nav-button"><i class="fas fa-images"></i><span>Assets</span></div>
      <div class="nav-button"><i class="fas fa-thumbtack"></i><span>Pinned Items</span></div>
      <div class="nav-button"><i class="fas fa-chart-line"></i><span>Trending</span></div>
      <div class="nav-button"><i class="fas fa-fire"></i><span>Challenges</span></div>
      <div id="nav-content-highlight"></div>
    </div>

  </div>

  <div class="content">
    <h1>Simplified Sidebar Navigation</h1>
    <p>Click the hamburger menu to expand the sidebar. The sidebar starts closed by default.</p>
    <p>Hover over the menu items when expanded to see the smooth highlight effect.</p>
    <p>This version has a cleaner structure with 5 navigation items and no footer.</p>
  </div>
</body>
</html>