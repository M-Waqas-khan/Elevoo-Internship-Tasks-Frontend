// Sample blog posts data with valid image URLs
const posts = [
  {
    id: 1,
    title: "Exploring React Hooks",
    category: "Tech",
    description: "A beginner's guide to understanding React Hooks and how they improve your apps.",
    date: "2024-08-10",
    image: "https://via.placeholder.com/400x300/333/fff?text=React+Hooks" // Static image URL
  },
  {
    id: 2,
    title: "Top 10 Travel Destinations",
    category: "Travel",
    description: "Discover the most breathtaking places to visit this year.",
    date: "2024-07-18",
    image: "https://via.placeholder.com/400x300/333/fff?text=Travel" // Static image URL
  },
  {
    id: 3,
    title: "Delicious Vegan Recipes",
    category: "Food",
    description: "Try out these easy and healthy vegan dishes for any meal.",
    date: "2024-07-22",
    image: "https://via.placeholder.com/400x300/333/fff?text=Vegan+Food" // Static image URL
  },
  {
    id: 4,
    title: "Latest Trends in AI",
    category: "Tech",
    description: "An overview of recent advances in artificial intelligence technologies.",
    date: "2024-09-01",
    image: "https://via.placeholder.com/400x300/333/fff?text=AI+Trends" // Static image URL
  },
  {
    id: 5,
    title: "Backpacking Through Europe",
    category: "Travel",
    description: "Tips and stories from a month-long backpacking trip.",
    date: "2024-06-30",
    image: "https://via.placeholder.com/400x300/333/fff?text=Backpacking" // Static image URL
  },
  {
    id: 6,
    title: "Homemade Pasta Recipe",
    category: "Food",
    description: "Learn to make delicious homemade pasta from scratch.",
    date: "2024-08-05",
    image: "https://via.placeholder.com/400x300/333/fff?text=Pasta+Recipe" // Static image URL
  },
  {
    id: 7,
    title: "Understanding JavaScript Closures",
    category: "Tech",
    description: "A deep dive into closures in JavaScript and practical examples.",
    date: "2024-07-25",
    image: "https://via.placeholder.com/400x300/333/fff?text=JavaScript+Closures" // Static image URL
  },
  {
    id: 8,
    title: "Street Food Adventures",
    category: "Food",
    description: "Exploring unique street foods from around the world.",
    date: "2024-07-15",
    image: "https://via.placeholder.com/400x300/333/fff?text=Street+Food" // Static image URL
  }
];

// Constants
const postsPerPage = 4;
let currentPage = 1;
let filteredPosts = [...posts];

// DOM Elements
const postsContainer = document.getElementById('posts-container');
const categoryFilter = document.getElementById('category-filter');
const searchInput = document.getElementById('search-input');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const pageInfo = document.getElementById('page-info');

// Functions to render posts
function renderPosts(postsToRender, page = 1) {
  postsContainer.innerHTML = ''; // Clear the container

  const start = (page - 1) * postsPerPage;
  const end = start + postsPerPage;
  const paginatedPosts = postsToRender.slice(start, end);

  if (paginatedPosts.length === 0) {
    postsContainer.innerHTML = '<p>No posts found.</p>';
    return;
  }

  // Create post cards dynamically
  paginatedPosts.forEach(post => {
    const postCard = document.createElement('article');
    postCard.classList.add('post-card');
    postCard.innerHTML = `
      <img src="${post.image}" alt="${post.title}" class="post-image" />
      <div class="post-content">
        <h3 class="post-title">${post.title}</h3>
        <time class="post-date">${new Date(post.date).toLocaleDateString()}</time>
        <p class="post-description">${post.description}</p>
      </div>
    `;
    postsContainer.appendChild(postCard);
  });

  const totalPages = Math.ceil(postsToRender.length / postsPerPage);
  pageInfo.textContent = `Page ${page} of ${totalPages}`;
  prevBtn.disabled = page === 1;
  nextBtn.disabled = page === totalPages || totalPages === 0;
}

// Filter and Search Logic
function filterAndSearch() {
  const category = categoryFilter.value;
  const searchTerm = searchInput.value.toLowerCase();

  filteredPosts = posts.filter(post => {
    const matchesCategory = category === 'all' || post.category === category;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  currentPage = 1;
  renderPosts(filteredPosts);
}

// Event listeners
categoryFilter.addEventListener('change', filterAndSearch);
searchInput.addEventListener('input', filterAndSearch);

prevBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    renderPosts(filteredPosts, currentPage);
  }
});

nextBtn.addEventListener('click', () => {
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    renderPosts(filteredPosts, currentPage);
  }
});

// Initial render
renderPosts(filteredPosts);
