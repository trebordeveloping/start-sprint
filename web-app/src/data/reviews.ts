import type { Review } from '../utils/types';

export const reviews: Review[] = [
  {
    id: '9f08eb52-99ff-4d28-b25d-f2b705a04fdf',
    userId: '4a8928ed-0d62-4e9c-8848-b98bf8a64c51',
    placeId: '1',
    rating: 5,
    comment: 'A must-visit in Munich! The architecture is stunning and the atmosphere is vibrant.',
    createdAt: new Date('2024-12-13'),
  },
  {
    id: 'b1a2c3d4-e5f6-7890-abcd-1234567890ab',
    userId: '2b3c4d5e-6f70-8a9b-cdef-2345678901bc',
    placeId: '1',
    rating: 4,
    comment: 'Great spot for people-watching and photos. Gets crowded but worth it!',
    createdAt: new Date('2024-12-17'),
  },
  {
    id: 'c2d3e4f5-6789-0123-abcd-3456789012cd',
    userId: '3c4d5e6f-7081-9abc-def0-3456789012cd',
    placeId: '1',
    rating: 5,
    comment: 'Absolutely loved the Glockenspiel show. A true Munich highlight!',
    createdAt: new Date('2024-12-22'),
  },
  {
    id: 'd3e4f5g6-7890-1234-abcd-4567890123de',
    userId: '4d5e6f70-819a-bcde-f012-4567890123de',
    placeId: '1',
    rating: 3,
    comment: 'Beautiful square but a bit too touristy for my taste.',
    createdAt: new Date('2024-12-27'),
  },
  {
    id: 'e4f5g6h7-8901-2345-abcd-5678901234ef',
    userId: '5e6f7081-9abc-def0-1234-5678901234ef',
    placeId: '1',
    rating: 5,
    comment: 'The heart of Munich! So much history and energy here.',
    createdAt: new Date('2025-01-01'),
  },
  {
    id: 'f5g6h7i8-9012-3456-abcd-6789012345fa',
    userId: '6f70819a-bcde-f012-3456-6789012345fa',
    placeId: '1',
    rating: 4,
    comment: 'Loved the street performers and the lively atmosphere.',
    createdAt: new Date('2025-01-06'),
  },
  {
    id: 'f3cbad70-a8ce-4520-8b91-03c5e1c30fec',
    userId: '49a460f6-2ee0-431c-834b-2e45b60504fb',
    placeId: '2',
    rating: 5,
    comment: 'A beautiful escape from the city buzz. Perfect for a relaxing day out.',
    createdAt: new Date('2024-12-14'),
  },
  {
    id: 'a1b2c3d4-e5f6-7890-abcd-2234567890ab',
    userId: '7a8b9c0d-1e2f-3a4b-5c6d-7e8f9a0b1c2d',
    placeId: '2',
    rating: 5,
    comment: 'Such a peaceful park! Loved walking by the river and watching the surfers.',
    createdAt: new Date('2024-12-18'),
  },
  {
    id: 'b2c3d4e5-f6a7-8901-bcde-3345678901bc',
    userId: '8b9c0d1e-2f3a-4b5c-6d7e-8f9a0b1c2d3e',
    placeId: '2',
    rating: 4,
    comment: 'Great for a picnic or a bike ride. The beer garden is a must-visit!',
    createdAt: new Date('2024-12-24'),
  },
  {
    id: 'c3d4e5f6-a7b8-9012-cdef-4456789012cd',
    userId: '9c0d1e2f-3a4b-5c6d-7e8f-9a0b1c2d3e4f',
    placeId: '2',
    rating: 5,
    comment: 'Huge park with lots of hidden gems. Perfect for families and solo travelers alike.',
    createdAt: new Date('2024-12-30'),
  },
  {
    id: 'd4e5f6a7-b8c9-0123-def0-5567890123de',
    userId: '0d1e2f3a-4b5c-6d7e-8f9a-0b1c2d3e4f5a',
    placeId: '2',
    rating: 4,
    comment: 'Loved the open spaces and the English-style landscaping. Very relaxing.',
    createdAt: new Date('2025-01-03'),
  },
  {
    id: 'e5f6a7b8-c9d0-1234-ef01-6678901234ef',
    userId: '1e2f3a4b-5c6d-7e8f-9a0b-1c2d3e4f5a6b',
    placeId: '2',
    rating: 5,
    comment: 'A green oasis in the city. The Japanese teahouse was a highlight for me.',
    createdAt: new Date('2025-01-09'),
  },
  {
    id: 'a68a6b4d-9c65-46f6-a7ea-1b394aa55270',
    userId: '4d8ee59e-45e2-477f-b6e0-91d39dcd0fc9',
    placeId: '3',
    rating: 5,
    comment: 'A hidden gem in the city! The food is amazing and the atmosphere is cozy.',
    createdAt: new Date('2024-12-15'),
  },
  {
    id: 'b7c8d9e0-f1a2-3456-bcde-778899001122',
    userId: '5e6f7a8b-9c0d-1e2f-3a4b-5c6d7e8f9a0b',
    placeId: '3',
    rating: 5,
    comment: 'Absolutely loved the brunch here! The pastries are to die for.',
    createdAt: new Date('2024-12-19'),
  },
  {
    id: 'c8d9e0f1-a2b3-4567-cdef-889900112233',
    userId: '6f7a8b9c-0d1e-2f3a-4b5c-6d7e8f9a0b1c',
    placeId: '3',
    rating: 4,
    comment: 'Cozy atmosphere and friendly staff. Coffee was excellent!',
    createdAt: new Date('2024-12-23'),
  },
  {
    id: 'd9e0f1a2-b3c4-5678-def0-990011223344',
    userId: '7a8b9c0d-1e2f-3a4b-5c6d-7e8f9a0b1c2d',
    placeId: '3',
    rating: 5,
    comment: 'Perfect spot for a quiet afternoon. The desserts are amazing.',
    createdAt: new Date('2024-12-27'),
  },
  {
    id: 'e0f1a2b3-c4d5-6789-ef01-001122334455',
    userId: '8b9c0d1e-2f3a-4b5c-6d7e-8f9a0b1c2d3e',
    placeId: '3',
    rating: 4,
    comment: 'Great vegan options and a lovely selection of teas.',
    createdAt: new Date('2025-01-01'),
  },
  {
    id: 'f1a2b3c4-d5e6-7890-f012-112233445566',
    userId: '9c0d1e2f-3a4b-5c6d-7e8f-9a0b1c2d3e4f',
    placeId: '3',
    rating: 5,
    comment: 'Came here with friends and everyone loved their food. Will be back!',
    createdAt: new Date('2025-01-05'),
  },
  {
    id: '71414d84-eda9-4a75-80f0-b483e07f6830',
    userId: '1fcaac5a-98a9-404c-bc85-32719fcab709',
    placeId: '4',
    rating: 5,
    comment: 'The pastries are authentic and delicious! A true taste of France in Munich.',
    createdAt: new Date('2024-12-16'),
  },
  {
    id: '82425e95-fbb0-4b86-9c1d-2c3d4e5f6a7b',
    userId: '2fcaac5a-98a9-404c-bc85-32719fcab709',
    placeId: '4',
    rating: 5,
    comment: 'Charming little bakery with a great selection of pastries and coffee.',
    createdAt: new Date('2024-12-20'),
  },
  {
    id: '93536f06-gcc1-5c97-a2e2-3d4e5f6a7b8c',
    userId: '3fcaac5a-98a9-404c-bc85-32719fcab709',
    placeId: '4',
    rating: 4,
    comment: 'Lovely atmosphere and friendly staff. The croissants are a must-try!',
    createdAt: new Date('2024-12-24'),
  },
  {
    id: '04647g18-hdd2-6d08-b3f3-4e5f6a7b8c9d',
    userId: '4fcaac5a-98a9-404c-bc85-32719fcab709',
    placeId: '4',
    rating: 5,
    comment: 'A delightful French bakery! The éclairs are heavenly.',
    createdAt: new Date('2024-12-28'),
  },
  {
    id: '15758h29-iee3-7e19-c4g4-5f6a7b8c9d0e',
    userId: '5fcaac5a-98a9-404c-bc85-32719fcab709',
    placeId: '4',
    rating: 4,
    comment: 'Great place for breakfast or an afternoon treat. Highly recommend!',
    createdAt: new Date('2025-01-01'),
  },
  {
    id: '26869i30-jff4-8f2a-d5h5-6a7b8c9d0e1f',
    userId: '6fcaac5a-98a9-404c-bc85-32719fcab709',
    placeId: '5',
    rating: 5,
    comment: 'The curries are bursting with flavor! Felt like a home-cooked meal in Malaysia.',
    createdAt: new Date('2024-12-20'),
  },
  {
    id: 'a5b6c7d8-e9f0-1234-abcd-223344556677',
    userId: '1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
    placeId: '5',
    rating: 5,
    comment: 'The curries are bursting with flavor! Felt like a home-cooked meal in Malaysia.',
    createdAt: new Date('2024-12-20'),
  },
  {
    id: 'b6c7d8e9-f012-2345-bcde-334455667788',
    userId: '2b3c4d5e-6f7a-8b9c-0d1e-2f3a4b5c6d7e',
    placeId: '5',
    rating: 4,
    comment: 'Cozy atmosphere and super friendly staff. The laksa was my favorite!',
    createdAt: new Date('2024-12-25'),
  },
  {
    id: 'c7d8e9f0-1234-3456-cdef-445566778899',
    userId: '3c4d5e6f-7a8b-9c0d-1e2f-3a4b5c6d7e8f',
    placeId: '5',
    rating: 5,
    comment: 'Authentic Malaysian food in Munich! Highly recommend the beef rendang.',
    createdAt: new Date('2024-12-29'),
  },
  {
    id: 'd8e9f012-3456-4567-def0-556677889900',
    userId: '4d5e6f7a-8b9c-0d1e-2f3a-4b5c6d7e8f9a',
    placeId: '5',
    rating: 4,
    comment: 'Great value for money and the portions are generous. Will come again!',
    createdAt: new Date('2025-01-02'),
  },
  {
    id: 'e9f01234-5678-5678-ef01-667788990011',
    userId: '5e6f7a8b-9c0d-1e2f-3a4b-5c6d7e8f9a0b',
    placeId: '5',
    rating: 5,
    comment: 'Felt like dining with family. The sambal was spicy and delicious!',
    createdAt: new Date('2025-01-08'),
  },
  {
    id: 'f2a3b4c5-d6e7-8901-abcd-778899001122',
    userId: '7e8f9a0b-1c2d-3e4f-5a6b-7c8d9e0f1a2b',
    placeId: '6',
    rating: 5,
    comment: 'The slide is so much fun! A must-try if you visit TUM Garching.',
    createdAt: new Date('2024-12-21'),
  },
  {
    id: 'a3b4c5d6-e7f8-9012-bcde-889900112233',
    userId: '8f9a0b1c-2d3e-4f5a-6b7c-8d9e0f1a2b3c',
    placeId: '6',
    rating: 4,
    comment: 'Unique experience! The architecture is impressive and the ride is thrilling.',
    createdAt: new Date('2024-12-26'),
  },
  {
    id: 'b4c5d6e7-f890-1234-cdef-990011223344',
    userId: '9a0b1c2d-3e4f-5a6b-7c8d-9e0f1a2b3c4d',
    placeId: '6',
    rating: 5,
    comment: 'Great for students and visitors alike. Never gets old!',
    createdAt: new Date('2024-12-30'),
  },
  {
    id: 'c5d6e7f8-9012-2345-def0-001122334455',
    userId: '0b1c2d3e-4f5a-6b7c-8d9e-0f1a2b3c4d5e',
    placeId: '6',
    rating: 4,
    comment: 'Fun way to get from one floor to another. The kids loved it!',
    createdAt: new Date('2025-01-03'),
  },
  {
    id: 'd6e7f890-1234-3456-ef01-112233445566',
    userId: '1c2d3e4f-5a6b-7c8d-9e0f-1a2b3c4d5e6f',
    placeId: '6',
    rating: 5,
    comment: 'A real highlight of the campus. The slide is both fun and iconic!',
    createdAt: new Date('2025-01-08'),
  },
];