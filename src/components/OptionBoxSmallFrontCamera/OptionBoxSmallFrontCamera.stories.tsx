import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionBoxSmallFrontCamera } from "./OptionBoxSmallFrontCamera";
const meta = {
  title: "Input/Option box / Small / Front camera",
  component: OptionBoxSmallFrontCamera,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionBoxSmallFrontCamera>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Simple" } };
