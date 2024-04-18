import * as dao from "./dao.js";
export default function ModuleRoutes(app) {
  const createModule = async (req, res) => {
    const module = req.body;
    delete module._id;
    const result = await dao.createModule(module);
    res.json(result);
  };
  const deleteModule = async (req, res) => {
    const status = await dao.deleteModule(req.params.moduleId);
    res.json(status);
  };
  const findModuleById = async (req, res) => {};
  const updateModule = async (req, res) => {
    const { moduleId } = req.params;
    const status = await dao.updateModule(moduleId, req.body);
    const currentUser = await dao.findModuleById(moduleId);
    res.json(status);
  };
  const findAllModules = async (req, res) => {
    const modules = await dao.findAllModules();
    res.json(modules);
  };
  app.post("/api/modules", createModule);
  app.get("/api/modules", findAllModules);
  app.get("/api/modules/:moduleId", findModuleById);
  app.put("/api/modules/:moduleId", updateModule);
  app.delete("/api/modules/:moduleId", deleteModule);
}
