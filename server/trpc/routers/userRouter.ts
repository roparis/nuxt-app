import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const userRouter = router({
  findAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
      },
    });
  }),
});

// export type definition of API
export type userRouter = typeof userRouter;
