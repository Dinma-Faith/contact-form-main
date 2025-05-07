export default function InputField({ label, name, value, onChange, error }) {
    return (
      <div className="form-group">
        <label htmlFor={name}>{label} *</label>
        <input
          type="text"
          id={name}
          name={name}
          className={`input ${error ? "error" : ""}`}
          value={value}
          onChange={onChange}
          required
          aria-describedby={`${name}Error`}
        />
        {error && <div className="error-message" id={`${name}Error`}>{error}</div>}
      </div>
    );
  }
  