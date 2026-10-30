import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionBoxSmallDeviceShadow } from "./OptionBoxSmallDeviceShadow";
const meta = {
  title: "Input/Option box / Small / Device shadow",
  component: OptionBoxSmallDeviceShadow,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionBoxSmallDeviceShadow>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "None" } };
