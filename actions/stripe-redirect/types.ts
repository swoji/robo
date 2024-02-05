import { z } from "zod";

import { ActionState } from "@/create-safe-action";

import { StripeRedirect } from "./schema";

export type InputType = z.infer<typeof StripeRedirect>;
export type ReturnType = ActionState<InputType, string>;
