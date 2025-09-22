"use client";
import { ABOUT_ME_TEXT } from "@/lib/constants";
import React, { useState, useRef, useEffect, useCallback } from "react";

const LineNumberEditor = () => {
  const [lineCount, setLineCount] = useState<number>(1);
  const [wrappedLines, setWrappedLines] = useState<string[]>([]);
  const [isNarrow, setIsNarrow] = useState<boolean>(false);

  // Function to split text into wrapped lines, handling explicit newlines
  const getWrappedLines = useCallback(
    (inputText: string, containerWidth: number): string[] => {
      if (!textAreaRef.current || !hiddenDivRef.current) return [];

      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      if (!context) return [];
      const computedStyle = window.getComputedStyle(textAreaRef.current);
      context.font = `${computedStyle.fontSize} ${computedStyle.fontFamily}`;

      // Adjust available width: smaller subtraction when the screen is narrow (no * prefix)
      const maxWidth = containerWidth - (isNarrow ? 32 : 80);
      const allLines: string[] = [];

      // Split by explicit newlines first
      const paragraphs = inputText.split("\n");

      paragraphs.forEach((paragraph) => {
        if (paragraph.trim() === "") {
          // Empty line
          allLines.push("");
        } else {
          // Process each paragraph for word wrapping
          const words = paragraph.split(" ");
          let currentLine = "";

          for (let i = 0; i < words.length; i++) {
            const word = words[i];
            const testLine = currentLine + (currentLine ? " " : "") + word;
            const metrics = context.measureText(testLine);

            if (metrics.width > maxWidth && currentLine) {
              allLines.push(currentLine);
              currentLine = word;
            } else {
              currentLine = testLine;
            }
          }

          if (currentLine) {
            allLines.push(currentLine);
          }
        }
      });

      return allLines.length > 0 ? allLines : [""];
    },
    [isNarrow]
  );

  // Format text with /** on first line, optional * for each wrapped line, and */ on last line
  const formatTextForDisplay = (): string => {
    if (isNarrow) {
      return wrappedLines.length ? wrappedLines.join("\n") : "";
    }
    if (!wrappedLines.length) return "/**\n *\n */";

    const formattedLines = wrappedLines.map((line) => ` * ${line}`);
    return `/**\n${formattedLines.join("\n")}\n */`;
  };

  const displayText = formatTextForDisplay();
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const hiddenDivRef = useRef<HTMLDivElement | null>(null);

  const calculateLines = useCallback((): void => {
    if (!textAreaRef.current || !hiddenDivRef.current) return;

    const textarea = textAreaRef.current;
    const containerWidth = textarea.clientWidth;

    // Get wrapped lines based on actual text wrapping
    const wrapped = getWrappedLines(ABOUT_ME_TEXT, containerWidth);
    setWrappedLines(wrapped);

    // Line count differs by layout
    // Narrow: just wrapped lines; Wide: 1 (/**) + wrapped lines + 1 (*/)
    const totalLines = isNarrow ? wrapped.length : 1 + wrapped.length + 1;
    setLineCount(totalLines);
  }, [getWrappedLines, isNarrow]);

  useEffect(() => {
    // Initial state
    setIsNarrow(window.innerWidth < 768);
    calculateLines();

    // Recalculate on window resize
    const handleResize = () => {
      setIsNarrow(window.innerWidth < 768);
      setTimeout(calculateLines, 0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [calculateLines]);

  const lineNumbers = Array.from({ length: lineCount }, (_, i) => i + 1);

  return (
    <>
      <div className="md:overflow-hidden h-fit p-4 md:p-0">
        <div className="flex h-fit">
          {/* Line Numbers Panel */}
          <div className="px-8 py-2 hidden md:block">
            <div className=" text-base  text-foreground leading-6 text-right">
              {lineNumbers.map((num) => (
                <div key={num} className="h-6 flex items-center">
                  {num}
                </div>
              ))}
            </div>
          </div>

          {/* Text Display Area */}
          <div className="flex-1 relative">
            {/* Display formatted text */}
            <div className="absolute inset-0 md:py-2  text-base leading-6 text-foreground pointer-events-none whitespace-pre-wrap">
              {displayText}
            </div>

            {/* Input textarea (invisible but functional) */}
            <textarea
              ref={textAreaRef}
              value={ABOUT_ME_TEXT}
              id="text-area"
              className="w-full h-fit bg-transparent text-transparent text-base leading-6 resize-none outline-none border-none relative z-10"
              placeholder="Enter your text here..."
              disabled
              rows={lineNumbers.length}
            />

            {/* Hidden div for line calculation */}
            <div
              ref={hiddenDivRef}
              className="absolute top-0 left-0 invisible  text-base leading-6"
              style={{
                whiteSpace: "pre-wrap",
                wordWrap: "break-word",
                lineHeight: "1.5rem",
              }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LineNumberEditor;
