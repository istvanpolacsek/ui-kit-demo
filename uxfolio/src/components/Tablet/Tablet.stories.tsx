import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tablet } from "./Tablet";
const meta = {
  title: "Visual asset/Tablet",
  component: Tablet,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Tablet>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
