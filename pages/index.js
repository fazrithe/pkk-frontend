import "bulma/css/bulma.css";
import Navbar from "./componens/header/header";

export default function Home({ allPostsData }) {
  return (
    <>
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
    <section className="container pt-9">
      <div class="grid justify-items-center pb-9">
        <div class="box-border md:box-content w-62">
            <h3 className="title is-4">Kelola Kinerja dan Pengembangan Karir Pegawai Secara Aktual dan Tranparan</h3>
          </div>
      </div>
      <div class="columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">
        <div class="column">
          <div class="content is-small">
            <h1 className="title">Penyelarasan</h1>
            <label className="subtitle">Mentor Kinerja Pegawai Agar Sesuai Kinerja.</label>
          </div>
        </div>
        <div class="column">
          <div class="content is-small">
            <h1 className="title">Riview Kinerja Objektif</h1>
            <label className="subtitle">Berbagai metode sistematis untuk evaluasi kinerja yang akurat.</label>
          </div>
        </div>
        <div class="column">
          <div class="content is-small">
            <h1 className="title">Pegembangan Karir</h1>
            <label className="subtitle">Peningkatan jabatan dapat direncanakan secara komprehensif</label>
          </div>
        </div>
      </div>
    </section>
    </div>
    </>
    )
}