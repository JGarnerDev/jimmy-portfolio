import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import about from "./about";
import brand from "./brand";
import contact from "./contact";
import cityandlifestylePhoto from "./cityandlifestyle-photo";
import portraiturePhoto from "./portraiture-photo";

import splashpagePhoto from "./splashpage-photo";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    about,
    brand,
    contact,
    cityandlifestylePhoto,
    portraiturePhoto,

    splashpagePhoto,
  ]),
});
