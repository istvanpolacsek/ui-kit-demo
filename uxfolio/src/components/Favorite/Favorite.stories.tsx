import type { Meta, StoryObj } from "@storybook/react-vite";
import { Favorite } from "./Favorite";
const meta = {
  title: "Visual asset/Favorite",
  component: Favorite,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Favorite>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
