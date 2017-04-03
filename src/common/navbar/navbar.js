import navbarTemplate from './navbar.html';

class NavbarController {
  constructor() {
    this.brand = 'ABC';
  }
}

const navbarComponent = {
  template: navbarTemplate,
  controller: NavbarController
};

export default navbarComponent;
