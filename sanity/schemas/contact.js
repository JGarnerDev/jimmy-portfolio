export default {
  name: "contactInfo",
  title: "Contact Info",
  type: "document",
  fields: [
    {
      name: "text",
      title: "Text",
      type: "string",
      description: "A sentence or two encouraging clients to contact you",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      description: "Email where people can contact you",
    },

    {
      name: "instagram",
      title: "Instagram link",
      type: "url",
      description: "Link to your Instagram account",
    },
  ],
};
