import { SearchInput } from "./SearchInput";
import imagen from "./img/image-jobpage.jpg";

export const SearchJobPage = () => {
  return (
    <div className="contenedor">
      <h1 className="titulo">We help people get jobs.</h1>
      <SearchInput />
      <div className="contenedor-our-mission">
        <img className="imagen" alt="imagen" src={imagen}></img>
        <div className="img-article">
          <p className="mission-text">Our Mission</p>
          <h2 className="title-jobpage">Come help Eazy Hire work</h2>
          <p className="main-article">
            We're looking to grow our teams with people who share our energy and
            enthusiasm for creating the best experience for job seekers and
            employers. Our mission is to create products that provide
            opportunities for all job seekers. To do this, we hire Indeedians of
            all backgrounds to mirror the job seekers we support. That's why
            Inclusion and Belonging are core values inside Indeed.
          </p>
        </div>
      </div>
    </div>
  );
};
