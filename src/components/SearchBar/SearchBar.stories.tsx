import type { Meta, StoryObj } from "@storybook/react-vite";
import { SearchBar } from "./SearchBar";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Design System/Search bar",
  component: SearchBar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof SearchBar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { placeholder: "Search in this deal" } };

export const TypeASearchQuery: Story = {
  args: Default.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getAllByRole("searchbox")[0]);
    await expect(canvas.getAllByRole("searchbox")[0]).toHaveFocus();
    await userEvent.type(canvas.getAllByRole("searchbox")[0], "invoice");
    await expect(canvas.getAllByRole("searchbox")[0]).toHaveValue("invoice");
  },
};
export const ClearTypedQuery: Story = {
  args: Default.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getAllByRole("searchbox")[0], "contract");
    await expect(canvas.getAllByRole("searchbox")[0]).toHaveValue("contract");
    await userEvent.clear(canvas.getAllByRole("searchbox")[0]);
    await expect(canvas.getAllByRole("searchbox")[0]).toHaveValue("");
  },
};
