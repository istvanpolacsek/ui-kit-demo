import type { Meta, StoryObj } from "@storybook/react-vite";
import { BackgroundGradientLarge } from "./BackgroundGradientLarge";
const meta = {
  title: "Module/_Background gradient / Large",
  component: BackgroundGradientLarge,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof BackgroundGradientLarge>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Left angular" } };
