# Plan: Add the `design-taste-frontend` Skill

## Goal
Import the requested skill from `https://github.com/Leonxlnx/taste-skill` as `design-taste-frontend`, inspect it, then activate it for future design work.

## Steps
1. **Stage the skill draft**
   - Run the equivalent of the requested command using the Skills CLI in draft mode:
   - `npx -y skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"`
   - Keep it in the draft skills area first, not as an active rule.

2. **Inspect the skill contents**
   - Read the generated `SKILL.md`.
   - Confirm the frontmatter is valid:
     - name is lowercase/hyphenated
     - description clearly says when it should trigger
     - body contains actionable design instructions

3. **Apply the draft skill**
   - If the draft is structurally valid, apply it with Lovable’s skill activation tool.
   - If the import command produces a different folder name or needs cleanup, normalize the draft before applying.

4. **Report back**
   - Summarize what the skill does.
   - Confirm whether it is now active.
   - Mention that I used the Skill Creator skill for this request.

## Boundaries
- No app UI/code redesign changes in this step.
- No direct edits to active workspace skill files.
- Only stage and apply the requested skill.