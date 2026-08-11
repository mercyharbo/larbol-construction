# No Box Shadows Guardrail

## Constraint
- NEVER use box shadow utility classes (`shadow`, `shadow-xs`, `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, `shadow-2xl`, `shadow-2xs`, `hover:shadow-*`, `box-shadow`) when styling components or layouts in Tailwind CSS or standard CSS.
- Rely strictly on crisp borders (`border`, `border-neutral-200`), contrasting backgrounds (`bg-white`, `bg-[#F5F4F0]`, `bg-[#121417]`), and clean layout spacing for visual separation.
- Exception: Use box shadows ONLY when the user explicitly requests shadow effects for a specific component.
