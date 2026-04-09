import React from "react";

export default function PrivacyPolicy() {
  const lastUpdated = new Date().toLocaleDateString();

  return (
    <div style={{ 
      maxWidth: "800px", 
      margin: "40px auto", 
      padding: "20px", 
      fontFamily: "system-ui, sans-serif",
      lineHeight: "1.6",
      color: "#333"
    }}>
      <h1 style={{ borderBottom: "2px solid #eee", paddingBottom: "10px" }}>Privacy Policy for ProaHabits</h1>

      <p>
        At <strong>ProaHabits</strong>, your privacy is a core part of your fitness journey. We are committed to being transparent about the data we collect and how we use it to help you reach your goals.
      </p>

      <h2>1. Information We Collect</h2>
      <p>To provide a personalized habit-tracking experience, we collect the following types of information:</p>
      <ul>
        <li><strong>Health & Fitness Data:</strong> Daily step counts and activity levels synced via your Proactiva Gym account.</li>
        <li><strong>Media Content:</strong> Food pictures and logs you voluntarily upload to track nutrition.</li>
        <li><strong>Input Data:</strong> Manual entries for water ingestion and habit completion status.</li>
        <li><strong>Account Info:</strong> Integration details from your Proactiva Gym account to ensure seamless data syncing.</li>
      </ul>

      <h2>2. How We Use Your Data</h2>
      <p>
        We use your information exclusively to:
      </p>
      <ul>
        <li>Visualize your progress over time (e.g., step charts and habit streaks).</li>
        <li>Synchronize your gym activity with your daily habit goals.</li>
        <li>Improve the app’s features and user experience based on aggregated, de-identified usage patterns.</li>
      </ul>

      <h2>3. Data Sharing and Third Parties</h2>
      <p>
        <strong>We do not sell your personal or health data.</strong> Data is only shared in the following contexts:
      </p>
      <ul>
        <li><strong>Proactiva Gym:</strong> Data is synchronized with your existing gym profile to maintain a unified fitness record.</li>
        <li><strong>Service Providers:</strong> We may use analytics (like Firebase) to monitor app performance, but this is restricted to usage behavior, not your personal photos or specific health metrics.</li>
      </ul>

      <h2>4. Data Retention and Control</h2>
      <p>
        You remain in control of your data. You may delete your food logs or habit history within the app at any time. If you disconnect your Proactiva Gym account, syncing of new fitness data will cease immediately.
      </p>

      <h2>5. Security</h2>
      <p>
        We implement industry-standard security measures to protect your health data and personal images from unauthorized access.
      </p>

      <h2>6. Contact Us</h2>
      <p>
        If you have questions regarding your data or this policy, please reach out to: 
        <br />
        <strong>contact@savaldev.com</strong>
      </p>

      <footer style={{ marginTop: "40px", paddingTop: "20px", borderTop: "1px solid #eee", fontSize: "14px", color: "#666" }}>
        Last updated: {lastUpdated}
      </footer>
    </div>
  );
}