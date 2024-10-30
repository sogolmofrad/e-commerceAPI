import User from "../models/User.js";
async function getAllUsers(req, res) {
  try {
    const users = await User.findAll();
    res.status(200).json({ status: "success", data: users });
  } catch (error) {
    console.log(`there is an error :${error};
        } `);
    res.status(500).json({ status: "fail", error: "can not get the users" });
  }
}

async function createUser(req, res) {
  const { first_name, last_name, email, password } = req.body;
  try {
    await User.create({ first_name, last_name, email, password });
    const users = await User.findAll();
    res.status(201).json({ status: "success", data: users });
  } catch (error) {
    console.log(`there is an error :${error};
      } `);
    res.status(500).json({ status: "fail", error: "can not create the user" });
  }
}
async function getUser(req, res) {
  const id = req.params.id * 1;
  try {
    const user = await User.findByPk(id);
    if (user) {
      res.status(200).json({ status: "success", data: user });
    } else {
      res.status(404).json({ status: "fail", error: "user not found" });
    }
  } catch (error) {
    console.log(`there is an error :${error};
    } `);
    res.status(500).json({ status: "fail", error: "can not fint the user" });
  }
}
async function updateUser(req, res) {
  const id = req.params.id * 1;
  const { first_name, last_name, email, password } = req.body;
  try {
    const user = await User.findByPk(id);
    if (user) {
      await user.update({ first_name, last_name, email, password });
      const users = await User.findAll();
      res.status(200).json({ status: "success", data: users });
    } else {
      res.status(404).json({ status: "fail", error: "user not found" });
    }
  } catch (error) {
    console.log(`there is an error :${error};
        } `);
    res.status(500).json({ status: "fail", error: "can not update the user" });
  }
}

async function deleteUser(req, res) {
  const id = req.params.id * 1;

  try {
    const user = await User.findByPk(id);
    if (user) {
      await user.destroy();
      const users = await User.findAll();
      res.status(200).json({ status: "success", data: users });
    } else {
      res.status(404).json({ status: "fail", error: "user not found" });
    }
  } catch (error) {
    console.log(`there is an error :${error};
        } `);
    res.status(500).json({ status: "fail", error: "can not delete the user" });
  }
}

export { getAllUsers, getUser, createUser, updateUser, deleteUser };
