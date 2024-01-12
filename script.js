function mostFrequentItemCount(collection) {
    if (collection.length === 0) {
      return 0;
    }
  
    // Use an object to store the count of each unique item
    const countMap = {};
  
    // Iterate through the collection and update the countMap
    collection.forEach((item) => {
      countMap[item] = (countMap[item] || 0) + 1;
    });
  
    // Find the maximum count in the countMap
    const maxCount = Math.max(...Object.values(countMap));
  
    return maxCount;
  }
  
  // Example usage:
  const inputCollection = [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3];
  const result = mostFrequentItemCount(inputCollection);
  console.log(result); // Output: 5
  

  // other way
  function mostFrequentItemCount(collection) {
    // Check if the collection is empty, and return 0 if true
    if (collection.length === 0) return 0;
  
    // Create an empty object to store the count of each unique item
    var count = Object.create(null);
  
    // Iterate through the collection array using forEach
    collection.forEach(item => {
      // Update the count object for each unique item
      count[item] = (count[item] || 0) + 1;
    });
  
    // Find the maximum count among all unique items in the count object
    return Math.max(...Object.values(count));
  }
  