<div class="dropdown-menu">
              <div class="dropdown-item">
                  <svg class="item-icon" viewBox="0 0 24 24" width="18" height="18">
                      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="currentColor"/>
                  </svg>
                  <span>Profile</span>
              </div>
              
              <div class="dropdown-item has-submenu">
                  <svg class="item-icon" viewBox="0 0 24 24" width="18" height="18">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" fill="currentColor"/>
                  </svg>
                  <span>Products</span>
                  <svg class="submenu-icon" viewBox="0 0 24 24" width="16" height="16">
                      <path d="M10 17l5-5-5-5v10z" fill="currentColor"/>
                  </svg>
                  
                  <div class="submenu">
                      <div class="dropdown-item">New Arrivals</div>
                      <div class="dropdown-item">Featured</div>
                      <div class="dropdown-item">Categories</div>
                  </div>
              </div>
              
              <div class="dropdown-divider"></div>
              
              <div class="dropdown-item">
                  <svg class="item-icon" viewBox="0 0 24 24" width="18" height="18">
                      <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" fill="currentColor"/>
                  </svg>
                  <span>Notifications</span>
                  <span class="badge">3</span>
              </div>
              
              <div class="dropdown-item">
                  <svg class="item-icon" viewBox="0 0 24 24" width="18" height="18">
                      <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" fill="currentColor"/>
                  </svg>
                  <span>Settings</span>
              </div>
          </div>
        </div>
        </li>
      </ul>
      <label for="menu-btn" class="btn menu-btn"><i class="fas fa-bars"></i></label>
    </div>


    
.dropdown-wrapper {
    position: relative;
}

.dropdown-trigger {
    display: flex;
    align-items: center;        /* vertical centering */
    justify-content: center;    /* horizontal centering */
    gap: 8px;
    padding: 10px 15px;         /* adjust width if needed */
    height: 50%;               /* match parent <li> height */
    background: var(--gradient);
    border: 1px solid var(--border);
    border-radius: var(--border-radius);
    color: var(--text);
    font-size: 1rem;
    cursor: pointer;
    transition: all var(--transition-medium);
    backdrop-filter: var(--glass);
    -webkit-backdrop-filter: var(--glass);
}


.dropdown-trigger:hover {
    border-color: var(--primary);
    box-shadow: var(--glow);
}

.dropdown-menu {
    position: absolute;
    top: calc(100% + 8px);
    right: 0;           /* align right edge of menu to right edge of button */
    min-width: var(--menu-min-width);
    width: auto;
    background: var(--gradient);
    border: 1px solid var(--border);
    border-radius: var(--border-radius);
    padding: 4px 0;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all var(--transition-medium);
    backdrop-filter: var(--glass);
    -webkit-backdrop-filter: var(--glass);
    box-shadow: 0 4px 20px var(--shadow);
    display: flex;
    flex-direction: column;
    gap: 0;
}

.dropdown-wrapper.active .dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.dropdown-item {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 0px 15px;
    color: var(--text);
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: all var(--transition-fast);
    position: relative;
    white-space: nowrap;
}

.dropdown-item:hover {
    background: var(--surface-hover);
    color: var(--primary);
}

.dropdown-divider {
    height: 1px;
    background: var(--border);
    margin: 8px 0;
}

.badge {
    background: var(--primary);
    color: white;
    width: 18px;      
    height: 18px;
    font-size: 0.75rem;
    line-height: 18px; 
    border-radius: 50%; 
    text-align: center;
    margin-left: auto;
    flex-shrink: 0; 
}


/* Submenu */
.has-submenu {
    padding-right: 36px;
}

.submenu-icon {
    position: absolute;
    right: 12px;
    transition: transform var(--transition-medium);
}

.has-submenu:hover .submenu-icon {
    transform: rotate(90deg);
}

.submenu {
    position: absolute;
    right: 100%;       
    top: 0;         
    min-width: var(--menu-min-width);
    background: var(--gradient);
    border: 1px solid var(--border);
    border-radius: var(--border-radius);
    padding: 8px;
    opacity: 0;
    visibility: hidden;
    transform: translateX(10px); 
    transition: all var(--transition-medium);
    backdrop-filter: var(--glass);
    -webkit-backdrop-filter: var(--glass);
    box-shadow: 0 4px 20px var(--shadow);
}


.has-submenu:hover .submenu {
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
}