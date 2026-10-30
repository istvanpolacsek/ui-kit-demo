import type { Meta, StoryObj } from "@storybook/react-vite";
import { MakeShorter } from "./MakeShorter";
const meta = {
  title: "Visual asset/Make shorter",
  component: MakeShorter,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof MakeShorter>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
