export type JsonType = {
  instruction: InstuctionType[];
};
type InstuctionType = {
  name: string | null;
  type: string;
  identifiant: string;
  wait: number | null;
};
