import React from 'react';

const emojis = [
  '🍕',
  '🥔',
  '🤯',
  '🔥',
  '👨‍🚀',
  '🚀',
  '👾',
  '👨‍💻',
  '✍',
  '🖖',
  '🧙‍♂️',
];

const getRandomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)];

// Get a random emoji every `timeout` 😏😏😏
export const useRandomEmoji = (timeout = 5000) => {
  const [emoji, setEmoji] = React.useState(getRandomEmoji());

  React.useEffect(() => {
    const interval = setInterval(() => setEmoji(getRandomEmoji()), timeout);

    return () => clearInterval(interval);
  });

  return emoji;
};
