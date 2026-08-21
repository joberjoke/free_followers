// Simple ethical hashtag generator - doesn't violate any platform
const hashtags = {
  fashion: ["#ootdindia", "#chennaifashion", "#styleinspo"],
  gaming: ["#indiangamer", "#bgmiindia", "#gamingreels"],
  fitness: ["#chennaifitness", "#desifitness", "#gymmotivation"]
};

function getHashtags(niche) {
  return hashtags[niche] || ["#instagood", "#explorepage", "#trending"];
}

console.log(getHashtags("gaming"));
