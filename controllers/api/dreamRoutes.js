const router = require("express").Router();
const { Dream, User, Tags, DreamTags } = require("../../models");

// The `/api/dreams` endpoint

// GET   /api/dreams/    Get all dreams
router.get("/", async (req, res) => {
  // find all dreams
  try {
    const dreamData = await Dream.findAll({
      include: [{ model: Tags }, { model: User }],
    });
    res.status(200).json(dreamData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET   /api/dreams/:id    Get one dream
router.get("/:id", async (req, res) => {
  // find a single dream by its `id`
  try {
    const dreamData = await Dream.findByPk(req.params.id, {
      include: [{ model: Tags }, { model: User }],
    });
    if (!dreamData) {
      res.status(404).json({ message: "No dream with this id!" });
      return;
    }
    res.status(200).json(dreamData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET   /api/dreams/user/:id   Get all dreams by User id
router.get("/user/:id", async (req, res) => {
  try {
    const dreamData = await Dream.findAll({
      where: { user_id: req.params.id },
      include: [{ model: Tags, through: { attributes: [] } }],
    });
    if (!dreamData) {
      res.status(404).json({ message: "No dreams for this user" });
      return;
    }
    res.status(200).json(dreamData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST   /api/dreams/   Create new dream
router.post("/", (req, res) => {
  Dream.create(req.body)
    .then((dream) => {
      // if there's dream tags, we need to create pairings to bulk create in the dreamTags model
      if (req.body.tagIds.length) {
        const dreamTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            dream_id: dream.id,
            tag_id,
          };
        });
        return DreamTags.bulkCreate(dreamTagIdArr);
      }
      // if no dream tags, just respond
      res.status(200).json(dream);
    })
    .then((dreamTagIds) => res.status(200).json(dreamTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// PUT   /api/dreams/:id   Update dream
router.put("/:id", (req, res) => {
  // update dream data
  Dream.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((dream) => {
      if (req.body.tagIds && req.body.tagIds.length) {
        DreamTags.findAll({
          where: { dream_id: req.params.id },
        }).then((dreamTags) => {
          // create filtered list of new tag_ids
          const dreamTagIds = dreamTags.map(({ tag_id }) => tag_id);
          const newDreamTags = req.body.tagIds
            .filter((tag_id) => !dreamTagIds.includes(tag_id))
            .map((tag_id) => {
              return {
                dream_id: req.params.id,
                tag_id,
              };
            });

          // figure out which ones to remove
          const dreamTagsToRemove = dreamTags
            .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
            .map(({ id }) => id);
          // run both actions
          return Promise.all([
            DreamTags.destroy({ where: { id: dreamTagsToRemove } }),
            DreamTags.bulkCreate(newDreamTags),
          ]);
        });
      }

      return res.json(dream);
    })
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});

// DELETE /api/dreams/:id   Delete dream
router.delete("/:id", async (req, res) => {
  // delete one dream by its `id` value
  try {
    const dreamData = await Dream.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!dreamData) {
      res.status(404).json({ message: "No dream found with that id!" });
      return;
    }

    res.status(200).json(dreamData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
