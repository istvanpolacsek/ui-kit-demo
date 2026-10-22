import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionSliderLabelless } from "./OptionSliderLabelless";
const meta = {
  title: "Input/Option slider / Labelless",
  component: OptionSliderLabelless,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    value: {
      control: "select",
      options: ["0%", "25%", "33%", "50%", "66%", "75%", "100%"],
    },
  },
} satisfies Meta<typeof OptionSliderLabelless>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Mixed", value: "25%" } };
