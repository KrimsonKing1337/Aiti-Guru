declare module '*.scss' {
  const classes: { [key: string]: string };
  export = classes;
}

declare module '*.svg' {
  const content: string;
  export default content;
}
