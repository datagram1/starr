# Starr

**Starr** is a fork of [Tryton](https://www.tryton.org/), a business software platform that is easy to use, complete, and 100% Open Source.

## About This Fork

This repository contains a customized version of the Tryton ERP system, maintained by [datagram1](https://github.com/datagram1). We have forked Tryton to add custom features and modifications while maintaining compatibility with the upstream project.

## Original Project

Tryton is business software, ideal for companies of any size. The original project can be found at:
- Website: https://www.tryton.org/
- Source: https://code.tryton.org/tryton

## License

This project maintains the original GPL-3.0 license from Tryton. See the [LICENSE](LICENSE) file for details.

All original copyright notices from the Tryton project are preserved in individual component directories.

## Setup

It is recommended to isolate the development within a Python [virtual environment](https://docs.python.org/tutorial/venv.html).

From the root directory of the repository run:

```console
.hooks/update_requirements
.hooks/link_modules
```

**Warning:** The process of updating requirements files may take some time.

Install the dependencies with:

```console
pip install -e trytond -e tryton -e proteus -r requirements.txt -r requirements-dev.txt
```

## Automate

To automate the process, add the following lines to the `[hooks]` section of the `.hg/hgrc`:

```ini
[hooks]
update.modules = .hooks/link_modules
update.requirements = .hooks/update_requirements
```

On `hg update`, the first hook will automatically create symlinks for modules and the second hook will automatically generate requirements files.

## Frontend Development

The new React-based frontend is located in the `frontend/` directory. This is a modern rewrite of the SAO (Tryton web client) using React, TypeScript, Vite, Tailwind CSS, and shadcn/ui components.

**Quick Start:**

```bash
cd frontend
npm install
npm run dev
```

The development server will start at http://localhost:3000. See [frontend/README.md](frontend/README.md) for detailed documentation, including:
- Project structure and architecture
- Available npm scripts
- Path aliases configuration
- Environment variables setup
- Migration roadmap and progress

**Tech Stack:**
- React 19+ with TypeScript
- Vite for fast development and building
- Tailwind CSS for styling (to be added)
- shadcn/ui component library (to be added)
- React Query for data fetching (to be added)
- Zustand for state management (to be added)

This frontend is being built alongside the existing SAO client to allow for gradual migration and thorough testing before switching over.

## Contributing

For information about the upstream Tryton project and how to contribute to it, please visit the [Tryton development guidelines](https://www.tryton.org/develop).

---

*This is a fork of Tryton. We acknowledge and thank all the original contributors to the Tryton project.*
