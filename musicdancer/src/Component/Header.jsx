import React from 'react';



const Header=()=>{
  return(
    <div className=''>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar navbar-dark bg-dark ">
  <a className="navbar-brand " href="#">MusicDancer</a>
  <button className="navbar-toggler fondo" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Album</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Artista
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="https://www.youtube.com/watch?v=JPerYZhsWf8&list=PLMLXEXLWe5QrZ9ccGxL5Akj0xJowJn5eD&index=20&t=0s">JAMproyect</a>
          <a className="dropdown-item" href="https://www.youtube.com/watch?v=luVCFyytVTE">kike pavon</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="https://www.youtube.com/watch?v=kWvAdkJizbQ">larc-en-ciel</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">redes</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0 fondo" type="submit">Buscar </button>
    </form>
  </div>
</nav>
    </div>
  )
}
export default Header;