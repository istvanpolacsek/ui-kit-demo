import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonGroup } from "./ButtonGroup";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Buttons/Button Group",
  component: ButtonGroup,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    buttonVariant: {
      control: "select",
      options: ["Primary", "Neutral", "Subtle"],
    },
    buttonSize: { control: "select", options: ["Medium", "Small"] },
    button2Variant: {
      control: "select",
      options: ["Primary", "Neutral", "Subtle"],
    },
    button2Size: { control: "select", options: ["Medium", "Small"] },
  },
} satisfies Meta<typeof ButtonGroup>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    buttonStart: true,
    buttonEnd: true,
    align: "Justify",
    buttonLabel: "Button",
    buttonIconEnd: "X",
    buttonHasIconEnd: false,
    buttonHasIconStart: false,
    buttonIconStart: "Star",
    buttonVariant: "Subtle",
    buttonSize: "Medium",
    button2Label: "Button",
    button2IconEnd: "X",
    button2HasIconEnd: false,
    button2HasIconStart: false,
    button2IconStart: "Star",
    button2Variant: "Primary",
    button2Size: "Medium",
  },
};

export const JustifiedAlignmentWithStartAndEndButtons: Story = {
  args: {
    ...Default.args,
    align: "Justify",
    buttonStart: true,
    buttonEnd: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("group")[0]).toBeVisible();
  },
};
export const CenterAlignedPrimaryAndSubtleButtons: Story = {
  args: {
    ...Default.args,
    align: "Center",
    buttonVariant: "Primary",
    button2Variant: "Subtle",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getAllByRole("group")[0]);
    await expect(canvas.getAllByRole("group")[0]).toBeVisible();
  },
};
