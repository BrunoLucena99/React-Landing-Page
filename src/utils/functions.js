export const randomSectionId = () =>
  `id-${Math.random() * 10000}`.replace(/[^a-z0-9-_]/gi, '-');
