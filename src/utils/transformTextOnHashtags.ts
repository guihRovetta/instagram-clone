export const transformTextOnHashtags = (text: string, numberOfHashtags = 5) => {
  const formattedText = formatText(text);
  const words = formattedText?.split(' ');

  const uniqueWords = removeDuplicateItems(words);
  const shuffledWords = shuffleWords(uniqueWords);
  const selectedWords = shuffledWords?.slice(
    0,
    numberOfHashtags < shuffledWords?.length
      ? numberOfHashtags
      : shuffledWords?.length
  );

  const hashtags = selectedWords?.map((word) => `#${word}`);
  return hashtags;
};

const formatText = (text: string) => {
  return text?.replace(/[^a-zA-Z ]/g, '')?.toLowerCase();
};

const removeDuplicateItems = (words: string[]) => {
  return [...new Set(words)];
};

const shuffleWords = (words: string[]) => {
  for (let i = words.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    const temp = words[i];
    words[i] = words[j];
    words[j] = temp;
  }

  return words;
};
