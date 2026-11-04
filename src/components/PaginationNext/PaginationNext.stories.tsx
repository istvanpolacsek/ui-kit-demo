import type { Meta, StoryObj } from "@storybook/react-vite";
import { PaginationNext } from "./PaginationNext";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Pagination/Pagination Next",
  component: PaginationNext,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PaginationNext>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Disabled: Story = { args: { ...Default.args, disabled: true } };

export const ClickInteraction: Story = {
  args: Default.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    canvas.getAllByRole("button")[0].focus();
    await expect(canvas.getAllByRole("button")[0]).toHaveFocus();
    await userEvent.click(canvas.getAllByRole("button")[0]);
  },
};
