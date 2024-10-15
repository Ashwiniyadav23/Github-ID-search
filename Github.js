// Selecting elements
const input = document.querySelector("input");
const btn = document.querySelector(".searchbtn");
const user = document.querySelector(".githubUser");
const login = document.querySelector(".githubUserName a");
const joined = document.querySelector(".githubJoinDate");
const repo = document.querySelector(".repoTotal");
const follower = document.querySelector(".followerTotal");
const following = document.querySelector(".followingTotal");
const userLocation = document.querySelector(".location");
const twit = document.querySelector(".twit");
const websites = document.querySelector(".websites");
const companies = document.querySelector(".companies");
const gitBio = document.querySelector(".githubBio");

const lightModeBtn = document.querySelector(".color-mode_btn[aria-label='Toggle light mode']");
const darkModeBtn = document.querySelector(".color-mode_btn[aria-label='Toggle dark mode']");

// Light mode event listener
lightModeBtn.addEventListener("click", () => {
    document.body.classList.remove("dark-mode");
    lightModeBtn.classList.add("light--hidden");
    darkModeBtn.classList.remove("dark--hidden");
});

// Dark mode event listener
darkModeBtn.addEventListener("click", () => {
    document.body.classList.add("dark-mode");
    darkModeBtn.classList.add("dark--hidden");
    lightModeBtn.classList.remove("light--hidden");
});

// Event listener for search button
btn.addEventListener("click", () => {
    const username = input.value.trim();

    if (!username) {
        alert("Please enter a GitHub username!");
        return;
    }

    const url = `https://api.github.com/users/${username}`;

    // Fetch data from GitHub API
    async function getUrl() {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("User not found");
            }
            const data = await response.json();

            // Updating the DOM with the received data
            user.innerHTML = data.name || "No name available";
            login.innerHTML = `@${data.login}`;
            login.href = data.html_url;
            joined.innerHTML = `Joined on ${new Date(data.created_at).toDateString()}`;
            repo.innerHTML = data.public_repos;
            follower.innerHTML = data.followers;
            following.innerHTML = data.following;
            userLocation.innerHTML = data.location || "No location available";
            twit.innerHTML = data.twitter_username ? `@${data.twitter_username}` : "No Twitter account";
            websites.innerHTML = data.blog ? `<a href="${data.blog}" target="_blank">${data.blog}</a>` : "No website available";
            companies.innerHTML = data.company || "No company information";
            gitBio.innerHTML = data.bio || "This profile has no bio.";
        } catch (error) {
            console.error("Error fetching data:", error);
            alert("User not found. Please try again.");
        }

        // Clear the input field after search
        input.value = "";
    }

    getUrl();
    // Select buttons
const lightModeBtn = document.getElementById("light-mode-btn");
const darkModeBtn = document.getElementById("dark-mode-btn");

// Light Mode event listener
lightModeBtn.addEventListener("click", () => {
    document.body.classList.remove("dark-mode"); // Remove dark mode class
    lightModeBtn.style.display = "none";         // Hide the light mode button
    darkModeBtn.style.display = "inline-block";  // Show the dark mode button
});

// Dark Mode event listener
darkModeBtn.addEventListener("click", () => {
    document.body.classList.add("dark-mode");    // Add dark mode class
    darkModeBtn.style.display = "none";          // Hide the dark mode button
    lightModeBtn.style.display = "inline-block"; // Show the light mode button
});

});
