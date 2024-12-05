//Grouping and Summing with reduce()

function countCategories(categories) {
    const categoryCounts = categories.reduce((counts, category) => {
        counts[category] = (counts[category] || 0) + 1;
        return counts;
    }, {});

    // Extra Challenge: Sort categories by count in descending order
    const sortedCategories = Object.entries(categoryCounts)
        .sort((a, b) => b[1] - a[1])
        .map(([category, count]) => ({ category, count }));

    return sortedCategories;
}

// Example usage:
const categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];
const result = countCategories(categories);
console.log(result);