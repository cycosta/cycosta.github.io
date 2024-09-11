import { Section } from './Header.types';

export const listItems: Section[] = [
  { label: "Hi, I'm", id: 'about', anchor: '#', dark: false },
  { label: 'Experience', id: 'experience', anchor: '#experience', dark: true },
  {
    label: 'Code Snippets',
    id: 'code',
    anchor: '#code',
    dark: false,
  },
  {
    label: 'People are saying',
    id: 'featured',
    anchor: '#featured',
    dark: false,
  },
  { label: "Let's talk", id: 'contact', anchor: '#contact', dark: true },
];
