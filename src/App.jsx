import './App.css'
import Navbar from './components/Navbar'
import CardProyects from './components/CardProyects'
import Footer from './components/Footer'

const url = '/assets/'

function App() {

  return (
    <div className="h-auto w-auto flex flex-col items-center overflow-y-auto overflow-x-hidden">
      <Navbar imgLogo={url + 'CralpCode.png'}/>
      <h1 className="self-start text-slate-700 text-3xl font-bold underline mb-4 ">
        Proyectos 
      </h1>
      <h2 className="self-start text-slate-700 text-3xl font-bold underline mb-4 ">
        freecodecamp(Curso : Web responsive desing) 
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-5 justify-items-center w-full h-full'>
        <CardProyects ulrImg={url + 'PaginaTributo.png'} page={'https://codepen.io/CRALPCODE/full/WNrmwJV'}/>
        <CardProyects ulrImg={url + 'PaginaAterrizaje.png'} page={'https://codepen.io/CRALPCODE/full/wvMQXqa'}/>
        <CardProyects ulrImg={url + 'Formulario.png'} page={'https://codepen.io/CRALPCODE/full/bGExMOV'}/>
        <CardProyects ulrImg={url + 'PaginaTecnica.png'} page={'https://codepen.io/CRALPCODE/full/dyGrMYR'}/>
        <CardProyects ulrImg={url + 'Portafolio.png'} page={'https://codepen.io/CRALPCODE/full/RwrXLQa'}/>
      </div>
      <h2 className="self-start text-slate-700 text-3xl font-bold underline mb-4 ">
        Launch X (Curso : Frontend) 
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-5 justify-items-center w-full h-full'>
        <CardProyects ulrImg={url + 'Diseno.png'} page={'https://github.com/CralpCode/Practica-1-de-Intro-a-Frontend'}/>
        <CardProyects ulrImg={url + 'Taconautapage.png'} page={'https://github.com/CralpCode/CralpCode-Practica-2-de-Intro-a-Frontend'}/>
        <CardProyects ulrImg={url + 'Vacunapage.png'} page={'https://github.com/CralpCode/Practica-3-de-Intro-a-Frontend'}/>
        <CardProyects ulrImg={url + 'Pokedex.png'} page='https://github.com/CralpCode/Practica-4-de-Intro-a-Frontend'/>
      </div>
      <h2 className="self-start text-slate-700 text-3xl font-bold underline mb-4 ">
        Launch X (Curso : Backend) 
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-5 justify-items-center w-full h-full'>
        <CardProyects ulrImg={url + 'Calculadora.png'} page={'https://github.com/CralpCode/Tarea-1-Calculadora-JS'}/>
        <CardProyects ulrImg={url + 'PokedexReact.png'} page={'https://github.com/CralpCode/Tarea-2-Pokedex-REACT'}/>
        <CardProyects ulrImg={url + 'ChatSocket.png'} page={'https://github.com/CralpCode/Tarea-3-Chat'}/>
        <CardProyects ulrImg={url + 'apiRest.png'} page={'https://github.com/CralpCode/Tarea-5-API-REST'}/>
        <CardProyects ulrImg={url + 'ChatSocketMongo.png'} page={'https://github.com/CralpCode/Tarea-6-Chat-MongoDB'}/>
      </div>
      <h2 className="self-start text-slate-700 text-3xl font-bold underline mb-4 ">
        Fazt
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-5 justify-items-center w-full h-full'>
        <CardProyects ulrImg={url + 'TareasReact.png'}/>
      </div>
      <h2 className="self-start text-slate-700 text-3xl font-bold underline mb-4 ">
        En Trabajo
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-5 justify-items-center w-full h-full'>
        <CardProyects ulrImg={url}/>
        <CardProyects ulrImg={url}/>    
      </div>
      <Footer/>
    </div>
  )
}

export default App
