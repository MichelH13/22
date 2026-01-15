// Create sparkles background
function createSparkles() {
  const sparklesContainer = document.getElementById("sparkles")
  const numSparkles = 50

  for (let i = 0; i < numSparkles; i++) {
    const sparkle = document.createElement("div")
    sparkle.className = "sparkle"
    sparkle.style.left = Math.random() * 100 + "%"
    sparkle.style.top = Math.random() * 100 + "%"
    sparkle.style.animationDelay = Math.random() * 3 + "s"
    sparkle.style.animationDuration = Math.random() * 2 + 1 + "s"
    sparklesContainer.appendChild(sparkle)
  }
}

// Create floating hearts
function createHeart() {
  const heartsContainer = document.getElementById("hearts")
  const heart = document.createElement("div")
  heart.className = "floating-heart"

  const hearts = ["❤️", "💕", "💖", "💗", "💝", "💘", "🩷", "🤍"]
  heart.textContent = hearts[Math.floor(Math.random() * hearts.length)]

  heart.style.left = Math.random() * 100 + "%"
  heart.style.bottom = "0"
  heart.style.fontSize = Math.random() * 20 + 20 + "px"

  heartsContainer.appendChild(heart)

  // Remove heart after animation
  setTimeout(() => {
    heart.remove()
  }, 4000)
}

// Burst of hearts when letter opens
function createHeartsBurst() {
  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      createHeart()
    }, i * 100)
  }
}

// Continuous hearts while letter is open
let heartsInterval

function startContinuousHearts() {
  heartsInterval = setInterval(createHeart, 300)
}

function stopContinuousHearts() {
  clearInterval(heartsInterval)
}

// Modal functionality
const openLetterBtn = document.getElementById("openLetterBtn")
const letterModal = document.getElementById("letterModal")
const closeBtn = document.getElementById("closeBtn")

openLetterBtn.addEventListener("click", () => {
  letterModal.classList.add("active")
  createHeartsBurst()
  startContinuousHearts()
})

closeBtn.addEventListener("click", () => {
  letterModal.classList.remove("active")
  stopContinuousHearts()
})

letterModal.addEventListener("click", (e) => {
  if (e.target === letterModal) {
    letterModal.classList.remove("active")
    stopContinuousHearts()
  }
})

// Initialize sparkles
createSparkles()

// Create occasional random hearts in background
setInterval(() => {
  if (!letterModal.classList.contains("active")) {
    if (Math.random() > 0.7) {
      createHeart()
    }
  }
}, 2000)

// Add confetti effect on title click
document.querySelector(".title").addEventListener("click", () => {
  for (let i = 0; i < 20; i++) {
    setTimeout(createHeart, i * 50)
  }
})
