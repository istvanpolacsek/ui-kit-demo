import type { Meta, StoryObj } from "@storybook/react-vite";
import { Search } from "./Search";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Inputs/Search",
  component: Search,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Search>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { value: "Value", valueType: "Placeholder" },
};

export const TypeIntoSearch: Story = {
  args: { ...Default.args, valueType: "Placeholder" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    canvas.getAllByRole("textbox")[0].focus();
    await expect(canvas.getAllByRole("textbox")[0]).toHaveFocus();
    await userEvent.type(canvas.getAllByRole("textbox")[0], "hello world");
    await expect(canvas.getAllByRole("textbox")[0]).toHaveValue("hello world");
  },
};
