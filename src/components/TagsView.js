import React from "react";

const tags = [
  { title: "ベトナム システム開発 (19 Post)" },
  { title: "ベトナム　オフショア (17 Post)" },
  { title: "ベトナムIT会社 (17 Post)" },
  { title: "ベトナムシステム開発 (15 Post)" },
  { title: "ベトナムオフショア (12 Post)" },
];

function TagsView() {
  return (
    <div className="tags-view mt-3">
      {tags.map((tag, index) => {
        return (
          <div key={index} className="item mb-4">
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                viewBox="0 0 512 512"
              >
                <path d="M345 39.1L472.8 168.4c52.4 53 52.4 138.2 0 191.2L360.8 472.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L438.6 325.9c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM0 229.5V80C0 53.5 21.5 32 48 32H197.5c17 0 33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5zM144 144c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32z" />
              </svg>
              {tag.title}
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default TagsView;
