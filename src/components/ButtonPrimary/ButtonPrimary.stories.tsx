import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonPrimary } from "./ButtonPrimary";
import { iconIconNameOptions } from "../Icon/Icon.options";
import { expect, userEvent, within } from "storybook/test";
const isDisabled = (el: HTMLElement) =>
  el.matches(":disabled") ||
  el.getAttribute("aria-disabled") === "true" ||
  el.closest('[aria-disabled="true"]') !== null;
const meta = {
  title: "Design System/Button / Primary",
  component: ButtonPrimary,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: { iconName: { control: "select", options: iconIconNameOptions } },
} satisfies Meta<typeof ButtonPrimary>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    text: "Button",
    hasIcon: true,
    hasText: true,
    mode: "Light",
    size: "L",
    iconName: "mail",
  },
};
export const Disabled: Story = { args: { ...Default.args, disabled: true } };

export const LargeDarkMode: Story = {
  args: { ...Default.args, size: "L", mode: "Dark" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByRole("button", { name: "Button" })[0],
    ).toBeVisible();
    canvas.getAllByRole("button", { name: "Button" })[0].focus();
    await expect(
      canvas.getAllByRole("button", { name: "Button" })[0],
    ).toHaveFocus();
  },
};
export const ClickInteraction: Story = {
  args: { ...Default.args, text: "Submit" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByRole("button", { name: "Submit" })[0],
    ).toBeVisible();
    await expect(
      canvas.getAllByRole("button", { name: "Submit" })[0],
    ).toHaveTextContent("Submit");
    await userEvent.click(canvas.getAllByRole("button", { name: "Submit" })[0]);
    await expect(
      isDisabled(canvas.getAllByRole("button", { name: "Submit" })[0]),
    ).toBe(false);
  },
};
