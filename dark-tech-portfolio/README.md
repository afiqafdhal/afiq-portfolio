# Afiq Afdhal — Engineering Portfolio

A professional dark-tech Next.js portfolio based on the uploaded template, tailored for **Afiq Afdhal**, Mechatronics Engineering Student at UiTM.

## Run locally

1. Install Node.js (current LTS recommended).
2. Open a terminal in this folder.
3. Run `npm install` followed by `npm run dev`.
4. Open http://localhost:3000.

## Before publishing

- Check and edit all facts in `data/site.ts`, including your email and the RGB sorting FYP case study.
- Add verified details about the actual controller, RGB sensor model, actuator, methods, performance and photos. The supplied project description does **not** assume a trained AI model or a completed actuator.
- Set the actual LinkedIn and GitHub links in `data/site.ts` if available.
- Add your resume to `public/resume.pdf` and set `resumeAvailable: true`.
- Use only internship project images and data approved for public sharing.
- The hero monitor graphic is illustrative demo art, not measured system data.

## Routes

- `/` homepage
- `/projects` project gallery
- `/projects/[slug]` project details

Design, routing and responsive styles inherited from the supplied dark-tech portfolio.
