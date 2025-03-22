export const ROUTES = {
  HOME: "/",
  SIGN_UP: "/sign-up",
  SIGN_IN: "/sign-in",
  NOT_FOUND: "/404",
  PROFILE: (id: string) => `profile/${id}`,
  QUESTION: (id: string) => `question/${id}`,
  TAGS: (id: string) => `tags/${id}`,
};
