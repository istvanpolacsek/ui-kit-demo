import type { Meta, StoryObj } from "@storybook/react-vite";
import { PaginationPage } from "./PaginationPage";
import { expect, userEvent, within } from "storybook/test";
const isDisabled = (el: HTMLElement) =>
  el.matches(":disabled") ||
  el.getAttribute("aria-disabled") === "true" ||
  el.closest('[aria-disabled="true"]') !== null;
const meta = {
  title: "Pagination/Pagination Page",
  component: PaginationPage,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PaginationPage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { number: "1", state: "Default" } };
export const Disabled: Story = { args: { ...Default.args, disabled: true } };

export const CurrentPage: Story = {
  args: { ...Default.args, state: "Current" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("button", { name: "1" })[0]).toBeVisible();
    await expect(
      canvas.getAllByRole("button", { name: "1" })[0],
    ).toHaveTextContent("1");
  },
};
export const HoverState: Story = {
  args: { ...Default.args, state: "Hover" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getAllByRole("button", { name: "1" })[0]);
    await expect(canvas.getAllByRole("button", { name: "1" })[0]).toBeVisible();
  },
};
export const ClickToNavigate: Story = {
  args: { ...Default.args, state: "Default" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      isDisabled(canvas.getAllByRole("button", { name: "1" })[0]),
    ).toBe(false);
    await userEvent.click(canvas.getAllByRole("button", { name: "1" })[0]);
    await expect(canvas.getAllByRole("button", { name: "1" })[0]).toHaveFocus();
  },
};
