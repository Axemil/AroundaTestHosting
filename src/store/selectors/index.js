export const reactSelectOptionsFromTags = tags => [
  { value: '/blog', label: 'All' },

  ...tags.map(tag => ({
    value: `/blog?tag=${tag}`,
    label: tag,
  })),
];
