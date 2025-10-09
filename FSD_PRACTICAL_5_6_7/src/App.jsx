import { useState } from 'react'
import './App.css'
import Practical3 from './components/Practical3'
import Greet from './components/greetings'
import Practical4 from './components/Practical4'
import Practical5 from './components/Practical5'
import Practical6 from './components/Practical6'
import Practical7 from './components/Practical7'
import StudentInfo from './components/StudentInfo'

function App() {
  const [currentPractical, setCurrentPractical] = useState('home')

  const renderContent = () => {
    switch(currentPractical) {
      case 'practical3':
        return <Practical3 />
      case 'practical4':
        return <Practical4 />
      case 'practical5':
        return <Practical5 />
      case 'practical6':
        return <Practical6 />
      case 'practical7':
        return <Practical7 />
      default:
        return (
          <div className="home-container">
            <StudentInfo />
            <div className="welcome-section">
              <h1>🎓 Full Stack Development Practicals</h1>
              <p className="subtitle">Interactive React Components by Dhruvil Patel (23cs061)</p>
              
              <div className="practicals-grid">
                <div className="practical-card" onClick={() => setCurrentPractical('practical3')}>
                  <div className="practical-number">03</div>
                  <h3>Live Clock</h3>
                  <p>Real-time date and time display with React hooks</p>
                  <span className="tech-tag">useState • useEffect</span>
                </div>
                
                <div className="practical-card" onClick={() => setCurrentPractical('practical4')}>
                  <div className="practical-number">04</div>
                  <h3>Counter & Forms</h3>
                  <p>Interactive counter with form input handling</p>
                  <span className="tech-tag">State Management</span>
                </div>
                
                <div className="practical-card" onClick={() => setCurrentPractical('practical5')}>
                  <div className="practical-number">05</div>
                  <h3>Advanced Calculator</h3>
                  <p>Full-featured calculator with keyboard support</p>
                  <span className="tech-tag">Complex Logic</span>
                </div>
                
                <div className="practical-card" onClick={() => setCurrentPractical('practical6')}>
                  <div className="practical-number">06</div>
                  <h3>To-Do List</h3>
                  <p>Task management with add, complete, and delete features</p>
                  <span className="tech-tag">CRUD Operations</span>
                </div>
                
                <div className="practical-card" onClick={() => setCurrentPractical('practical7')}>
                  <div className="practical-number">07</div>
                  <h3>Responsive Navigation</h3>
                  <p>Dynamic sidebar with smooth animations</p>
                  <span className="tech-tag">Responsive Design</span>
                </div>
              </div>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="app">
      {currentPractical !== 'home' && (
        <button 
          className="back-button"
          onClick={() => setCurrentPractical('home')}
        >
          ← Back to Home
        </button>
      )}
      {renderContent()}
    </div>
  )
}

// class App extends Component{
//   render(){
//     return(
//       <div>
//         <Greet name="CSE" institute="CSPIT"/>
//         <Greet name="IT" institute="DEPSTAR"/>
//       </div>
//     )
//   }
// }

export default App
