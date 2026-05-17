import { faker } from "@faker-js/faker";

export const generateBook = () => {
  return {
    title: `Test book ${faker.word.words(2)}`,
    author: faker.person.fullName(),
  };
};
