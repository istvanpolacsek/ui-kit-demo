import type { Meta, StoryObj } from "@storybook/react-vite";
import { NavigationPillList } from "./NavigationPillList";
import { expect, userEvent, within } from "storybook/test";
const isDisabled = (el: HTMLElement) =>
  el.matches(":disabled") ||
  el.getAttribute("aria-disabled") === "true" ||
  el.closest('[aria-disabled="true"]') !== null;
const meta = {
  title: "Navigation/Navigation Pill List",
  component: NavigationPillList,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof NavigationPillList>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    link6: true,
    link2: true,
    link5: true,
    link4: true,
    link3: true,
    link1: true,
    link7: true,
    direction: "Row",
  },
};

export const AllLinksVisibleInRow: Story = {
  args: {
    ...Default.args,
    direction: "Row",
    link1: true,
    link2: true,
    link3: true,
    link4: true,
    link5: true,
    link6: true,
    link7: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("navigation")[0]).toBeVisible();
    await userEvent.click(canvas.getAllByRole("navigation")[0]);
    await expect(isDisabled(canvas.getAllByRole("navigation")[0])).toBe(false);
  },
};
