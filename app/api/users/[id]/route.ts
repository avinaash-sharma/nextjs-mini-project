import { NextResponse } from "next/server";

import User from "@/database/user.model";
import handleError from "@/lib/handlers/error";
import { NotFoundError } from "@/lib/http-errors";
import dbConnect from "@/lib/mongoose";
import { UserSchema } from "@/lib/validations";
import { APIErrorResponse } from "@/types/global";

// GET BY ID : /api/users/[id]
export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!id) throw new NotFoundError("User");

  try {
    await dbConnect();
    const user = await User.findById(id);
    if (!id) throw new NotFoundError("User");

    return NextResponse.json({ success: true, data: user }, { status: 201 });
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}

// PUT

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!id) throw new NotFoundError("User");
  await dbConnect();

  const body = await request.json();
  const validatedData = UserSchema.partial().parse(body);

  const updatedUser = await User.findByIdAndUpdate(id, validatedData, {
    new: true, // if we dont pass 'new: true' it will return the old data
  });

  if (!updatedUser) throw new NotFoundError("User");

  return NextResponse.json(
    { success: true, data: updatedUser },
    { status: 200 }
  );
}

// DELETE
export async function DELETE(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const isExistingUser = await User.findById(id);

  if (!isExistingUser) throw new NotFoundError("User");

  try {
    const userToBeDeleted = await User.findByIdAndDelete(id);
    return NextResponse.json(
      { success: true, data: userToBeDeleted },
      { status: 200 }
    );
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}
