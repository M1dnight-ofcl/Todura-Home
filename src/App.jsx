import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  const onClickAction = () => {
    console.log('clicked "get started"');
  }
  return (
    <div className="main">
      <header id="header" className="header">
        <div className="shade"></div>
        <div className="textWrapper">
          <h1>Todura</h1>
          <p>The Future of Todo Apps</p>
          <button onClick={() => onClickAction()} className="button">Get Started</button>
        </div>
      </header>
      <section className="pageSection" id="section02">
        <span className="ultitle">Key Features</span>
        <div className="featureGrid">
          <div className="feature">
            <h1>Aesthetic Excellence</h1>
            <p>Todura boasts a visually pleasing and intuitive interface, ensuring that every interaction is a pleasure.</p>
          </div>
          <div className="feature">
            <h1>Open Source Prowess</h1>
            <p>Built on the foundations of open-source technology, Todura stands as a testament to collaborative innovation. Its codebase, crafted with JavaScript, Electron, React, and Vite, is a beacon of transparency and community-driven development.</p>
          </div>
          <div className="feature">
            <h1>Unparalleled Customization</h1>
            <p> Tailor Todura to your unique workflow. With a myriad of customization options, you can mold the app to fit your specific needs and preferences.</p>
          </div>
          <div className="feature">
            <h1>Unparalleled Customization</h1>
            <p> Tailor Todura to your unique workflow. With a myriad of customization options, you can mold the app to fit your specific needs and preferences.</p>
          </div>
        </div>
      </section>

      <section className="pageSection" id="section01">
        <div className='textWrapperLeft'>
          <h1>Purely Function</h1>
          <p>
            Todura is an exquisitely designed productivity application that seamlessly combines elegance with functionality.
            Its stunning user interface provides a delightful experience, making task management a pleasure rather than a chore.
            <br /><br />
            Embrace the future of productivity with Todura. Experience elegance, openness, and efficiency like never before. Download
            now and join the community shaping the future of task management.
          </p>
        </div>
        <div className="uiExample"></div>
      </section>

    </div>
  )
}

export default App;