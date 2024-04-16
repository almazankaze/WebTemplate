const ROOTS_HOME = "/";

function path(root, sublink) {
  return `${root}${sublink}`;
}

export const APP_PATH = {
  root: ROOTS_HOME,
  general: {
    about: path(ROOTS_HOME, "about"),
    contact: path(ROOTS_HOME, "contact"),
  },
};
