import { TComment } from "./nestedComments.types";

export const sortCommentsByDateDesc = (arr: TComment[]) => {
  const copy = [...arr];
  const sorted = copy.sort((c1:any, c2:any) => {
    const date1:any = new Date(c1.createdAt);
    const date2:any = new Date(c2.createdAt);
    console.log(date1.getTime(), date2.getTime())
    return  date2.getTime() - date1.getTime();
  });
  return sorted;
};