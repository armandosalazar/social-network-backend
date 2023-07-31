const { Router } = require("express");

const notifications = [
  {
    id: 1,
    title: "asdasd",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nisl vitae nisl.",
    date: "2020-01-01",
  },
  {
    id: 2,
    title: "xsss",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nisl vitae nisl.",
    date: "2020-01-01",
  },
  {
    id: 3,
    title: "asdasd",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nisl vitae nisl.",
    date: "2020-01-01",
  },
  {
    id: 4,
    title: "xsss",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nisl vitae nisl.",
    date: "2020-01-01",
  },
  {
    id: 5,
    title: "asdasd",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nisl vitae nisl.",
    date: "2020-01-01",
  },
  {
    id: 1,
    title: "asdasd",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nisl vitae nisl.",
    date: "2020-01-01",
  },
  {
    id: 2,
    title: "xsss",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nisl vitae nisl.",
    date: "2020-01-01",
  },
  {
    id: 3,
    title: "asdasd",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nisl vitae nisl.",
    date: "2020-01-01",
  },
  {
    id: 4,
    title: "xsss",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nisl vitae nisl.",
    date: "2020-01-01",
  },
  {
    id: 5,
    title: "asdasd",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nisl vitae nisl.",
    date: "2020-01-01",
  },
  {
    id: 1,
    title: "asdasd",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nisl vitae nisl.",
    date: "2020-01-01",
  },
  {
    id: 2,
    title: "xsss",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nisl vitae nisl.",
    date: "2020-01-01",
  },
  {
    id: 3,
    title: "asdasd",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nisl vitae nisl.",
    date: "2020-01-01",
  },
  {
    id: 4,
    title: "xsss",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nisl vitae nisl.",
    date: "2020-01-01",
  },
  {
    id: 5,
    title: "asdasd",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nisl vitae nisl.",
    date: "2020-01-01",
  },
  {
    id: 1,
    title: "asdasd",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nisl vitae nisl.",
    date: "2020-01-01",
  },
  {
    id: 2,
    title: "xsss",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nisl vitae nisl.",
    date: "2020-01-01",
  },
  {
    id: 3,
    title: "asdasd",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nisl vitae nisl.",
    date: "2020-01-01",
  },
  {
    id: 4,
    title: "xsss",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nisl vitae nisl.",
    date: "2020-01-01",
  },
  {
    id: 5,
    title: "asdasd",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nisl vitae nisl.",
    date: "2020-01-01",
  },
  {
    id: 1,
    title: "asdasd",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nisl vitae nisl.",
    date: "2020-01-01",
  },
  {
    id: 2,
    title: "xsss",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nisl vitae nisl.",
    date: "2020-01-01",
  },
  {
    id: 3,
    title: "asdasd",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nisl vitae nisl.",
    date: "2020-01-01",
  },
  {
    id: 4,
    title: "xsss",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nisl vitae nisl.",
    date: "2020-01-01",
  },
  {
    id: 5,
    title: "asdasd",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nisl vitae nisl.",
    date: "2020-01-01",
  },
];

const router = Router();

router.get("/", (req, res) => {
  res.json(notifications);
});

module.exports = router;
