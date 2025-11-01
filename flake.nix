{
  description = "Development flake for the terminal website project";
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-25.05";
  };

  outputs =
    { self, nixpkgs }:
    let
      system = "x86_64-linux";
      pkgs = import nixpkgs {
        inherit system;
        config.allowUnfree = false;
      };
    in
    {
      devShells.${system}.default = pkgs.mkShell {
        packages = with pkgs; [
          nodejs_24
          live-server
        ];

        env = {
          API_URL = "https://api.sakukarttunen.com";
        };

        shellHook = ''
          PREVIEW_EXISTS="$(tmux list-windows | grep preview)"
          if [[ ! $PREVIEW_EXISTS ]]; then
            tmux new-window -n preview \
              "nix develop --command zsh -ic 'live-server --port 8081 --host localhost .; exec zsh'"
          fi
        '';
      };
    };
}
