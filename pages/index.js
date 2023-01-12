import "bulma/css/bulma.css";
import Navbar from "./componens/header/header";

export default function Home({ allPostsData }) {
  return (
    <div className="container is-fullhd">
    <Navbar/>
    <section className="hero is-medium is-link">
      <div className="hero-body">
        <p className="title">
          PKK Application
        </p>
        <p className="subtitle">
          Penilaian Kinerja Kepegawaian
        </p>
      </div>
    </section>
       </div>
    )
}