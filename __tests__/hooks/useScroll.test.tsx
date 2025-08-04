import { UseScroll } from "@/hooks/useScroll";
import "@testing-library/jest-dom";
import { act, renderHook } from "@testing-library/react";

describe("useScroll", () => {
  it("should respond to scroll events", () => {
    const { result } = renderHook(() => UseScroll());
    //Positive
    act(() => {
      // expect(result.current).toBe("Hello word");
      global.window.scrollY = 100;
      global.window.dispatchEvent(new Event("scroll"));
    });
    expect(result.current).toBe(true);
    //Negative
    act(() => {
      global.window.scrollY = 0;
      global.window.dispatchEvent(new Event("scroll"));
    });
    expect(result.current).toBe(false);
  });
});
