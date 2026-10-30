import type { Meta, StoryObj } from "@storybook/react-vite";
import { Indifferent } from "./Indifferent";
const meta = {
  title: "Visual asset/Indifferent",
  component: Indifferent,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Indifferent>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
