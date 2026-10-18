export type ContactValues = { name: string; email: string; reason: string };

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | {
      status: "error";
      message?: string;
      fieldErrors?: Partial<Record<keyof ContactValues, string>>;
      values: ContactValues;
    };
