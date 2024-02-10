const filters = [
  {
    title: "Categories",
    name: "categories",
    values: [
      "Bible and Scripture",
      "Books and Literature",
      "Jewelry and Accessories",
      "Apparel and Clothings",
      "Art and Decor",
      "Music and Worship",
      "Church Appliances",
      "Prayer and Devotional Tools",
      "Seasonal Items",
    ],
    checkbox: true,
  },
  {
    title: "Price",
    name: "price",
    values: [
      "Under GHS10",
      "GHS10 to GHS20",
      "GHS20 to GHS30",
      "GHS30 to GHS40",
      "GHS40 to GHS50",
    ],
    checkbox: false,
  },
  {
    title: "Flexibility",
    name: "flexibility",
    values: ["Negotiable", "Non-Negotiable"],
    checkbox: false,
  },
  {
    title: "Product Condition",
    name: "condition",
    values: ["Brand New", "New but not in box", "Fairly Used", "Used"],
    checkbox: false,
  },
  {
    title: "Style",
    name: "style",
    values: ["Traditional", "Modern", "Contemporary", "Inspirational"],
    checkbox: true,
  },
  {
    title: "Format",
    name: "format",
    values: ["Hardback", "Paperback", "Digital"],
    checkbox: true,
  },
  {
    title: "Language",
    name: "language",
    values: ["English", "Chinese"],
    checkbox: false,
  },
  {
    title: "Size",
    name: "size",
    values: ["Small", "Medium", "Large", "Extra Large"],
    checkbox: false,
  },
];

export default filters;
