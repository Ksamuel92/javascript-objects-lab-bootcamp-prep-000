const recipes = {
  Spices: [salt, pepper, 'garlic powder'],
  Protein: chicken,
  Vegetable: kale
}

function updateObjectWithKeyAndValue (obj, key, value) {
  var newObject = Object.assign({}, obj, {[key]:value});
  return obj;
  return newObject;
}

