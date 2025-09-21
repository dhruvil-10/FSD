import { useState, useEffect } from "react";

export default function Practical3(){
    const [dateTime, setDateTime] = useState(new Date());
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setInterval(()=> {
            setDateTime(new Date());
        }, 1000);

        // Set loaded state after component mounts
        setTimeout(() => setIsLoaded(true), 100);

        return () => clearInterval(timer);
    }, []);

    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', {
            hour12: true,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    };

    return(
        <div style={styles.container}>
            <div style={styles.backgroundElements}>
                <div style={{...styles.floatingElement, ...styles.element1}}></div>
                <div style={{...styles.floatingElement, ...styles.element2}}></div>
                <div style={{...styles.floatingElement, ...styles.element3}}></div>
            </div>
            
            <div style={{...styles.content, opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(20px)'}}>
                <div style={styles.header}>
                    <div style={styles.logo}>
                        <div style={styles.logoCircle}>
                            <span style={styles.logoText}>C</span>
                        </div>
                    </div>
                    <h1 style={styles.title}>Welcome to CHARUSAT</h1>
                    <p style={styles.subtitle}>Charotar University of Science and Technology</p>
                </div>

                <div style={styles.timeCard}>
                    <div style={styles.timeHeader}>
                        <h2 style={styles.timeTitle}>Current Date & Time</h2>
                        <div style={styles.timezone}>GMT+5:30 (IST)</div>
                    </div>
                    
                    <div style={styles.dateTimeContainer}>
                        <div style={styles.dateSection}>
                            <div style={styles.dateLabel}>Date</div>
                            <div style={styles.dateValue}>{formatDate(dateTime)}</div>
                        </div>
                        
                        <div style={styles.divider}></div>
                        
                        <div style={styles.timeSection}>
                            <div style={styles.timeLabel}>Time</div>
                            <div style={styles.timeValue}>{formatTime(dateTime)}</div>
                        </div>
                    </div>
                    
                    <div style={styles.digitalClock}>
                        <span style={styles.clockText}>{dateTime.toLocaleString()}</span>
                    </div>
                </div>

                <div style={styles.footer}>
                    <p style={styles.footerText}>Real-time clock updates every second</p>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        position: "relative",
        overflow: "hidden"
    },
    backgroundElements: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: "none"
    },
    floatingElement: {
        position: "absolute",
        background: "rgba(255, 255, 255, 0.1)",
        borderRadius: "50%",
        animation: "float 6s ease-in-out infinite"
    },
    element1: {
        width: "80px",
        height: "80px",
        top: "20%",
        left: "10%",
        animationDelay: "0s"
    },
    element2: {
        width: "60px",
        height: "60px",
        top: "70%",
        right: "15%",
        animationDelay: "2s"
    },
    element3: {
        width: "100px",
        height: "100px",
        bottom: "20%",
        left: "20%",
        animationDelay: "4s"
    },
    content: {
        background: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(20px)",
        borderRadius: "24px",
        padding: "40px",
        width: "100%",
        maxWidth: "600px",
        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15), 0 12px 30px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        transition: "all 0.6s ease",
        position: "relative",
        zIndex: 1
    },
    header: {
        marginBottom: "40px"
    },
    logo: {
        marginBottom: "20px",
        display: "flex",
        justifyContent: "center"
    },
    logoCircle: {
        width: "80px",
        height: "80px",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 8px 20px rgba(102, 126, 234, 0.3)"
    },
    logoText: {
        color: "white",
        fontSize: "2rem",
        fontWeight: "700"
    },
    title: {
        fontSize: "2.5rem",
        fontWeight: "700",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        marginBottom: "10px"
    },
    subtitle: {
        color: "#718096",
        fontSize: "1.1rem",
        fontWeight: "400"
    },
    timeCard: {
        background: "#f7fafc",
        borderRadius: "20px",
        padding: "30px",
        marginBottom: "30px",
        border: "1px solid #e2e8f0"
    },
    timeHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "25px",
        flexWrap: "wrap",
        gap: "10px"
    },
    timeTitle: {
        color: "#2d3748",
        fontSize: "1.5rem",
        fontWeight: "600",
        margin: 0
    },
    timezone: {
        background: "#667eea",
        color: "white",
        padding: "6px 12px",
        borderRadius: "20px",
        fontSize: "0.9rem",
        fontWeight: "500"
    },
    dateTimeContainer: {
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        gap: "20px",
        alignItems: "center",
        marginBottom: "25px"
    },
    dateSection: {
        textAlign: "center"
    },
    timeSection: {
        textAlign: "center"
    },
    dateLabel: {
        color: "#718096",
        fontSize: "0.9rem",
        fontWeight: "500",
        marginBottom: "8px"
    },
    timeLabel: {
        color: "#718096",
        fontSize: "0.9rem",
        fontWeight: "500",
        marginBottom: "8px"
    },
    dateValue: {
        color: "#2d3748",
        fontSize: "1.1rem",
        fontWeight: "600"
    },
    timeValue: {
        color: "#2d3748",
        fontSize: "1.1rem",
        fontWeight: "600"
    },
    divider: {
        width: "2px",
        height: "60px",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        borderRadius: "1px"
    },
    digitalClock: {
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        color: "white",
        padding: "15px 25px",
        borderRadius: "12px",
        fontSize: "1.2rem",
        fontWeight: "600",
        fontFamily: "monospace",
        letterSpacing: "1px"
    },
    clockText: {
        textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)"
    },
    footer: {
        textAlign: "center"
    },
    footerText: {
        color: "#a0aec0",
        fontSize: "0.9rem",
        fontStyle: "italic"
    }
};