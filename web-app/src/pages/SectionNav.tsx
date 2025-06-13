

const SectionButton = ({ label, active, onClick }: {
  label: string;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`w-full px-4 py-2 font-semibold transition-colors duration-200 ${active ? '!bg-orange-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-orange-50'}`}
  >
    {label}
  </button>
);

export default function SectionNav(props: {
  section: 'gallery' | 'reviews';
  setSection: (section: 'gallery' | 'reviews') => void;
}) {

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <SectionButton
        label="Gallery"
        active={props.section === 'gallery'}
        onClick={() => props.setSection('gallery')}
      />
      <SectionButton
        label="Reviews"
        active={props.section === 'reviews'}
        onClick={() => props.setSection('reviews')}
      />
    </div>
  )
}