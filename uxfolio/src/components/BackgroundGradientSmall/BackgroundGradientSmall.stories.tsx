import type { Meta, StoryObj } from "@storybook/react-vite";
import { BackgroundGradientSmall } from "./BackgroundGradientSmall";
const meta = {
  title: "Module/_Background gradient / Small",
  component: BackgroundGradientSmall,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof BackgroundGradientSmall>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Left angular" } };
