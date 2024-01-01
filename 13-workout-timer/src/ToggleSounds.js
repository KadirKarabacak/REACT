import { memo } from "react";
// Toggling Sound used memo cuz of to not re-render when parent is rendered
function ToggleSounds({ allowSound, setAllowSound }) {
  return (
    <button
      className="btn-sound"
      onClick={() => setAllowSound((allow) => !allow)}
    >
      {allowSound ? "🔈" : "🔇"}
    </button>
  );
}

// We can simply call memo right here on export
export default memo(ToggleSounds);
