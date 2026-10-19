import type { Meta, StoryObj } from "@storybook/react-vite";
import { RadioGroup } from "./RadioGroup";
const meta = {
  title: "Inputs/Radio Group",
  component: RadioGroup,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof RadioGroup>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    options: [
      {
        label: "Label",
        description: "Description",
        hasDescription: true,
        value: "1",
      },
      {
        label: "Label",
        description: "Description",
        hasDescription: true,
        value: "2",
      },
      {
        label: "Label",
        description: "Description",
        hasDescription: true,
        value: "3",
      },
    ],
    defaultValue: "1",
  },
};
