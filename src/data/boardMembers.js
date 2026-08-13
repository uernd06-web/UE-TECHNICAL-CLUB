// data/board-members.js

export const boardMembers = [
  {
    id: "chairman",
    name: "Engr. Sheikh Rafat Bin Ali",
    title: "Chairman",
    image: "/team/chairman.jpg", // replace with real image path
    level: 0,
  },
  {
    id: "cpo",
    name: "Engr. Fahim Shahrier Khan",
    title: "CPO",
    image: "/team/fahim.jpg",
    level: 1,
    parentId: "chairman",
  },
  {
    id: "crdo",
    name: "Engr. Sayed Bin Osman",
    title: "Chief Research & Development Officer",
    image: "/team/sayed.jpg",
    level: 1,
    parentId: "chairman",
  },
];

// Layout coordinates inside a 900 x 420 canvas (px). Tweak freely.
export const nodePositions = {
  chairman: { x: 450, y: 0 },
  cpo: { x: 225, y: 250 },
  crdo: { x: 675, y: 250 },
};

export const CANVAS_WIDTH = 900;
export const CANVAS_HEIGHT = 420;
export const BRANCH_Y = 210; // where the horizontal connector line sits