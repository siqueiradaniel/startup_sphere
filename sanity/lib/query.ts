import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = 
    defineQuery(` *[_type == "startup" && defined(slug.current)] | order(_createAt desc) {
  _id, 
  title,
  slug,
  author -> {
    _id, name, bio, image
  },
  _createAt,
  views, 
  description, 
  category, 
  image
 }`);