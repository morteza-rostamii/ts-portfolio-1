
export const truncateText = (len:number, text:string) => {
  let subtext = text;
  if (text.length > len) {
    subtext = text.slice(0, len);
    subtext = subtext + '...';
  }
  return subtext;
};