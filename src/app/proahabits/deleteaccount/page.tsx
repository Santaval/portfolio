import React from "react";

export default function DeleteAccount() {
  const adminEmail = "system@savaldev.com";
  const emailSubject = "Account Deletion Request - ProaHabits";

  return (
    <div style={{ 
      maxWidth: "600px", 
      margin: "60px auto", 
      padding: "30px", 
      fontFamily: "system-ui, sans-serif",
      border: "1px solid #ffebee",
      borderRadius: "12px",
      backgroundColor: "#fff"
    }}>
      <h1 style={{ color: "#d32f2f", marginTop: 0 }}>Delete Account & Data</h1>
      
      <p style={{ fontSize: "16px", color: "#555" }}>
        We’re sorry to see you go. Before you proceed, please understand that deleting your account is <strong>permanent</strong>.
      </p>

      <div style={{ 
        backgroundColor: "#fff5f5", 
        padding: "20px", 
        borderRadius: "8px", 
        marginBottom: "30px",
        borderLeft: "4px solid #d32f2f"
      }}>
        <h3 style={{ marginTop: 0, color: "#c62828" }}>What happens next?</h3>
        <ul style={{ margin: 0, paddingLeft: "20px", color: "#666" }}>
          <li>Your profile and habit history will be permanently erased.</li>
          <li>All uploaded food pictures and nutrition logs will be deleted.</li>
          <li>Your connection to Proactiva Gym will be severed.</li>
          <li><strong>This action cannot be undone.</strong></li>
        </ul>
      </div>

      <h2 style={{ fontSize: "20px" }}>How to request deletion</h2>
      <p>
        To ensure the security of your data, account deletions are processed manually by our system administrators. Please follow these steps:
      </p>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <p>Send an email to:</p>
        <code style={{ 
          display: "block", 
          padding: "10px", 
          background: "#f4f4f4", 
          borderRadius: "4px", 
          fontSize: "18px",
          fontWeight: "bold",
          marginBottom: "10px"
        }}>
          {adminEmail}
        </code>
        
        <p>With the subject line:</p>
        <code style={{ 
          display: "block", 
          padding: "10px", 
          background: "#f4f4f4", 
          borderRadius: "4px", 
          fontSize: "18px",
          fontWeight: "bold"
        }}>
          Account Deletion
        </code>
      </div>

      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <a 
          href={`mailto:${adminEmail}?subject=${encodeURIComponent("Account Deletion")}`}
          style={{
            display: "inline-block",
            backgroundColor: "#d32f2f",
            color: "white",
            padding: "12px 24px",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "16px"
          }}
        >
          Send Deletion Email Now
        </a>
      </div>

      <p style={{ marginTop: "30px", fontSize: "14px", color: "#888", textAlign: "center" }}>
        Requests are typically processed within 5 business days. You will receive a confirmation email once your data has been purged.
      </p>
    </div>
  );
}