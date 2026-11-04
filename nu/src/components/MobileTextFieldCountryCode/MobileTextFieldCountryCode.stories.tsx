import type { Meta, StoryObj } from "@storybook/react-vite";
import { MobileTextFieldCountryCode } from "./MobileTextFieldCountryCode";
import { expect, userEvent, within } from "storybook/test";
const isDisabled = (el: HTMLElement) =>
  el.matches(":disabled") ||
  el.getAttribute("aria-disabled") === "true" ||
  el.closest('[aria-disabled="true"]') !== null;
const meta = {
  title: "  ↳ Input Field/Mobile / Text Field / Country Code",
  component: MobileTextFieldCountryCode,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof MobileTextFieldCountryCode>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Default" } };

export const LockedState: Story = {
  args: { ...Default.args, state: "Locked" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("group")[0]).toBeVisible();
    await userEvent.click(canvas.getAllByRole("group")[0]);
    await expect(isDisabled(canvas.getAllByRole("group")[0])).toBe(false);
  },
};
