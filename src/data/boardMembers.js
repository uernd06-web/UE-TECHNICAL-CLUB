// // data/board-members.js

// export const boardMembers = [
//   {
//     id: "chairman",
//     name: "Engr. Sheikh Rafat Bin Ali",
//     title: "Chairman",
//     image: "/ceo.png", // replace with real image path
//     level: 0,
//   },
//   {
//     id: "cpo",
//     name: "Engr. Fahim Shahrier Khan",
//     title: "CPO",
//     image: "/Engr FAhim Shahrier Khan (2).png",
//     level: 1,
//     parentId: "chairman",
//   },
//   {
//     id: "crdo",
//     name: "Engr. Sayed Bin Osman",
//     title: "Chief Research & Development Officer",
//     image: "/Engr. Sayed Bin Osman.jpg",
//     level: 1,
//     parentId: "chairman",
//   },
// ];

// // Fixed design-size canvas (px). The whole canvas is scaled up/down
// // as one block via CSS transform in BoardOfDirectors.jsx, so every
// // element (photos, badges, lines) always keeps its exact proportion
// // to each other — nothing gets clipped or distorted at small sizes.
// export const CANVAS_WIDTH = 900;
// export const CANVAS_HEIGHT = 420;

// export const nodePositions = {
//   chairman: { x: 450, y: 0 },
//   cpo: { x: 225, y: 250 },
//   crdo: { x: 675, y: 250 },
// };

// export const BRANCH_Y = 210; // where the horizontal connector line sits



// data/board-members.js

export const boardMembers = {
  chairman: {
    id: "chairman",
    name: "Engr. Sheikh Rafat Bin Ali",
    title: "Chairman",
    image: "/ceo.png", // replace with real image path
  },
  cpo: {
    id: "cpo",
    name: "Engr. Fahim Shahrier Khan",
    title: "CPO",
    image: "/Engr FAhim Shahrier Khan (2).png",
  },
  crdo: {
    id: "crdo",
    name: "Engr. Sayed Bin Osman",
    title: "Chief Research & Development Officer",
    image: "/Engr. Sayed Bin Osman.jpg",
  },
};