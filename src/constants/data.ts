const Items = [
  {
    id: 1,
    category: "vegetable",
    name: "Carrot",
    image:
      "https://images.unsplash.com/photo-1590868309235-ea34bed7bd7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fycm90fGVufDB8fDB8fHww",
    price: 500,
    description: "A crunchy and sweet root vegetable rich in beta-carotene.",
  },
  {
    id: 2,
    category: "vegetable",
    name: "Tomato",
    image:
      "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG9tYXRvfGVufDB8fDB8fHww",
    price: 700,
    description: "A juicy red fruit often used as a vegetable in cooking.",
  },
  {
    id: 3,
    category: "vegetable",
    name: "Spinach",
    image:
      "https://images.unsplash.com/photo-1578283326173-fbb0f83b59b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BpbmFjaHxlbnwwfHwwfHx8MA%3D%3D",
    price: 800,
    description: "A leafy green vegetable packed with iron and vitamins.",
  },
  {
    id: 4,
    category: "vegetable",
    name: "Potato",
    image:
      "https://images.unsplash.com/photo-1590165482129-1b8b27698780?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG90YXRvfGVufDB8fDB8fHww",
    price: 1200,
    description: "A starchy tuber that is a staple food in many cuisines.",
  },
  {
    id: 5,
    category: "vegetable",
    name: "Onion",
    image:
      "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b25pb258ZW58MHx8MHx8fDA%3D",
    price: 1000,
    description: "A pungent vegetable used to enhance the flavor of dishes.",
  },
  {
    id: 6,
    category: "vegetable",
    name: "Cabbage",
    image:
      "https://plus.unsplash.com/premium_photo-1675731118699-5b19e3556f88?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FiYmFnZXxlbnwwfHwwfHx8MA%3D%3D",
    price: 900,
    description: "A leafy green vegetable often used in salads and stir-fries.",
  },
  {
    id: 7,
    category: "vegetable",
    name: "Green Pepper",
    image:
      "https://images.unsplash.com/photo-1585159079680-8dec029b76ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JlZW4lMjBwZXBwZXJ8ZW58MHx8MHx8fDA%3D",
    price: 600,
    description: "A crunchy and mildly spicy vegetable used in many dishes.",
  },
  {
    id: 8,
    category: "vegetable",
    name: "Okra",
    image:
      "https://images.unsplash.com/photo-1558408525-1092038389ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2tyYXxlbnwwfHwwfHx8MA%3D%3D",
    price: 500,
    description: "A green pod vegetable used in soups and stews.",
  },
  {
    id: 9,
    category: "vegetable",
    name: "Lettuce",
    image:
      "https://images.unsplash.com/photo-1533321942807-08e4008b2025?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxldHR1Y2V8ZW58MHx8MHx8fDA%3D",
    price: 700,
    description: "A leafy vegetable commonly used in salads and sandwiches.",
  },
  {
    id: 10,
    category: "vegetable",
    name: "Cucumber",
    image:
      "https://plus.unsplash.com/premium_photo-1675731118289-51dd7342984e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y3VjdW1iZXJ8ZW58MHx8MHx8fDA%3D",
    price: 500,
    description: "A refreshing, hydrating vegetable often eaten raw.",
  },
  {
    id: 11,
    category: "fruit",
    name: "Banana",
    image:
      "https://images.unsplash.com/photo-1603833665858-e61d17a86224?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 800,
    description: "A sweet and energy-rich fruit packed with potassium.",
  },
  {
    id: 12,
    category: "fruit",
    name: "Apple",
    image:
      "https://plus.unsplash.com/premium_photo-1661322640130-f6a1e2c36653?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGV8ZW58MHx8MHx8fDA%3D",
    price: 1200,
    description: "A juicy and crunchy fruit available in different varieties.",
  },
  {
    id: 13,
    category: "fruit",
    name: "Orange",
    image:
      "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b3JhbmdlfGVufDB8fDB8fHww",
    price: 700,
    description: "A citrus fruit rich in vitamin C and antioxidants.",
  },
  {
    id: 14,
    category: "fruit",
    name: "Watermelon",
    image:
      "https://images.unsplash.com/photo-1621961048737-a9993789e1ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2F0ZXJtZWxvbnxlbnwwfHwwfHx8MA%3D%3D",
    price: 2500,
    description:
      "A large, juicy fruit with a refreshing taste and high water content.",
  },
  {
    id: 15,
    category: "fruit",
    name: "Pineapple",
    image:
      "https://images.unsplash.com/photo-1550828520-4cb496926fc9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGluZWFwcGxlfGVufDB8fDB8fHww",
    price: 1800,
    description: "A tropical fruit with a sweet and tangy flavor.",
  },
  {
    id: 16,
    category: "fruit",
    name: "Mango",
    image:
      "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TWFuZ298ZW58MHx8MHx8fDA%3D",
    price: 1000,
    description: "A juicy and sweet tropical fruit packed with vitamins.",
  },
  {
    id: 17,
    category: "fruit",
    name: "Grapes",
    image:
      "https://images.unsplash.com/photo-1578829779691-99b60bd8c7be?q=80&w=767&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 2000,
    description: "Small, sweet, and juicy fruits often eaten fresh or dried.",
  },
  {
    id: 18,
    category: "fruit",
    name: "Papaya",
    image:
      "https://plus.unsplash.com/premium_photo-1675639895212-696149c275f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFwYXlhfGVufDB8fDB8fHww",
    price: 1500,
    description: "A tropical fruit with a soft, sweet flesh rich in fiber.",
  },
  {
    id: 19,
    category: "fruit",
    name: "Pawpaw",
    image:
      "https://images.unsplash.com/photo-1697578760830-9e61ec23d29f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGF3cGF3fGVufDB8fDB8fHww",
    price: 1500,
    description:
      "A soft and sweet fruit with a rich flavor and high vitamin C content.",
  },
  {
    id: 20,
    category: "fruit",
    name: "Coconut",
    image:
      "https://plus.unsplash.com/premium_photo-1675040830227-9f18e88fd1f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29jb251dHxlbnwwfHwwfHx8MA%3D%3D",
    price: 1000,
    description: "A tropical fruit with refreshing water and nutritious flesh.",
  },
];

export default Items;
