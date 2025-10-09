import { useState, useEffect } from "react";
import StudentInfo from "./StudentInfo";

export default function Practical3(){
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(()=> {
            setDateTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return(
        <div style={styles.pageContainer}>
            <StudentInfo />
            <div style={styles.practicalTitle}>
                <h1>Practical 3 - Live Clock</h1>
                <p>Real-time date and time display using React hooks</p>
            </div>
            <div style={styles.container}>
                <h1>🏫 Welcome to CHARUSAT!</h1>
                <div style={styles.clockContainer}>
                    <h2>📅 Current Date and Time</h2>
                    <div style={styles.timeDisplay}>
                        <span style={styles.time}>{dateTime.toLocaleTimeString()}</span>
                        <span style={styles.date}>{dateTime.toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                        })}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

const styles = {
  pageContainer: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  practicalTitle: {
    textAlign: "center",
    padding: "30px 20px 20px 20px",
    color: "white",
  },
  container: {
    textAlign: "center",
    padding: "40px 20px",
    maxWidth: "600px",
    margin: "0 auto",
  },
  clockContainer: {
    background: "rgba(255, 255, 255, 0.95)",
    padding: "40px 30px",
    borderRadius: "25px",
    boxShadow: "0 15px 35px rgba(79, 172, 254, 0.3)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  },
  timeDisplay: {
    marginTop: "30px",
  },
  time: {
    display: "block",
    fontSize: "3rem",
    fontWeight: "700",
    color: "#2c3e50",
    marginBottom: "15px",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  date: {
    display: "block",
    fontSize: "1.3rem",
    color: "#34495e",
    fontWeight: "500",
  },
};