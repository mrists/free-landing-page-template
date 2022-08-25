export default class Navbar {
  constructor(){}

  _initDefaults() {
    this.body = document.body;
    this.hamburgerBtn = document.querySelector('.header-navbar__hamburger');
    this.navbarList = document.querySelector('.header-navbar__list');
    this.isVisible = false;
  }
  
  _toggleActive() {
    !this.isVisible ? this.body.classList.toggle('active') : this.body.removeAttribute('class');
    
    this.hamburgerBtn.classList.toggle('active');
    this.navbarList.classList.toggle('active');
  
    this.isVisible = !this.isVisible;
  }

  _goToNthSection(e) {
    if (e.target.matches('.header-navbar__link')) { 
      e.preventDefault();
      this.blockID = e.target.getAttribute('href');
      this.scrollTarget = document.querySelector(this.blockID);
      
      this.scrollTarget.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      if(this.isVisible) {
        this._toggleActive();
      }
    }
  }

  _initListeners() {
    this.hamburgerBtn.addEventListener('click', this._toggleActive.bind(this));
    this.navbarList.addEventListener('click', this._goToNthSection.bind(this));
  }

  init() {
    this._initDefaults();
    this._initListeners();
  };
}




