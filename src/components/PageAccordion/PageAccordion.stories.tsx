import type { Meta, StoryObj } from "@storybook/react-vite";
import { PageAccordion } from "./PageAccordion";
const meta = {
  title: "Sections/Page Accordion",
  component: PageAccordion,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PageAccordion>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { platform: "Desktop" } };
