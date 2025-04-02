document.addEventListener("DOMContentLoaded", function () {
    // Breaking News Data
    const breakingNews = [
        "Government Announces New Education Policy",
        "National Football Team Wins Championship",
        "Hollywood's Biggest Award Show Coming Soon",
        "New AI Technology Revolutionizes Healthcare",
        "Stock Markets Reach Record Highs",
    ];

    // Featured News Data
    const featuredNews = [
        {
            image: "images/news1.jpg",
            title: "Revolution in AI Education",
            description: "Schools to implement AI-powered learning tools for better engagement."
        },
        {
            image: "images/news2.jpg",
            title: "Sports Sensation: Grand Slam Winner",
            description: "Rising tennis star wins their first grand slam title."
        },
        {
            image: "images/news3.jpg",
            title: "Entertainment Industry Booming",
            description: "Upcoming blockbuster movie breaks pre-sale records."
        },
        {
            image: "images/news4.jpg",
            title: "Tech Innovation: Smart Cities",
            description: "How smart cities are shaping the future of urban development."
        },
        {
            image: "images/news5.jpg",
            title: "Stock Market Hits New Heights",
            description: "Investors are celebrating record-breaking stock market highs."
        }
    ];

    let newsIndex = 0;

    function updateBreakingNews() {
        document.getElementById("breaking-text").textContent = breakingNews[newsIndex];
    }

    function updateFeaturedNews() {
        let featuredImage = document.getElementById("featured-image");
        let featuredTitle = document.getElementById("featured-title");
        let featuredDescription = document.getElementById("featured-description");

        featuredImage.src = featuredNews[newsIndex].image;
        featuredTitle.textContent = featuredNews[newsIndex].title;
        featuredDescription.textContent = featuredNews[newsIndex].description;
    }

    function updateNews() {
        updateBreakingNews();
        updateFeaturedNews();
        newsIndex = (newsIndex + 1) % breakingNews.length;
    }

    // Run updates every 5 seconds
    updateNews();
    setInterval(updateNews, 5000);

    // Hamburger Menu Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.getElementById("nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Read More / Read Less Functionality
    document.querySelectorAll(".read-more-toggle").forEach(button => {
        button.addEventListener("click", function () {
            let content = this.previousElementSibling;
            let moreText = content.querySelector(".more-text");

            if (moreText.style.display === "none" || moreText.style.display === "") {
                moreText.style.display = "inline";
                this.textContent = "Read Less";
            } else {
                moreText.style.display = "none";
                this.textContent = "Read More";
            }
        });
    });

    // Contact Form Submission (Success Message)
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent actual form submission

            // Show Success Message
            alert("Your message has been successfully sent!");

            // Optionally, clear the form fields after submission
            contactForm.reset();
        });
    }

    // Fetch Live News from NewsAPI
    async function fetchNews(category, elementId) {
        const apiKey = "YOUR_NEWS_API_KEY"; // Replace with your actual NewsAPI key
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            const newsList = document.getElementById(elementId);
            newsList.innerHTML = ""; // Clear existing list

            if (data.articles && data.articles.length > 0) {
                data.articles.slice(0, 4).forEach(article => {
                    let li = document.createElement("li");
                    let a = document.createElement("a");
                    a.href = article.url;
                    a.textContent = article.title;
                    a.target = "_blank"; // Open in new tab
                    li.appendChild(a);
                    newsList.appendChild(li);
                });
            } else {
                newsList.innerHTML = "<li>No news available</li>";
            }
        } catch (error) {
            console.error("Error fetching news:", error);
            document.getElementById(elementId).innerHTML = "<li>Failed to load news</li>";
        }
    }

    // Fetch news for both sections
    fetchNews("general", "trending-list"); // Trending News
    fetchNews("business", "popular-news-list"); // Popular News
});