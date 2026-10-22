import type { Meta, StoryObj } from "@storybook/react-vite";
import { Design } from "./Design";
const meta = {
  title: "Visual asset/Design",
  component: Design,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Design>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
