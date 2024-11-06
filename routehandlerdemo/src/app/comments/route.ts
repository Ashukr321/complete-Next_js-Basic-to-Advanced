import { comments } from "./data";

export function GET(){
  return  Response.json(comments);
}