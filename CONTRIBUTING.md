# Contributing to Ace Landing Page

Thanks for your interest in contributing! This document covers the process for contributing to this project.

## Getting Started

1. Fork the repository
2. Clone your fork:

```bash
git clone https://github.com/<your-username>/Ace-Landing-Page.git
cd Ace-Landing-Page
```

3. Install dependencies:

```bash
npm install
```

4. Start the dev server:

```bash
npm start
```

## Making Changes

1. Create a branch from `main`:

```bash
git checkout -b feature/my-feature
```

2. Make your changes
3. Run the tests to make sure nothing is broken:

```bash
npm test
```

4. Build to verify there are no compilation errors:

```bash
npm run build
```

## Commit Guidelines

- Keep commits focused — one logical change per commit
- Write clear, concise commit messages
- Use present tense ("Add feature" not "Added feature")

## Submitting a Pull Request

1. Push your branch to your fork:

```bash
git push origin feature/my-feature
```

2. Open a Pull Request against the `main` branch
3. Describe what your PR does and why
4. Link any related issues

## Reporting Issues

If you find a bug or have a feature request, please [open an issue](https://github.com/getace-app/Ace/issues). Include as much detail as possible:

- Steps to reproduce (for bugs)
- Expected vs actual behavior
- Screenshots if applicable
- Browser and OS info

## Code Style

- TypeScript strict mode is enabled
- Use functional components and hooks
- Keep components focused and small

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).
