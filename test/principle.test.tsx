import React from "react";
import PrincipalsBigScreen from "../src/components/principleComponents/GeneralPrinciplesBigScreen";
import { beforeAll, beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { PRINCIPLES } from "../src/global/GLOBALS";

describe("PrincipalsBigScreen", () => {
  const PRN = PRINCIPLES.generalPrinciples;

  beforeEach(() => {
    render(<PrincipalsBigScreen principles={PRN} />);
  });

  it("renders the component with dry heading text", () => {
    expect(screen.queryAllByAltText(PRN.dry.headingText)).toBeDefined();
  });

  it("renders the component with yagni heading text", () => {
    expect(screen.queryAllByAltText(PRN.yagni.headingText)).toBeDefined();
  });

  it("renders the component with readableOverConcise heading text", () => {
    expect(
      screen.queryAllByAltText(PRN.readableOverConcise.headingText)
    ).toBeDefined();
  });

  it("renders the component with tdd heading text", () => {
    expect(screen.queryAllByAltText(PRN.tdd.headingText)).toBeDefined();
  });

  it("renders the component with selfCommentingCode heading text", () => {
    expect(
      screen.queryAllByAltText(PRN.selfCommentingCode.headingText)
    ).toBeDefined();
  });

  it("renders the component with noMagicNumbers heading text", () => {
    expect(
      screen.queryAllByAltText(PRN.noMagicNumbers.headingText)
    ).toBeDefined();
  });
});
