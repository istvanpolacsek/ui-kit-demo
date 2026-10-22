import type { Meta, StoryObj } from "@storybook/react-vite";
import { Edit } from "./Edit";
const meta = {
  title: "Visual asset/Edit",
  component: Edit,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Edit>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
