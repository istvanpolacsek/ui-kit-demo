import type { Meta, StoryObj } from "@storybook/react-vite";
import { ComponentNote } from "./ComponentNote";
const meta = {
  title: "Utilities/_Component Note",
  component: ComponentNote,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ComponentNote>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { showNoteTaker: true, title: "Title", type: "Documentation" },
};
