import type { Meta, StoryObj } from "@storybook/react-vite";
import { NavigationButton } from "./NavigationButton";
import { iconNameOptions } from "../Icon/Icon.options";
import { expect, userEvent, within } from "storybook/test";
const isDisabled = (el: HTMLElement) =>
  el.matches(":disabled") ||
  el.getAttribute("aria-disabled") === "true" ||
  el.closest('[aria-disabled="true"]') !== null;
const meta = {
  title: "Navigation/Navigation Button",
  component: NavigationButton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: { icon: { control: "select", options: iconNameOptions } },
} satisfies Meta<typeof NavigationButton>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    label: "Label",
    icon: "Star",
    hasIcon: true,
    hasLabel: true,
    direction: "Column",
    designType: "Small",
  },
};
export const Disabled: Story = { args: { ...Default.args, disabled: true } };

export const RowLayoutWithLabel: Story = {
  args: { ...Default.args, direction: "Row", hasLabel: true, label: "Home" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByRole("button", { name: "Home" })[0],
    ).toHaveTextContent("Home");
    await userEvent.click(canvas.getAllByRole("button", { name: "Home" })[0]);
    await expect(
      isDisabled(canvas.getAllByRole("button", { name: "Home" })[0]),
    ).toBe(false);
  },
};
export const SmallDesignType: Story = {
  args: { ...Default.args, designType: "Small", hasLabel: true, label: "Back" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByRole("button", { name: "Back" })[0],
    ).toHaveTextContent("Back");
    canvas.getAllByRole("button", { name: "Back" })[0].focus();
    await expect(
      canvas.getAllByRole("button", { name: "Back" })[0],
    ).toHaveFocus();
  },
};
