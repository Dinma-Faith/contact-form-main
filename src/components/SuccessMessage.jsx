export default function SuccessMessage() {
    return (
      <div className="success-message" role="alert" aria-live="polite">
        <img src="/assets/images/icon-success-check.svg" alt="Success" />
        Message Sent! <br />
        <span className="success-message-thankyou-span">
          Thanks for completing the form. We'll be in touch soon!
        </span>
      </div>
    );
  }
  