export default function RadioGroup({ selected, onChange, error }) {
    const options = ["General Enquiry", "Support Request"];
  
    return (
      <div className="form-group">
        <label>Query Type *</label>
        <div className="radio-group" role="radiogroup" aria-describedby="queryTypeError">
          {options.map((opt) => (
            <label key={opt} className="radio-input">
              <input
                type="radio"
                name="queryType"
                value={opt}
                checked={selected === opt}
                onChange={onChange}
                required
              />
              <img
                src="assets/images/icon-radio-selected.svg"
                alt="Option Icon"
                className="radio-icon"
              />
              <span>{opt}</span>
            </label>
          ))}
        </div>
        {error && <div className="error-message" id="queryTypeError">{error}</div>}
      </div>
    );
  }
  