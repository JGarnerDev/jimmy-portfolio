export default {
  name: "about",
  title: "About page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Title at the top of the page, beginning the dialogue",
    },
    {
      name: "text",
      title: "Text",
      type: "array",
      of: [{ type: "block" }],

      description: "The main body of text on the about page",
    },
  ],
};
