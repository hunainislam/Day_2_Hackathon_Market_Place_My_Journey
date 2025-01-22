// Shop Schemas For Sanity

export const Shop =  {
    name: "shopherosection",
    title: "Shop Hero Section",
    type: "document",
    fields: [
      {
        name: "hero1image",
        title: "Hero 1 Image",
        type: "image",
      },
      {
        name: "logo",
        title: "Logo",
        type: "image",
      },
      {
        name: "shop",
        title: "Shop",
        type: "string",
      },
      {
        name: "home",
        title: "Home",
        type: "string",
      },
      {
        name: "imagerightarrow",
        title: "Image Right Arrow",
        type: "image",
      },
      {
        name: "shopone",
        title: "Shop One",
        type: "string",
      },
      {
        name: "uicons",
        title: "U ICons",
        type: "image",
      },
      {
        name: "filter",
        title: "Filter",
        type: "string",
      },
      {
        name: "cigrid",
        title: "CI Grid",
        type: "image",
      },
      {
        name: "viewlist",
        title: "View List",
        type: "image",
      },
      {
        name: "showingresults",
        title: "Showing Results",
        type: "string",
      },
      {
        name: "show",
        title: "Show",
        type: "string",
      },
      {
        name: "sixteen",
        title: "16",
        type: "number",
      },
      {
        name: "shortby",
        title: "Short By",
        type: "string",
      },
      {
        name: "default",
        title: "Default",
        type: "string",
      },
    ],
}

// Contact Schemas For Sanity

export const Contact = {
    name: "contact",
    title: "Contact",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "content",
            title: "Content",
            type: "text",
        },
        {
            name: "mapimage",
            title: "Map Image",
            type: "image"
        },
        {
            name: "address",
            title: "Address",
            type: "string",
        },
        {
            name: "unitedstates",
            title: "United States",
            type: "string",
        },
        {
            name: "phoneimage",
            title: "Phone Image",
            type: "image",
        },
        {
            name: "phone",
            title: "Phone",
            type: "string",
        },
        {
            name: "mobile",
            title: "Mobile",
            type: "string",
        },
        {
            name: "hotline",
            title: "Hotline",
            type: "string",
        },
        {
            name: "timeimage",
            title: "Time Image",
            type: "image",
        },
        {
            name: "workingtime",
            title: "Working Time",
            type: "string",
        },
        {
            name: "mondayfriday",
            title: "Monday Friday",
            type: "string",
        },
        {
            name: "saturdaysunday",
            title: "Saturday Sunday",
            type: "string",
        },
        {
            name: "yourname",
            title: "Your Name",
            type: "string",
        },
        {
            name: "emailaddress",
            title: "Email Address",
            type: "string",
        },
        {
            name: "subject",
            title: "Subject",
            type: "string",
        },
        {
            name: "message",
            title: "Message",
            type: "string",
        },
        {
            name: "sumbit",
            title: "Sumbit",
            type: "string",
        }
    ]
}

// Blog Schemas For Sanity

export const Blog = {
    name: "blog",
    title: "Blog",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "blogimage",
            title: "Blog Image",
            type: "image",
        },
        {
            name: "date",
            title: "Date",
            type: "string",
        },
        {
            name: "author",
            title: "Author",
            type: "string",
        },
        {
            name: "tag",
            title: "Tag",
            type: "string",
        },
        {
            name: "excerpt",
            title: "Excerpt",
            type: "text",
        },
        {
            name: "title1",
            title: "Title 1",
            type: "string",
        },
        {
            name: "recentimage",
            title: "Recent Image",
            type: "image",
        },
        {
            name: "recentdate",
            title: "Recent Date",
            type: "string"
        },
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "count",
            title: "Count",
            type: "number",
        },
        {
            name: "buttonText",
            title: "Button Text",
            type: "string", 
        },
        {
            name: "recentposts",
            title: "Recent Posts",
            type: "string"
        },
        {
            name: "categories",
            title: "Categories",
            type: "string"
        }
    ]
}

// Cart Schemas For Sanity

export const Cart = {
    name: "cart",
    title: "Cart",
    type: "document",
    fields: [
        {
            name: "product",
            title: "Product",
            type: "string",
        },
        {
            name: "price",
            title: "Price",
            type: "string",
        },
        {
            name: "quantity",
            title: "Quantity",
            type: "string",
        },
        {
            name: "subtotal",
            title: "Subtotal",
            type: "string",
        },
        {
            name: "deleteimage",
            title: "Delete Image",
            type: "image",
        },
        {
            name: "carttotal",
            title: "Cart Total",
            type: "string",
        },
        {
            name: "subtotaltext",
            title: "Subtotal Text",
            type: "string",
        },
        {
            name: "total",
            title: "Total",
            type: "string",
        },
        {
            name: "checkout",
            title: "Checkout",
            type: "string",
        }
    ]
}

// Comparison Schemas For Sanity

export const Comparison = {
    name: "productcomparison",
    title: "Product Comparison",
    type: "document",
    fields: [
      {
        name: "gotoproduct",
        title: "Go to Product",
        type: "string",
      },
      {
        name: "pageformore",
        title: "Page For More",
        type: "string",
      },
      {
        name: "products",
        title: "Products",
        type: "string",
      },
      {
        name: "viewmore",
        title: "View More",
        type: "string",
      },
      {
        name: "sofaoneimage",
        title: "Sofa One Image",
        type: "image",
      },
      {
        name: "asgaardsofa",
        title: "Asgaard Sofa",
        type: "string",
      },
      {
        name: "rsOne",
        title: "Rs. One",
        type: "string",
      },
      {
        name: "reviewsOne",
        title: "Reviews One",
        type: "string",
      },
      {
        name: "sofatwoimage",
        title: "Sofa Two Image",
        type: "image",
      },
      {
        name: "outdoorsofaset",
        title: "Outdoor Sofa Set",
        type: "string",
      },
      {
        name: "rsTwo",
        title: "Rs. Two",
        type: "string",
      },
      {
        name: "reviewsTwo",
        title: "Reviews Two",
        type: "string",
      },
      {
        name: "addProduct",
        title: "Add A Product",
        type: "string",
      },
      {
        name: "chooseProduct",
        title: "Choose a Product",
        type: "string",
      },
      {
        name: "specification",
        title: "Specification",
        type: "string",
      },
      {
        name: "addAsgaardSofaToCart",
        title: "Add Asgaard Sofa to Cart",
        type: "string",
      },
      {
        name: "addOutdoorSofaToCart",
        title: "Add Outdoor Sofa to Cart",
        type: "string",
      },
      {
        name: "sectionsReference",
        title: "Sections Reference",
        type: "array",
        of: [
          {
            type: "reference",
            to: [{ type: "sections" }],
          },
        ],
      },
    ],
  };

  
  