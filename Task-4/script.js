// Data
const features = [
  {
    icon: "⚡",
    title: "Fast Task Management",
    description: "Add, update, and complete your tasks instantly.",
  },
  {
    icon: "🔔",
    title: "Reminders & Notifications",
    description: "Never miss a deadline with timely reminders.",
  },
  {
    icon: "📊",
    title: "Progress Tracking",
    description: "Visualize your productivity with smart analytics.",
  },
];

const reviews = [
  {
    name: "Alice Johnson",
    quote: "TaskFlow completely transformed how I organize my work. Super intuitive!",
  },
  {
    name: "Mark Smith",
    quote: "I love the reminders. They keep me on track every single day.",
  },
  {
    name: "Jane Doe",
    quote: "The progress tracking motivates me to stay productive. Highly recommend!",
  },
];

const pricing = [
  {
    plan: "Free",
    price: "$0",
    features: ["Basic task management", "Limited reminders", "Community support"],
  },
  {
    plan: "Pro",
    price: "$9.99/mo",
    features: [
      "Unlimited tasks & reminders",
      "Priority support",
      "Advanced analytics",
    ],
  },
  {
    plan: "Team",
    price: "$29.99/mo",
    features: [
      "Collaboration tools",
      "Team progress tracking",
      "Dedicated support",
    ],
  },
];

// Populate Features
const featuresSection = document.getElementById("featuresSection");
features.forEach(({ icon, title, description }) => {
  const featureEl = document.createElement("div");
  featureEl.className = "feature";
  featureEl.innerHTML = `
    <div class="feature-icon">${icon}</div>
    <h3 class="feature-title">${title}</h3>
    <p class="feature-desc">${description}</p>
  `;
  featuresSection.appendChild(featureEl);
});

// Populate Reviews
const reviewsSection = document.getElementById("reviewsSection");
reviews.forEach(({ name, quote }) => {
  const reviewEl = document.createElement("blockquote");
  reviewEl.className = "review";
  reviewEl.innerHTML = `
    ${quote}
    <div class="reviewer">— ${name}</div>
  `;
  reviewsSection.appendChild(reviewEl);
});

// Populate Pricing
const pricingSection = document.getElementById("pricingSection");
pricing.forEach(({ plan, price, features }) => {
  const planEl = document.createElement("div");
  planEl.className = "plan";
  planEl.innerHTML = `
    <h3 class="plan-title">${plan}</h3>
    <div class="plan-price">${price}</div>
    <ul class="plan-features">
      ${features.map(f => `<li>${f}</li>`).join('')}
    </ul>
    <button class="plan-button">Choose ${plan}</button>
  `;
  pricingSection.appendChild(planEl);
});

// Scroll fade-in animation
function handleScrollFadeIn() {
  const triggerHeight = window.innerHeight * 0.8;
  document.querySelectorAll(".fade-in").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerHeight) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", handleScrollFadeIn);
window.addEventListener("load", handleScrollFadeIn);

// Button click handler
document.getElementById("getStartedBtn").addEventListener("click", () => {
  alert("Get Started clicked!");
});
