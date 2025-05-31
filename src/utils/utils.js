
// Remove Hashnode logic and integrate Medium.com RSS feed

export const getArticlesData = async () => {
  const mediumUsername = "kazalchandrabarman"; // Replace with your Medium username
  const rssFeedUrl = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUsername}`;

  try {
    const response = await fetch(rssFeedUrl);
    const data = await response.json();
    // data.items contains the articles
    return data.items || [];
  } catch (error) {
    console.error("Failed to fetch Medium articles:", error);
    return [];
  }
};

// Newsletter subscription is not supported by Medium API, so you may want to disable or update this function.
export const subscribeToNewsletter = async (email) => {
  // You can integrate with a third-party newsletter service here (e.g., Mailchimp, ConvertKit)
  // For now, just throw an error or return a message.
  throw new Error("Newsletter subscription is not supported for Medium.com blogs.");
};
