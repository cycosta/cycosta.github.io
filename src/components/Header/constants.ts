import { Section } from './Header.types';

export const listItems: Section[] = [
  { label: "Hi, I'm", id: 'about', anchor: '#', dark: false },
  { label: 'Work', id: 'work', anchor: '#work', dark: true },
  {
    label: 'Side Projects',
    id: 'projects',
    anchor: '#projects',
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
