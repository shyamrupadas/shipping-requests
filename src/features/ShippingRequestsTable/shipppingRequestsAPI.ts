import { POINTS } from "../../DB";

export const fetchCurrentRequestPoints = (ids: string[]) => {
  return new Promise((resolve) =>
    setTimeout(
      () => resolve(ids.map((id) => POINTS.find((point) => point.id === id))),
      200
    )
  );
};

export const fetchRequestPoints = () => {
  return new Promise((resolve) => setTimeout(() => resolve(POINTS), 200));
};
