import type { Meta, StoryObj } from "@storybook/react-vite";
import { SearchBar } from "./SearchBar";
import { expect, userEvent, within } from "storybook/test";
const isDisabled = (el: HTMLElement) =>
  el.matches(":disabled") ||
  el.getAttribute("aria-disabled") === "true" ||
  el.closest('[aria-disabled="true"]') !== null;
const meta = {
  title: "  ↳ Search bar/Search Bar",
  component: SearchBar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof SearchBar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Default", device: "Desktop" } };

export const LoadingState: Story = {
  args: { ...Default.args, state: "Loading", device: "Desktop" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("search")[0]).toBeVisible();
    await expect(isDisabled(canvas.getAllByRole("search")[0])).toBe(false);
  },
};
