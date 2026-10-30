import type { Meta, StoryObj } from "@storybook/react-vite";
import { EditSmall } from "./EditSmall";
const meta = {
  title: "Visual asset/Edit small",
  component: EditSmall,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof EditSmall>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
