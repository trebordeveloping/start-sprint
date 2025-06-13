import { useEffect, useState } from 'react';

export default function Gallery(props: {
  name: string;
}) {
  // Use Vite's import.meta.glob to get all images in the directory at build time
  const [media, setMedia] = useState<{name: string, path: string, type: string}[]>([]);

  useEffect(() => {
    fetch(`/places/${props.name.toLowerCase()}/data.json`)  // path relative to public folder
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const newData = data.map((item: { name: string, type: string }) => ({
          ...item,
          path: `/places/${props.name.toLowerCase()}/${item.name}`,
        }));

        setMedia(newData); // assuming data is the array
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  if (media.length === 0) {
    return <div className="text-gray-400 text-center py-8">Be the first to upload an image or video!</div>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {media.map((src, idx) => (
        <div key={src.name} className="rounded-xl overflow-hidden shadow border border-gray-100 bg-white group relative">
          {src.type === "img" && (
            <img
              src={src.path}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          )}
          {src.type === "vid" && (
            <video
              src={src.path}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              autoPlay
              loop
              muted
              playsInline
            />
          )}
        </div>
      ))}
    </div>
  );
}