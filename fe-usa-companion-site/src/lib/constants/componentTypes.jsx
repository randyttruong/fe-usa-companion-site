/* 
 * This is a file that defines all of the different components  
 * that a user can make for any given page. 
 */
export default componentTypes = {
  "HomePage": {
    components: [
      {
        name: "header",
        description: "A header that proudly displays text.",
      },
      {
        name: "body",
        description: "A header that proudly displays text.",
      },
      {
        name: "header",
        description: "A header that proudly displays text.",
      },
      {
        name: "header",
        description: "A header that proudly displays text.",
      },
      "body",
      "media",
      "form",
    ]
  },
  "AboutUs": {
    components: [
      "profileCard"
    ]
  },
  "ContactUs": {
    components: [
      "image"
    ]
  },
  "GetInvolved": {
    components: [
      "header",
      "body",
      "media",
      "button",
    ],
  },
  "Sponsors": {
    components: [
      "sponsorCard",
    ]
  }
}
