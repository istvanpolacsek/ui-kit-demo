import type { Meta, StoryObj } from "@storybook/react-vite";
import { AvatarBlock } from "./AvatarBlock";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Avatars/Avatar Block",
  component: AvatarBlock,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof AvatarBlock>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { title: "Title", description: "Description" },
};

export const TitleAndDescriptionDisplay: Story = {
  args: {
    ...Default.args,
    title: "Jane Doe",
    description: "Software Engineer",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("Jane Doe")[0]).toHaveTextContent(
      "Jane Doe",
    );
    await expect(canvas.getAllByText("Software Engineer")[0]).toHaveTextContent(
      "Software Engineer",
    );
  },
};
export const LongTitleAndDescription: Story = {
  args: {
    ...Default.args,
    title: "Alexander Bartholomew-Cunningham III",
    description:
      "Senior Principal Engineer, Platform Infrastructure & Developer Experience",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByText("Alexander Bartholomew-Cunningham III")[0],
    ).toBeVisible();
    await expect(
      canvas.getAllByText("Alexander Bartholomew-Cunningham III")[0],
    ).toHaveTextContent("Alexander Bartholomew-Cunningham III");
    await expect(
      canvas.getAllByText(
        "Senior Principal Engineer, Platform Infrastructure & Developer Experience",
      )[0],
    ).toHaveTextContent(
      "Senior Principal Engineer, Platform Infrastructure & Developer Experience",
    );
  },
};
