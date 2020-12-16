export default {
  name: "splashpagePhoto",
  title: "Splashpage Photos",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Name of the photo",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      description: "Description of the photo",
    },
    {
      name: "photo",
      title: "Photo",
      type: "image",
      description: "File of photo that you want included in the front page",
      options: { hotspot: true },
    },
  ],
};
