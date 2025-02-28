📈 Social Media Performance Analysis
====================================

Welcome to the **Social Media Performance Analysis** project repository! This project was developed as part of the Pre-Hackathon assignment for the **Level Supermind Hackathon**. The goal was to create a basic analytics module to analyze engagement data from mock social media accounts using **Langflow** and **DataStax Astra DB**.
<br>
<br>
**Website Link:** [https://social-media-analysis-r3to.onrender.com/](https://social-media-analysis-r3to.onrender.com/)

* * * * *

![web](https://github.com/user-attachments/assets/2705c54e-4b43-479c-ac97-19c15b5b4ba9)

![web2](https://github.com/user-attachments/assets/db0395cf-3157-494f-80c6-cb217f04ee60)

![web3](https://github.com/user-attachments/assets/420c3340-3785-4002-b23d-58ec1f22d43b)

* * * * *

🎮 Objective
------------

To develop a simple analytics solution that:

1. Fetches and stores mock engagement data in a database.
2. Analyzes post performance based on engagement metrics.
3. Provides insights using GPT integration for better decision-making.

* * * * *

🔧 Features
-----------

1.  **Fetch Engagement Data**

    -   A small dataset simulating social media engagement was created, including metrics like likes, shares, comments, and post types (e.g., carousel, reels, static images).
    -   The dataset was stored in **DataStax Astra DB**, a scalable cloud-based NoSQL database.
2.  **Analyze Post Performance**

    -   A workflow was built using **Langflow** to:
        -   Accept input for different post types (carousel, reels, static images).
        -   Query the dataset in Astra DB to calculate average engagement metrics for each post type.
3.  **Provide Insights**

    -   Integrated **GPT** within Langflow to generate simple, actionable insights based on the analyzed data.
    -   Example insights:
        -   *"Carousel posts have 20% higher engagement than static posts."*
        -   *"Reels drive 2x more comments compared to other formats."*

* * * * *

🪜 Tools Used
-------------

-   **DataStax Astra DB**: For storing and querying engagement data.
-   **Langflow**: For creating workflows and integrating GPT to automate insights generation.

* * * * *

📦 Project Structure
--------------------

```
Directory structure:
└── meekhumor-social_media_analysis/
    ├── backend/
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── server.js
    │   └── .gitignore
    └── frontend/
        ├── README.md
        ├── eslint.config.js
        ├── index.html
        ├── package-lock.json
        ├── package.json
        ├── postcss.config.js
        ├── tailwind.config.js
        ├── vite.config.js
        ├── .gitignore
        ├── public/
        │   ├── dataset.json
        │   └── happy.webp
        └── src/
            ├── App.jsx
            ├── Layout.jsx
            ├── index.css
            ├── main.jsx
            └── components/
                ├── Footer.jsx
                ├── Header.jsx
                ├── Home/
                │   ├── Chat.jsx
                │   ├── Home.jsx
                │   └── Homecard.jsx
                └── Overview/
                    ├── Datasummary.jsx
                    ├── Overview.jsx
                    └── Table.jsx

```

* * * * *

🚀 Getting Started
------------------

1.  Clone the repository:

    ```
    git clone https://github.com/meekhumor/social_media_analysis.git

    ```

2.  Set up your DataStax Astra DB instance and configure the credentials in the project.
3.  Open **Langflow** and import the provided workflows.
4.  Run the workflows to:
    -   Fetch engagement data.
    -   Analyze post performance.
    -   Generate insights.

* * * * *

🎥 Demo Video
-------------

A detailed demonstration of the project is available on YouTube: [https://www.youtube.com/watch?v=ULQf2hLj-E8&feature=youtu.be](https://www.youtube.com/watch?v=ULQf2hLj-E8&feature=youtu.be)

* * * * *



👤 Contributors
---------------

- Om Mukherjee
- Abhishek Kotwani
- Aryan Yadav
- Bhavesh Phundkar


* * * * *


🌟 Acknowledgements
-------------------

-   **Langflow** for its user-friendly workflow creation and GPT integration.
-   **DataStax Astra DB** for seamless database operations.
-   **Level Supermind Hackathon** organizers for the challenge and opportunity to showcase our skills.
