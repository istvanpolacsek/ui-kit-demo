import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tag } from "./Tag";
import { expect, userEvent, within } from "storybook/test";
const isDisabled = (el: HTMLElement) =>
  el.matches(":disabled") ||
  el.getAttribute("aria-disabled") === "true" ||
  el.closest('[aria-disabled="true"]') !== null;
const meta = {
  title: "Tags/Tag",
  component: Tag,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Tag>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { removable: true, label: "Tag", scheme: "Brand", variant: "Primary" },
};
export const Disabled: Story = { args: { ...Default.args, disabled: true } };

export const RemovableTag: Story = {
  args: { ...Default.args, removable: true, label: "Tag" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByRole("button", { name: "Tag" })[0],
    ).toBeVisible();
    await userEvent.click(canvas.getAllByRole("button", { name: "Tag" })[0]);
    await expect(
      isDisabled(canvas.getAllByRole("button", { name: "Tag" })[0]),
    ).toBe(false);
  },
};
export const DangerScheme: Story = {
  args: { ...Default.args, scheme: "Danger", label: "Tag" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    canvas.getAllByRole("button", { name: "Tag" })[0].focus();
    await expect(
      canvas.getAllByRole("button", { name: "Tag" })[0],
    ).toHaveFocus();
  },
};
export const SecondaryVariantHover: Story = {
  args: { ...Default.args, variant: "Secondary", label: "Tag" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByRole("button", { name: "Tag" })[0],
    ).toBeVisible();
    canvas.getAllByRole("button", { name: "Tag" })[0].focus();
    await expect(
      canvas.getAllByRole("button", { name: "Tag" })[0],
    ).toHaveFocus();
  },
};
