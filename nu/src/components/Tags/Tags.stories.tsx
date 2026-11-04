import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tags } from "./Tags";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "  ↳ Tags/Tags",
  component: Tags,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Tags>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    icon: true,
    value: "Tags",
    state: "Default",
    type: "RoyalBlue",
    size: "Large",
  },
};

export const TypeAndVerifyTagValue: Story = {
  args: { ...Default.args, type: "RoyalBlue", size: "Large" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    canvas.getAllByRole("textbox")[0].focus();
    await userEvent.type(canvas.getAllByRole("textbox")[0], "React");
    await expect(canvas.getAllByRole("textbox")[0]).toHaveValue("React");
  },
};
