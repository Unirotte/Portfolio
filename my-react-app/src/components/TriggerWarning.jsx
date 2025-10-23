import { useState } from "react";

function TriggerWarningModal({ onAccept }) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="overlay">
      <div className="modal">
        <h2>⚠️ Trigger Warning</h2>
        <p>
          Le contenu de cette section peut être sensible.  
          Cochez la case si vous voulez continuer en toute connaissance de cause.
        </p>

        <label>
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          J’ai compris, je veux voir le contenu.
        </label>

        <br />

        <button onClick={onAccept} disabled={!checked}>
          Continuer
        </button>
      </div>
    </div>
  );
}

export default TriggerWarningModal;