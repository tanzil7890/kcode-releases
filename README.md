# KoraCode

**The browser agent harness.** Describe a web task from the terminal and KoraCode drives a
real browser, step by step and in view, asking before anything irreversible.

This repository hosts KoraCode's **releases** (the `kcode` downloads) and its **website**,
[kcode.outhad.com](https://kcode.outhad.com).

## Install

```sh
curl -fsSL https://kcode.outhad.com/install | bash
```

This installs `kcode` to `~/.kcode/bin` on macOS, Linux, and Windows (Git Bash). Upgrade
later with `kcode upgrade`.

For the best experience on a Mac, run it in [iTerm2](https://iterm2.com/downloads.html):
the live browser view is sharpest there.

## Documentation

[kcode.outhad.com/docs](https://kcode.outhad.com/docs/)

## Releases

Every version's downloads are on the [Releases](https://github.com/tanzil7890/kcode-releases/releases)
page. Pin one with:

```sh
curl -fsSL https://kcode.outhad.com/install | bash -s -- --version 0.3.2
```

## License

MIT, see [LICENSE](LICENSE).
