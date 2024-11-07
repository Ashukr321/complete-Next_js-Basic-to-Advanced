import { comments } from "../data"


export function GET(request:Request,{params}:{params:{id:string}}){
  try {
    const comment= comments.find((comment)=>{
      return comment.id== parseInt(params.id);
    })
    if(comment==null){
      throw new  Error("Comment not found");
    }
    return new Response(JSON.stringify(comment));
  } catch (error:string|any) {
    return new Response(JSON.stringify(error.message));
  }
}


export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    // Find the comment
    const commentIndex = comments.findIndex((comment) => {
      return comment.id === parseInt(params.id);
    });

    if (commentIndex === -1) {
      return new Response(JSON.stringify({ error: "Comment not found" }), { status: 404 });
    }

    // Get text from body
    const body = await request.json();
    if (!body.text) {
      return new Response(JSON.stringify({ error: "Text is required" }), { status: 400 });
    }

    // Update the comment
    const updatedComment = {
      id: comments[commentIndex].id,
      text: body.text,
    };

    comments[commentIndex] = updatedComment;

    return new Response(JSON.stringify(updatedComment), { status: 200 });

  } catch (error: unknown) {
    if (error instanceof Error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
    return new Response(JSON.stringify({ error: "An unknown error occurred" }), { status: 500 });
  }
}

export function DELETE(request:Request,{params}:{params:{id:string}}){
  try {
    
  
  const index= comments.findIndex((comment)=>{
    return comment.id==parseInt(params.id);
  })
  if(index==-1){
    return new Response(JSON.stringify({error:"Comment not found"}),{status:404})
  }
  const deletedComment = comments.splice(index,1);
  return new Response(JSON.stringify( deletedComment));
 }catch (error) {
    return new Response(JSON.stringify(error.message));
  }
}