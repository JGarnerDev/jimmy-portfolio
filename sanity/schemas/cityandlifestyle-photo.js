export default {
  name: "cityandlifestyle",
  title: "City and Lifestyle Photos",
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
      description: "File of photo",
      options: { hotspot: true },
    },
  ],
};
