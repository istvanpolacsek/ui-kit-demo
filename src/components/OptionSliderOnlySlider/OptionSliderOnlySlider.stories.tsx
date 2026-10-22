import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionSliderOnlySlider } from "./OptionSliderOnlySlider";
const meta = {
  title: "Input/Option slider / Only slider",
  component: OptionSliderOnlySlider,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionSliderOnlySlider>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { value: "0%" } };
