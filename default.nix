{ yarn2nix-moretea }:
yarn2nix-moretea.mkYarnPackage {
  name = "prismic-saviour";
  src = ./.;
  packageJSON = ./package.json;
  yarnLock = ./yarn.lock;
}
