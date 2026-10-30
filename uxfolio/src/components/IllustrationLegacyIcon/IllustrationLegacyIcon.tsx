import React from "react";
import styled, { css } from "styled-components";
import { SVG_URLS } from "./IllustrationLegacyIcon.markup";

export interface IllustrationLegacyIconProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "type" | "children"
> {
  type?:
    | "AB test"
    | "Big image"
    | "BusinessGoals"
    | "Customer journey"
    | "CS"
    | "Card-Sorting"
    | "Columns"
    | "Design System"
    | "Gallery"
    | "Image & text"
    | "Interviews"
    | "JTBD"
    | "KPI"
    | "Lookandfeel"
    | "Personas"
    | "Process"
    | "Media (wireframes)"
    | "Testimonial"
    | "Showcase"
    | "Sketches"
    | "Design Sprint"
    | "Stats"
    | "Subheader"
    | "Survey"
    | "UI design"
    | "User journey"
    | "Usability testing"
    | "Video"
    | "Workshops"
    | "Text"
    | "Contact-Form"
    | "Hobbies"
    | "Awards"
    | "Articles"
    | "Services"
    | "Contact Form"
    | "Education"
    | "Resumé"
    | "About me"
    | "Blank page"
    | "Contact"
    | "Call to Action"
    | "Pages"
    | "PDF"
    | "ExternalPage"
    | "PDF resume"
    | "Gallery & Text"
    | "Logo wall"
    | "Social"
    | "Statement"
    | "FLow"
    | "Mailto"
    | "Short Intro"
    | "Competitve research"
    | "Heuristic Evalueation"
    | "Farewell"
    | "Learnings"
    | "Next steps"
    | "Problemt and solution"
    | "Project details"
    | "Project overview"
    | "Prototype"
    | "Footer"
    | "Case studies"
    | "Divider line";
}

const StyledRoot = styled.span(
  () => css`
    display: inline-flex;
  `,
);

/** Vector artwork rendered from exported SVG assets. */
export const IllustrationLegacyIcon = React.forwardRef<
  HTMLSpanElement,
  IllustrationLegacyIconProps
>(function IllustrationLegacyIcon({ type = "Lookandfeel", ...rest }, ref) {
  return (
    <StyledRoot {...rest} ref={ref}>
      {SVG_URLS[JSON.stringify([type])] && (
        <img src={SVG_URLS[JSON.stringify([type])]} alt="" />
      )}
    </StyledRoot>
  );
});
