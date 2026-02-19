// --- LOGIN LOGIC ---
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const user = document.getElementById('username').value;
        const pass = document.getElementById('password').value;
        const errorMsg = document.getElementById('error-msg');

        if (user === 'MIWAASOCOOLL2M' && pass === 'MIWAA2MZZZ') {
            errorMsg.textContent = "ACCESS GRANTED...";
            errorMsg.style.color = "#00ff41";
            setTimeout(() => {
                window.location.href = 'home.html';
            }, 1000);
        } else {
            errorMsg.textContent = "ACCESS DENIED: INVALID CREDENTIALS";
            errorMsg.style.color = "red";
            // Shake effect
            loginForm.style.animation = "shake 0.5s";
            setTimeout(() => loginForm.style.animation = "", 500);
        }
    });
}

// Add shake keyframe dynamically if not in CSS
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
}`;
document.head.appendChild(styleSheet);


// --- ANIMATED TEXT LOGIC ---
const textContainer = document.getElementById('anim-text-content');
if (textContainer) {
    const messages = [
        { text: "MIWAA PANELL", icon: "" },
        { text: "BUY WA!", icon: "whatsapp" },
        { text: "ALL FEATURE READY", icon: "" }
    ];
    
    let index = 0;

    function updateText() {
        // Fade out
        textContainer.style.opacity = 0;
        
        setTimeout(() => {
            const msg = messages[index];
            let htmlContent = msg.text;
            
            if (msg.icon === "whatsapp") {
                // Inline SVG for WhatsApp
                htmlContent += ` <svg class="whatsapp-icon" viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.16C10.57 20.16 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.05 20.16Z"/></svg>`;
            }
            
            textContainer.innerHTML = htmlContent;
            // Fade in
            textContainer.style.opacity = 1;
            
            index = (index + 1) % messages.length;
        }, 500); // Wait for fade out
    }

    setInterval(updateText, 3000); // Change every 3 seconds
    updateText(); // Initial call
}

// --- SOCIAL MEDIA POPUP ---
const socialBtns = document.querySelectorAll('.social-btn');
socialBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        alert("N/A Not Available Now");
    });
});