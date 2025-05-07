export default function TextAreaField({ value, onChange, error }) {
    return (
      <div className="form-group">
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
          value={value}
          onChange={onChange}
          className={error ? "error" : ""}
          aria-describedby="messageError"
        />
        {error && <div className="error-message" id="messageError">{error}</div>}
      </div>
    );
  }
  