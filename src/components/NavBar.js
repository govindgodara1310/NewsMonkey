import React from 'react';

const NavBar = ({ setCategory }) => {
  const handleCategoryChange = (category) => {
    setCategory(category);
  };

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" onClick={() => handleCategoryChange('general')}>
            NewsMonkey
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link" href="#" onClick={() => handleCategoryChange('general')}>Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#" onClick={() => handleCategoryChange('business')}>Business</a></li>
              <li className="nav-item"><a className="nav-link" href="#" onClick={() => handleCategoryChange('entertainment')}>Entertainment</a></li>
              <li className="nav-item"><a className="nav-link" href="#" onClick={() => handleCategoryChange('health')}>Health</a></li>
              <li className="nav-item"><a className="nav-link" href="#" onClick={() => handleCategoryChange('science')}>Science</a></li>
              <li className="nav-item"><a className="nav-link" href="#" onClick={() => handleCategoryChange('sports')}>Sports</a></li>
              <li className="nav-item"><a className="nav-link" href="#" onClick={() => handleCategoryChange('technology')}>Technology</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
