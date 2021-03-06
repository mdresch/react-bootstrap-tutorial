import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <ul class="navbar-nav navbar-nav-hover align-items-lg-center" />
      <li class="nav-item dropdown">
        <a href="#" class="nav-link" data-toggle="dropdown">
          <span class="nav-link-inner-text">Pages</span>
          <span class="fas fa-angle-down nav-link-arrow ml-2" />
        </a>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href="@@path/html/pages/about.html">
              About
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="@@path/html/pages/pricing.html">
              Pricing
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="@@path/html/pages/profile.html">
              Profile
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="@@path/html/pages/services.html">
              Services
            </a>
          </li>
          <li class="dropdown-submenu">
            <a
              href="#"
              class="dropdown-toggle dropdown-item d-flex justify-content-between align-items-center"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Blog <span class="fas fa-angle-right nav-link-arrow" />
            </a>
            <ul class="dropdown-menu">
              <li>
                <a href="@@path/html/pages/blog.html" class="dropdown-item">
                  Blog
                </a>
                <a
                  href="@@path/html/pages/blog-post.html"
                  class="dropdown-item"
                >
                  Blog post
                </a>
              </li>
            </ul>
          </li>
          <li class="dropdown-submenu">
            <a
              href="#"
              class="dropdown-toggle dropdown-item d-flex justify-content-between align-items-center"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Specials
              <span class="fas fa-angle-right nav-link-arrow" />
            </a>
            <ul class="dropdown-menu">
              <li>
                <a href="@@path/html/pages/sign-in.html" class="dropdown-item">
                  Sign in
                </a>
                <a href="@@path/html/pages/sign-up.html" class="dropdown-item">
                  Sign up
                </a>
                <a
                  href="@@path/html/pages/coming-soon.html"
                  class="dropdown-item"
                >
                  Coming Soon
                </a>
                <a
                  href="@@path/html/pages/maintenance.html"
                  class="dropdown-item"
                >
                  Maintenance
                </a>
                <a href="@@path/html/pages/404.html" class="dropdown-item">
                  404 Not Found
                </a>
                <a href="@@path/html/pages/500.html" class="dropdown-item">
                  500 Server Error
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a class="dropdown-item" href="@@path/html/pages/contact.html">
              Contact
            </a>
          </li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a href="#" class="nav-link" data-toggle="dropdown">
          <span class="nav-link-inner-text">Sections</span>
          <span class="fas fa-angle-down nav-link-arrow ml-2" />
        </a>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href="@@path/html/sections/about.html">
              About
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="@@path/html/sections/blog.html">
              Blog
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="@@path/html/sections/clients.html">
              Clients
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="@@path/html/sections/contact.html">
              Contact
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="@@path/html/sections/features.html">
              Features
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="@@path/html/sections/pricing.html">
              Pricing
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="@@path/html/sections/team.html">
              Team
            </a>
          </li>
          <li>
            <a
              class="dropdown-item"
              href="@@path/html/sections/testimonials.html"
            >
              Testimonials
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="@@path/html/sections/navbars.html">
              Navbars
            </a>
          </li>
        </ul>
      </li>
      <li class="nav-item dropdown mega-dropdown">
        <a href="#" class="nav-link" data-toggle="dropdown">
          <span class="nav-link-inner-text">Components</span>
          <span class="fas fa-angle-down nav-link-arrow ml-2" />
        </a>
        <div class="dropdown-menu">
          <div class="row">
            <div class="col-lg-6 inside-bg d-none d-lg-block">
              <div class="justify-content-center bg-primary text-white">
                <div class="px-6 pb-5 pt-3">
                  <img
                    src="@@path/assets/img/megamenu-image.jpg"
                    alt="Pixel Components"
                  />
                </div>
                <div class="z-2 pb-4 text-center">
                  <a
                    href="@@path/html/components/all.html"
                    class="btn btn-primary mb-2 mb-sm-0 mr-3 text-secondary"
                  >
                    <span class="mr-1">
                      <span class="fas fa-th-large" />
                    </span>
                    All components
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    class="btn btn-primary mb-2 mb-sm-0"
                  >
                    <span class="mr-1">
                      <span class="fas fa-book" />
                    </span>
                    Docs v1.0
                  </a>
                </div>
              </div>
            </div>
            <div class="col pl-0">
              <ul class="list-style-none">
                <li>
                  <a
                    class="dropdown-item"
                    href="@@path/html/components/accordions.html"
                  >
                    Accordions
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="@@path/html/components/alerts.html"
                  >
                    Alerts
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="@@path/html/components/badges.html"
                  >
                    Badges
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="@@path/html/components/bootstrap-carousels.html"
                  >
                    Bootstrap Carousels
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="@@path/html/components/breadcrumbs.html"
                  >
                    Breadcrumbs
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="@@path/html/components/buttons.html"
                  >
                    Buttons
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="@@path/html/components/counters.html"
                  >
                    Counters
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="@@path/html/components/cards.html"
                  >
                    Cards
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="@@path/html/components/e-commerce.html"
                  >
                    E-commerce
                  </a>
                </li>
              </ul>
            </div>
            <div class="col pl-0">
              <ul class="list-style-none">
                <li>
                  <a
                    class="dropdown-item"
                    href="@@path/html/components/forms.html"
                  >
                    Forms
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="@@path/html/components/icon-boxes.html"
                  >
                    Icon Boxes
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="@@path/html/components/modals.html"
                  >
                    Modals
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="@@path/html/components/navs.html"
                  >
                    Navs
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="@@path/html/components/owl-carousels.html"
                  >
                    Owl Carousels
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="@@path/html/components/pagination.html"
                  >
                    Pagination
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="@@path/html/components/popovers.html"
                  >
                    Popovers
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="@@path/html/components/progress-bars.html"
                  >
                    Progress Bars
                  </a>
                </li>
              </ul>
            </div>
            <div class="col pl-0">
              <ul class="list-style-none">
                <li>
                  <a
                    class="dropdown-item"
                    href="@@path/html/components/steps.html"
                  >
                    Steps
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="@@path/html/components/tables.html"
                  >
                    Tables
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="@@path/html/components/tabs.html"
                  >
                    Tabs
                  </a>{' '}
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="@@path/html/components/toasts.html"
                  >
                    Toasts
                  </a>{' '}
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="@@path/html/components/timelines.html"
                  >
                    Timelines
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="@@path/html/components/tooltips.html"
                  >
                    Tooltips
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="@@path/html/components/typography.html"
                  >
                    Typography
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="@@path/html/components/widgets.html"
                  >
                    Widgets
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>

      <li class="nav-item dropdown">
        <a href="#" class="nav-link" data-toggle="dropdown">
          <span class="nav-link-inner-text">Support</span>
          <span class="fas fa-angle-down nav-link-arrow ml-2" />
        </a>
        <div class="dropdown-menu dropdown-menu-lg">
          <div class="col-auto px-0" data-dropdown-content>
            <div class="list-group list-group-flush">
              <a
                href="#"
                target="_blank"
                class="list-group-item list-group-item-action d-flex align-items-center p-0 py-3 px-lg-4"
              >
                <span class="icon icon-sm icon-secondary">
                  <span class="fas fa-file-alt" />
                </span>
                <div class="ml-4">
                  <span class="text-dark d-block">
                    Documentation
                    <span class="badge badge-sm badge-secondary ml-2">
                      v1.0
                    </span>
                  </span>
                  <span class="small">Examples and guides</span>
                </div>
              </a>
              <a
                href="https://themesberg.com/contact"
                target="_blank"
                class="list-group-item list-group-item-action d-flex align-items-center p-0 py-3 px-lg-4"
              >
                <span class="icon icon-sm icon-secondary">
                  <span class="fas fa-microphone-alt" />
                </span>
                <div class="ml-4">
                  <span class="text-dark d-block">Support</span>
                  <span class="small">Looking for answers? Ask us!</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </li>
      <div class="d-flex align-items-center">
        <a
          href="https://themesberg.com/product/ui-kits/neumorphism-ui-pro/"
          target="_blank"
          class="btn btn-primary text-secondary mr-3"
        >
          <i class="fas fa-shopping-cart mr-2" /> Buy now
        </a>
        <a
          href="https://themesberg.com/docs/neumorphism-ui/getting-started/quick-start/"
          target="_blank"
          class="btn btn-primary d-none d-md-inline-block"
        >
          <i class="fas fa-book mr-2" /> Docs v1.0
        </a>
        <button
          class="navbar-toggler ml-2"
          type="button"
          data-toggle="collapse"
          data-target="#navbar_global"
          aria-controls="navbar_global"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
      </div>
    </>
  );
}

export default Navbar;
