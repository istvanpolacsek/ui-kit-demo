import type { Meta, StoryObj } from "@storybook/react-vite";
import { NavigationButtonList } from "./NavigationButtonList";
import { expect, userEvent, within } from "storybook/test";
const isDisabled = (el: HTMLElement) =>
  el.matches(":disabled") ||
  el.getAttribute("aria-disabled") === "true" ||
  el.closest('[aria-disabled="true"]') !== null;
const meta = {
  title: "Navigation/Navigation Button List",
  component: NavigationButtonList,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof NavigationButtonList>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    link2: true,
    link5: true,
    link4: true,
    link3: true,
    link1: true,
    direction: "Row",
  },
};

export const AllLinksEnabled: Story = {
  args: {
    ...Default.args,
    link1: true,
    link2: true,
    link3: true,
    link4: true,
    link5: true,
    direction: "Row",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("navigation")[0]).toBeVisible();
    await userEvent.hover(canvas.getAllByRole("navigation")[0]);
    await expect(isDisabled(canvas.getAllByRole("navigation")[0])).toBe(false);
  },
};
