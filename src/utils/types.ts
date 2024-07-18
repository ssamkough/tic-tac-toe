export type BoardValue = "X" | "O" | null | undefined;

export type BoardPlayerValue = Extract<BoardValue, "X" | "O">;

export type BoardState = BoardValue[][];
