import React from "react";

export default function PrivacyPolicy() {
  return (
    <div style={{ maxWidth: 800, margin: "40px auto", padding: 20 }}>
      <h1>Privacy Policy</h1>

      <p>
        Tenomaster respects your privacy. This app does not collect personally
        identifiable information.
      </p>

      <h2>Information Collection</h2>
      <p>
        We may collect anonymous usage data to understand how the app is used
        and to improve the gameplay experience. This data cannot be used to
        identify you.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        Tenomaster may use third-party services such as analytics providers
        (for example, Google Analytics for Firebase) to collect anonymous
        usage information.
      </p>

      <h2>Data Usage</h2>
      <p>
        Collected data is used only to improve the app and its features.
        We do not sell, trade, or share personal information with third parties.
      </p>

      <h2>Children’s Privacy</h2>
      <p>
        Tenomaster does not knowingly collect any personal information from
        children.
      </p>

      <h2>Changes</h2>
      <p>
        This privacy policy may be updated from time to time. Any changes will
        be reflected on this page.
      </p>

      <h2>Contact</h2>
      <p>
        If you have any questions about this privacy policy, you can contact us
        at: <strong>support@tenomaster.app</strong>
      </p>

      <p style={{ marginTop: 40, fontSize: 12, color: "#666" }}>
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
}
