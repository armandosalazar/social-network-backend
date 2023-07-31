module.exports = require("express")
  .Router()
  .get("/", (req, res) => {
    const subjects = [
      {
        id: 1,
        name: "Math",
        description:
          'Mathematics is the study of numbers, shapes and patterns. The word comes from the Greek word "μάθημα" (máthema), meaning "science, knowledge, or learning", and is sometimes shortened to maths (in England, Australia, Ireland, and New Zealand) or math (in the United States and Canada).',
        image:
          "https://cdn.pixabay.com/photo/2016/02/19/11/19/math-1209810_960_720.jpg",
      },
      {
        id: 2,
        name: "Science",
        description:
          "Science is the pursuit and application of knowledge and understanding of the natural and social world following a systematic methodology based on evidence.",
        image:
          "https://cdn.pixabay.com/photo/2017/08/10/07/32/science-2614388_960_720.jpg",
      },
      {
        id: 3,
        name: "English",
        description:
          "English is a West Germanic language that was first spoken in early medieval England and eventually became a global lingua franca.",
        image:
          "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_960_720.jpg",
      },
      {
        id: 4,
        name: "History",
        description:
          "History is the study of the past as it is narrated in written documents. Events occurring before written record are considered prehistory.",
        image:
          "https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg",
      },
      {
        id: 5,
        name: "Geography",
        description:
          "Geography is a field of science devoted to the study of the lands, features, inhabitants, and phenomena of the Earth and planets.",
        image:
          "https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg",
      },
      {
        id: 6,
        name: "Art",
        description:
          "Art is a diverse range of human activities involving the creation of visual, auditory or performing artifacts (artworks), which express the creator's imagination, conceptual ideas, or technical skill, intended to be appreciated primarily for their beauty or emotional power.",
        image:
          "https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg",
      },
      {
        id: 7,
        name: "Music",
        description:
          'Music is an art form and cultural activity whose medium is sound organized in time. General definitions of music include common elements such as pitch (which governs melody and harmony), rhythm (and its associated concepts tempo, meter, and articulation), dynamics (loudness and softness), and the sonic qualities of timbre and texture (which are sometimes termed the "color" of a musical sound).',
        image:
          "https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg",
      },
      {
        id: 8,
        name: "Physical Education",
        description:
          "Physical education, also known as Phys Ed., PE, gym, or gym class, and in some Commonwealth countries as physical training or PT, is a class that pupils are required to take at school.",
        image:
          "https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg",
      },
    ];
    res.send(subjects);
  });
