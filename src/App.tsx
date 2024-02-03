import bg_img from './assets/img/hero_img.jpg';
import logo from './assets/img/logo.svg';
import { TranslationBox } from './components/Ui/TranslationBox';

function App() {
  return (
    <main
      className='bg-slate-950 h-screen bg-no-repeat bg-cover min-w-[320px]'
      style={{
        backgroundImage: `url(${bg_img})`,
      }}
    >
      <picture>
        <img src={logo} alt='logo' className='w-30 md:w-52 mx-auto py-10' />
      </picture>

      <section className='w-[96%] mx-auto'>
        <TranslationBox />
      </section>

      {/* CONTENT */}

      <footer className='pt-10 text-center'>
        <span className='text-slate-400'>
          Developed by Isaias Rodriguez | <a href=''>github.com/meinor25</a>
        </span>
      </footer>
    </main>
  );
}

export default App;
