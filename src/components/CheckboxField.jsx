export default function CheckboxField({ checked, onChange, error }) {
    return (
      <div className="checkbox-group">
        <label htmlFor="consent" className="checkbox-input">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={checked}
            onChange={onChange}
            required
          />
          <img
            src="assets/images/icon-checkbox-check.svg"
            alt="Consent Checkbox"
            className="checkbox-icon"
          />
          <span className="checkbox-text">I consent to being contacted by the team *</span>
        </label>
        {error && <div className="error-message" id="consentError">{error}</div>}
      </div>
    );
  }
  