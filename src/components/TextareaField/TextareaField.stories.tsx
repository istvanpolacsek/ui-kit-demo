import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextareaField } from "./TextareaField";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Inputs/Textarea Field",
  component: TextareaField,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TextareaField>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    hasLabel: true,
    hasError: false,
    label: "Label",
    error: "Hint",
    description: "Description",
    hasDescription: false,
    value: "Value",
    state: "Default",
    valueType: "Default",
  },
};

export const WithLabelAndDescription: Story = {
  args: {
    ...Default.args,
    hasLabel: true,
    label: "Your message",
    hasDescription: true,
    description: "Please provide as much detail as possible",
    value: "Hello there",
    valueType: "Default",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("Your message")[0]).toBeVisible();
    await expect(canvas.getAllByText("Your message")[0]).toHaveTextContent(
      "Your message",
    );
    await expect(
      canvas.getAllByText("Please provide as much detail as possible")[0],
    ).toBeVisible();
    await expect(
      canvas.getAllByText("Please provide as much detail as possible")[0],
    ).toHaveTextContent("Please provide as much detail as possible");
    await expect(canvas.getAllByText("Hello there")[0]).toBeVisible();
    await expect(canvas.getAllByText("Hello there")[0]).toHaveTextContent(
      "Hello there",
    );
  },
};
export const ErrorStateWithHint: Story = {
  args: {
    ...Default.args,
    hasLabel: true,
    label: "Email address",
    hasError: true,
    state: "Error",
    error: "Please enter a valid email address",
    value: "not-an-email",
    valueType: "Default",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("Email address")[0]).toBeVisible();
    await expect(canvas.getAllByText("Email address")[0]).toHaveTextContent(
      "Email address",
    );
    await expect(
      canvas.getAllByText("Please enter a valid email address")[0],
    ).toBeVisible();
    await expect(
      canvas.getAllByText("Please enter a valid email address")[0],
    ).toHaveTextContent("Please enter a valid email address");
    await expect(canvas.getAllByText("not-an-email")[0]).toBeVisible();
    await expect(canvas.getAllByText("not-an-email")[0]).toHaveTextContent(
      "not-an-email",
    );
  },
};
export const Disabled: Story = {
  args: {
    ...Default.args,
    hasLabel: true,
    label: "Comments",
    state: "Disabled",
    value: "This field is disabled",
    valueType: "Default",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("Comments")[0]).toBeVisible();
    await expect(canvas.getAllByText("Comments")[0]).toHaveTextContent(
      "Comments",
    );
    await expect(
      canvas.getAllByText("This field is disabled")[0],
    ).toBeVisible();
    await expect(
      canvas.getAllByText("This field is disabled")[0],
    ).toHaveTextContent("This field is disabled");
  },
};
