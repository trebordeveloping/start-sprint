import { useState } from "react";

export default function PlatformRating(props: {
  value: boolean | null;
  setValue: React.Dispatch<React.SetStateAction<boolean | null>>;
}) {

  const [hover, setHover] = useState<null | boolean>(null);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
      <button
        onClick={() => props.setValue(true)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(null)}
        style={{
          padding: '8px 24px',
          borderRadius: 6,
          border: props.value === true ? '2px solid #f59e42' : '1px solid #e5e7eb',
          background: props.value === true ? '#f59e42' : hover === true ? '#fde7c7' : '#f9fafb',
          color: props.value === true ? '#fff' : '#374151',
          fontWeight: 600,
          fontSize: 16,
          cursor: 'pointer',
          boxShadow: props.value === true ? '0 2px 8px #f59e4230' : hover === true ? '0 2px 8px #f59e4210' : 'none',
          transition: 'all 0.15s',
          transform: hover === true ? 'scale(1.07)' : 'scale(1)',
        }}
      >
        Yes
      </button>
      <button
        onClick={() => props.setValue(false)}
        onMouseEnter={() => setHover(false)}
        onMouseLeave={() => setHover(null)}
        style={{
          padding: '8px 24px',
          borderRadius: 6,
          border: props.value === false ? '2px solid #f59e42' : '1px solid #e5e7eb',
          background: props.value === false ? '#f59e42' : hover === false ? '#fde7c7' : '#f9fafb',
          color: props.value === false ? '#fff' : '#374151',
          fontWeight: 600,
          fontSize: 16,
          cursor: 'pointer',
          boxShadow: props.value === false ? '0 2px 8px #f59e4230' : hover === false ? '0 2px 8px #f59e4210' : 'none',
          transition: 'all 0.15s',
          transform: hover === false ? 'scale(1.07)' : 'scale(1)',
        }}
      >
        No
      </button>
    </div>
  );
}
