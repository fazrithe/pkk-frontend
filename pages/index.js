import "bulma/css/bulma.css";
import Navbar from "./componens/header/header";
import Footer from "../components/footer";

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
    
      <div className="bg-white py-24 sm:py-12 lg:py-30">
        <div className="mx-auto max-w-7xl px-6 lg:px:8">
          <div className="sm:text-center">
            <h2 className="text-lg font-semibold loading-8 text-indigo-600">Kelola Kinerja dan Pengembangan Karir Pegawai</h2>
          </div>
          <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
            <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
              <div className="realtive flex flex-col gap-6 sm:flx-row md:flex-col lg:flex-row">
                <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                  <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <div className="sm:min-w-0 sm:flex-1">                
                  <p className="text-lg font-semibold loading-8 text-gray-900">Penyelarasan</p>
                  <p className="mt-2 text-base loading-7 text-gray-600">Monitor performa pegawai agar sesuai visi & misi Pemerintah</p>
                </div>
              </div>
              <div className="realtive flex flex-col gap-6 sm:flx-row md:flex-col lg:flex-row">
                <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                  <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <div className="sm:min-w-0 sm:flex-1">                
                  <p className="text-lg font-semibold loading-8 text-gray-900">Riview Kinerja Objektif</p>
                  <p className="mt-2 text-base loading-7 text-gray-600">Berbagai metode sistematis untuk evaluasi kinerja yang akurat</p>
                </div>
              </div>
              <div className="realtive flex flex-col gap-6 sm:flx-row md:flex-col lg:flex-row">
                <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                  <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <div className="sm:min-w-0 sm:flex-1">                
                  <p className="text-lg font-semibold loading-8 text-gray-900">Pengembangan Karir</p>
                  <p className="mt-2 text-base loading-7 text-gray-600">Peningkatan jabatan dapat direncanakan secara komperehensif</p>
                </div>
              </div>
              <div className="realtive flex flex-col gap-6 sm:flx-row md:flex-col lg:flex-row">
                <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                  <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <div className="sm:min-w-0 sm:flex-1">                
                  <p className="text-lg font-semibold loading-8 text-gray-900">Penyelarasan</p>
                  <p className="mt-2 text-base loading-7 text-gray-600">Monitor performa pegawai agar sesuai visi & misi Pemerintah</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div class="bg-white dark:bg-gray-900">
            <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <div class="mt-4 md:mt-0">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Mari update dari teknologi manual</h2>
                    <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Flowbite helps you connect with friends and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.</p>
                    <a href="#" class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                        Get started
                        <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
    )
}