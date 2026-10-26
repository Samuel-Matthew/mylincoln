// WHAT IS REACT ?
//   React is a JavaScript library used to build interactive user interfaces.It was originally created by Facebook, now Meta, and is widely used for modern web applications.
// React allows developers to create websites using small, reusable components.

// A component is a reusable part of a React user interface. A component is commonly created using a JavaScript function.
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Staff from './components/Staff.jsx'
import waggy from './assets/waggy.jpg'
import jahno from './assets/jahno.jpg'


function App() {
  return (
   <>
      <Header />
      <div>
        <h2>Hello, Welcome to my website</h2>
      </div>
      <div className="card">
        <Staff img={waggy} name="Mr Waggy" age={70} course="Web development" />

        <Staff img={jahno} name="Mr Jahno"  age={84} course="Bootstrap"/>

        <Staff  name="Mr Samuel"  age={69} course="Node js"/>
        
      </div>

      <Footer />
   </>)
}

export default App