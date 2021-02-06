const recipes = {
  Spices: [salt, pepper, 'garlic powder'],
  Protein: chicken,
  Vegetable: kale
}

function updateObjectWithKeyAndValue (obj, key, value) {
   return Object.Assign({}, obj, {[key]: value});
  
}

