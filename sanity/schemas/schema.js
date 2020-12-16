import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import about from "./about";
import brand from "./brand";
import contact from "./contact";
import lifestylePhoto from "./lifestyle-photo";
import locationPhoto from "./location-photo";
import portraiturePhoto from "./portraiture-photo";
import productPhoto from "./product-photo";
import splashpagePhoto from "./splashpage-photo";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    about,
    brand,
    contact,
    lifestylePhoto,
    locationPhoto,
    portraiturePhoto,
    productPhoto,
    splashpagePhoto,
  ]),
});
