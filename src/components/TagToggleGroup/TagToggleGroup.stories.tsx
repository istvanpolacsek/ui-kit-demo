import type { Meta, StoryObj } from "@storybook/react-vite";
import { TagToggleGroup } from "./TagToggleGroup";
const meta = {
  title: "Tags/Tag Toggle Group",
  component: TagToggleGroup,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TagToggleGroup>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
