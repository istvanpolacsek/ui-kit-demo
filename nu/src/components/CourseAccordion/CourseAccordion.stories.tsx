import type { Meta, StoryObj } from "@storybook/react-vite";
import { CourseAccordion } from "./CourseAccordion";
const meta = {
  title: "  ↳ Accordion/Course Accordion",
  component: CourseAccordion,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CourseAccordion>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Closed", device: "Desktop" } };
