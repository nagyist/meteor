Package.describe({
  summary: "Moved to the 'mongo' package",
  version: '1.0.13-beta300.1'
});

Package.onUse(function (api) {
  api.imply("mongo");
});
